import { useEffect, useState } from "react";
import CircleLoader from "../components/CircleLoader";
import ItunesAlbum, { AlbumDataEntry } from "../components/ItunesAlbum";
import PageTitle from "../components/PageTitle";

const addDelay = () => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(null);
    }, 1000)
  );
};

interface ItunesTopAlbumsResponseData {
  feed: {
    entry: AlbumDataEntry[];
  };
}

const ItunesAlbumList = () => {
  const [albumDataEntries, setAlbumDataEntries] = useState<
    AlbumDataEntry[] | null
  >(null);

  useEffect(() => {
    const fetchAndSetAlbums = async () => {
      const fetchResult = await fetch(
        "https://itunes.apple.com/us/rss/topalbums/limit=100/json"
      );

      await addDelay();

      const fetchedData =
        (await fetchResult.json()) as ItunesTopAlbumsResponseData;

      console.log({ fetchedData });
      setAlbumDataEntries(fetchedData.feed.entry);
    };

    fetchAndSetAlbums();
  }, []);

  const albumComponents = albumDataEntries?.map((albumEntry, index) => {
    return (
      <ItunesAlbum key={index} place={index + 1} albumDataEntry={albumEntry} />
    );
  });

  return (
    <>
      <PageTitle title="Top Albums" />
      <CircleLoader show={albumDataEntries === null} />
      {albumComponents}
    </>
  );
};

export default ItunesAlbumList;

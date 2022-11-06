import { useEffect, useState } from "react";
import ItunesAlbum from "../components/ItunesAlbum";

interface AlbumDataEntry {
  ["im:name"]: {
    label: string;
  };
}

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

      const fetchedData =
        (await fetchResult.json()) as ItunesTopAlbumsResponseData;

      console.log({ fetchedData });
      setAlbumDataEntries(fetchedData.feed.entry);
    };

    fetchAndSetAlbums();
  }, []);

  const albumComponents = albumDataEntries?.map((albumEntry, index) => {
    return <ItunesAlbum key={index} albumDataEntry={albumEntry} />;
  });

  return (
    <>
      <div title="Hey I'm a div">Top Albums</div>
      {albumComponents}
    </>
  );
};

export default ItunesAlbumList;

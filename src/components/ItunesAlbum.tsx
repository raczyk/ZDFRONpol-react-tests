interface AlbumDataEntry {
  ["im:name"]: {
    label: string;
  };
}

interface ItunesAlbumProps {
  albumDataEntry: AlbumDataEntry;
}

const albumStyle = {
  margin: "10px",
  fontSize: "12px",
};

const ItunesAlbum = ({ albumDataEntry }: ItunesAlbumProps) => {
  return <div style={albumStyle}>{albumDataEntry["im:name"].label}</div>;
};

export default ItunesAlbum;

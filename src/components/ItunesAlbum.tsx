const albumStyle = {
  display: "flex",
  margin: "20px",
  fontSize: "12px",
};

const labelStyle = {
  margin: "10px",
};

const getCoverStyle = (imageUrl: string) => {
  const imageUrlSized = imageUrl.replace("60x60bb", "100x100bb");
  return {
    width: "100px",
    height: "100px",
    background: "blue",
    backgroundImage: `url("${imageUrlSized}")`,
  };
};

const albumInfoStyles = {
  margin: "8px",
};

const numberStyle = {
  margin: "5px",
};

interface ObjectWithlabel {
  label: string;
}

export interface AlbumDataEntry {
  ["im:name"]: ObjectWithlabel;
  ["im:artist"]: ObjectWithlabel;
  ["im:price"]: ObjectWithlabel;
  ["im:image"]: ObjectWithlabel[];
}

interface ItunesAlbumProps {
  place: number;
  albumDataEntry: AlbumDataEntry;
}

const ItunesAlbum = ({ albumDataEntry, place }: ItunesAlbumProps) => {
  const mediumSizeCoverImage = albumDataEntry["im:image"][1].label;

  return (
    <div style={albumStyle}>
      <div style={numberStyle}>{place}</div>
      <div style={getCoverStyle(mediumSizeCoverImage)}></div>
      <div style={albumInfoStyles}>
        <div style={labelStyle}>{albumDataEntry["im:name"].label}</div>
        <div style={labelStyle}>{albumDataEntry["im:artist"].label}</div>
        <div style={labelStyle}>{albumDataEntry["im:price"].label}</div>
      </div>
    </div>
  );
};

export default ItunesAlbum;

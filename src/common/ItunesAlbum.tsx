const albumStyle = {
  display: "flex",
  margin: "20px",
  fontSize: "12px",
};

const labelStyle = {
  margin: "10px",
};

const getCoverImageStyle = (imageUrl: string | undefined) => {
  const imageUrlSized = imageUrl
    ? imageUrl.replace("60x60bb", "100x100bb")
    : undefined;

  return {
    width: "100px",
    height: "100px",
    background: "blue",
    backgroundImage:
      imageUrl === undefined ? "none" : `url("${imageUrlSized}")`,
    backgroundSize: "contain",
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

interface PriceObject {
  label: string;
  attributes: {
    amount: string;
  };
}

export interface ItunesAlbumDataEntry {
  "im:name": ObjectWithlabel;
  "im:artist": ObjectWithlabel;
  "im:price"?: PriceObject;
  "im:image"?: ObjectWithlabel[];
}

interface ItunesAlbumProps {
  place: number;
  albumDataEntry: ItunesAlbumDataEntry;
}

const ItunesAlbum = ({ albumDataEntry, place }: ItunesAlbumProps) => {
  const mediumSizeCoverImageUrl = albumDataEntry?.["im:image"]?.[1]?.label;

  return (
    <div style={albumStyle}>
      <div style={numberStyle}>{place}</div>
      <div style={getCoverImageStyle(mediumSizeCoverImageUrl)}></div>
      <div style={albumInfoStyles}>
        <div style={labelStyle}>{albumDataEntry["im:name"].label}</div>
        <div style={labelStyle}>{albumDataEntry["im:artist"].label}</div>
        <div style={labelStyle}>{albumDataEntry?.["im:price"]?.label}</div>
      </div>
    </div>
  );
};

export default ItunesAlbum;

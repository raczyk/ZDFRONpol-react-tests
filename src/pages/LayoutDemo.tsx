import React from "react";

const LayoutDemo = () => {
  const boxStyle = {
    width: "50px",
    height: "50px",
    border: "3px solid green",
    display: "inline-block",
    position: "static" as "static",
  };

  const thirdBoxStyle = {
    ...boxStyle,
    position: "relative" as "relative",
    // top: "-80px",
  };

  return (
    <div style={{ width: "100vw" }}>
      <div style={boxStyle}>1</div>
      <div style={boxStyle}>2</div>
      <div style={thirdBoxStyle}>3</div>
      <div style={boxStyle}>4</div>
    </div>
  );
};

export default LayoutDemo;

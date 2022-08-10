import React from "react";
import "./DivBlock.css";

function DivBlock(props) {
  const { sectionTitle, paragraph } = props;

  return (
    <div className="div-block">
      <div className="section-title inter-bold-black-26px">{sectionTitle}</div>
      <p className="paragraph-12 inter-normal-black-14px">{paragraph}</p>
    </div>
  );
}

export default DivBlock;

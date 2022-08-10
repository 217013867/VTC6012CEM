import React from "react";
import DivBlock from "../DivBlock";
import "./Tour2.css";

function Tour2(props) {
  const { cardsImageMask, className, divBlockProps } = props;

  return (
    <div className={`tour-1 ${className || ""}`}>
      <div className="container">
        <div className="cards-grid-container">
          <img className="cards-image-mask-2" src={cardsImageMask} />
          <DivBlock sectionTitle={divBlockProps.sectionTitle} paragraph={divBlockProps.paragraph} />
        </div>
      </div>
    </div>
  );
}

export default Tour2;

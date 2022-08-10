import React from "react";
import "./CardsImageMask.css";

function CardsImageMask(props) {
  const { src } = props;

  return (
    <div className="cards-image-mask-3">
      <img className="cards-image-mask-4" src={src} />
    </div>
  );
}

export default CardsImageMask;

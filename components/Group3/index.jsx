import React from "react";
import "./Group3.css";

function Group3(props) {
  const { className } = props;

  return (
    <div className={`group-3 ${className || ""}`}>
      <div className="ellipse-5"></div>
      <img className="rectangle-2-4" src="/img/rectangle-2-1@2x.svg" />
    </div>
  );
}

export default Group3;

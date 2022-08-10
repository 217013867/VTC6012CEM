import React from "react";
import "./Group2.css";

function Group2(props) {
  const { className } = props;

  return (
    <div className={`group-2 ${className || ""}`}>
      <img className="rectangle-2-1" src="/img/rectangle-2@2x.svg" />
    </div>
  );
}

export default Group2;

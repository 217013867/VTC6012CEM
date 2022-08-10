import React from "react";
import "./ListItemOrdered.css";

function ListItemOrdered(props) {
  const { number, text, className } = props;

  return (
    <div className={`list-item-ordered-1 ${className || ""}`}>
      <div className="number inter-normal-nile-blue-14px">{number}</div>
      <div className="text-13 inter-normal-black-14px">{text}</div>
    </div>
  );
}

export default ListItemOrdered;

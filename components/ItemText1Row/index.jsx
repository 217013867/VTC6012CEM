import React from "react";
import "./ItemText1Row.css";

function ItemText1Row(props) {
  const { children, className } = props;

  return (
    <div className={`item-text-1-row-7 ${className || ""}`}>
      <div className="bender valign-text-middle inter-normal-cod-gray-20px">{children}</div>
    </div>
  );
}

export default ItemText1Row;

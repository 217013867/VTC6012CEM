import React from "react";
import "./Keyword.css";

function Keyword(props) {
  const { children, className } = props;

  return (
    <div className={`keyword-5 border-1px-bon-jour ${className || ""}`}>
      <div className="the-batman">{children}</div>
    </div>
  );
}

export default Keyword;

import React from "react";
import "./Button.css";

function Button(props) {
  const { children, className } = props;

  return (
    <div className={`button ${className || ""}`}>
      <div className="text valign-text-middle inter-medium-white-14px">{children}</div>
    </div>
  );
}

export default Button;

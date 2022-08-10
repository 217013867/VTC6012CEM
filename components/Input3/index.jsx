import React from "react";
import "./Input3.css";

function Input3(props) {
  const { children } = props;

  return (
    <div className="input-3">
      <div className="container-7">
        <div className="text-field-2">
          <p className="label-text-2 valign-text-middle inter-normal-stack-16px">{children}</p>
        </div>
      </div>
    </div>
  );
}

export default Input3;

import React from "react";
import ItemText1Row from "../ItemText1Row";
import "./RowMain.css";

function RowMain(props) {
  const { className, itemText1Row1Props, itemText1Row2Props } = props;

  return (
    <div className={`row-main ${className || ""}`}>
      <ItemText1Row>{itemText1Row1Props.children}</ItemText1Row>
      <ItemText1Row>{itemText1Row2Props.children}</ItemText1Row>
    </div>
  );
}

export default RowMain;

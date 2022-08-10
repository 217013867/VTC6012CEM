import React from "react";
import "./HeaderLeftAlignedNoSubheadRegular.css";

function HeaderLeftAlignedNoSubheadRegular(props) {
  const { children, className } = props;

  return (
    <div className={`header-left-aligned-no-subhead-regular ${className || ""}`}>
      <div className="frame-13">
        <div className="email valign-text-middle inter-semi-bold-abbey-20px">{children}</div>
      </div>
    </div>
  );
}

export default HeaderLeftAlignedNoSubheadRegular;

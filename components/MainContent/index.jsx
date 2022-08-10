import React from "react";
import "./MainContent.css";

function MainContent(props) {
  const { sectionTitle, paragraph, className } = props;

  return (
    <div className={`main-content-1 ${className || ""}`}>
      <div className="place-10 valign-text-middle inter-normal-mine-shaft-36px">Tours</div>
      <div className="section-title-5 inter-bold-black-24px">{sectionTitle}</div>
      <p className="paragraph-15 inter-normal-black-14px">{paragraph}</p>
    </div>
  );
}

export default MainContent;

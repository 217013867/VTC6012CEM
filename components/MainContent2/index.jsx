import React from "react";
import ListItemOrdered from "../ListItemOrdered";
import "./MainContent2.css";

function MainContent2(props) {
  const {
    place,
    sectionTitle1,
    paragraph1,
    sectionTitle2,
    paragraph2,
    paragraph3,
    sectionTitle3,
    player,
    listItemOrdered1Props,
    listItemOrdered2Props,
    listItemOrdered3Props,
    listItemOrdered4Props,
    listItemOrdered5Props,
    listItemOrdered6Props,
    listItemOrdered7Props,
    listItemOrdered8Props,
    listItemOrdered9Props,
    listItemOrdered10Props,
  } = props;

  return (
    <div className="main-content-3">
      <div className="place-14 valign-text-middle inter-normal-mine-shaft-36px">{place}</div>
      <div className="section-title-7 inter-bold-black-24px">{sectionTitle1}</div>
      <p className="paragraph-18 inter-normal-black-14px">{paragraph1}</p>
      <div className="main-content-item inter-bold-black-24px">{sectionTitle2}</div>
      <p className="paragraph-18 inter-normal-black-14px">{paragraph2}</p>
      <div className="main-content-item inter-bold-black-24px">{paragraph3}</div>
      <div className="list-ordered">
        <ListItemOrdered number={listItemOrdered1Props.number} text={listItemOrdered1Props.text} />
        <ListItemOrdered
          number={listItemOrdered2Props.number}
          text={listItemOrdered2Props.text}
          className={listItemOrdered2Props.className}
        />
        <ListItemOrdered
          number={listItemOrdered3Props.number}
          text={listItemOrdered3Props.text}
          className={listItemOrdered3Props.className}
        />
        <ListItemOrdered
          number={listItemOrdered4Props.number}
          text={listItemOrdered4Props.text}
          className={listItemOrdered4Props.className}
        />
        <ListItemOrdered
          number={listItemOrdered5Props.number}
          text={listItemOrdered5Props.text}
          className={listItemOrdered5Props.className}
        />
        <ListItemOrdered
          number={listItemOrdered6Props.number}
          text={listItemOrdered6Props.text}
          className={listItemOrdered6Props.className}
        />
        <ListItemOrdered
          number={listItemOrdered7Props.number}
          text={listItemOrdered7Props.text}
          className={listItemOrdered7Props.className}
        />
        <ListItemOrdered
          number={listItemOrdered8Props.number}
          text={listItemOrdered8Props.text}
          className={listItemOrdered8Props.className}
        />
        <ListItemOrdered
          number={listItemOrdered9Props.number}
          text={listItemOrdered9Props.text}
          className={listItemOrdered9Props.className}
        />
        <ListItemOrdered
          number={listItemOrdered10Props.number}
          text={listItemOrdered10Props.text}
          className={listItemOrdered10Props.className}
        />
      </div>
      <div className="section-title-8">{sectionTitle3}</div>
      <div style={{height: '500px', width:'1000px'}}>
        <iframe
            style={{width: '100%', height: '100%'}}
            src={player}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
        />
        {" "}
      </div>

    </div>
  );
}

export default MainContent2;

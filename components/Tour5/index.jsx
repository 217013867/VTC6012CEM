import React from "react";
import { Link } from "react-router-dom";
import Gallery from "../Gallery";
import ButtonDefault from "../ButtonDefault";
import Table2 from "../Table2";
import HeaderLeftAlignedNoSubheadRegular from "../HeaderLeftAlignedNoSubheadRegular";
import ItemText1Row from "../ItemText1Row";
import RowMain from "../RowMain";
import "./Tour5.css";

function Tour5(props) {
  const {
    graylineworldwide11,
    name,
    text14,
    navbarLinkPlace1,
    navbarLinkAboutUs,
    navbarLinkPlace2,
    navbarLinkVisaCardPromotion,
    navbarLinkOtherServices1,
    navbarLinkOtherServices2,
    navbarLinkContactUs,
    homeTourDeluxeHongKongIslandTour,
    paragraph,
    graylineworldwide12,
    surname,
    no179RuaDoCampo,
    place,
    fqa,
    contactUs,
    galleryProps,
    buttonDefault1Props,
    buttonDefault2Props,
    buttonDefault3Props,
    table2Props,
    headerLeftAlignedNoSubheadRegularProps,
    itemText1Row1Props,
    rowMainProps,
    itemText1Row2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="tour5 screen">
        <div className="nav-bar-13" id="nav-bar">
          <div className="flex-row-45">
            <img className="gray-line-worldwide-1-26" src={graylineworldwide11} />
            <div className="flex-col-29 poppins-normal-cod-gray-14px">
              <p className="name-14">{name}</p>
              <div className="text-14">{text14}</div>
            </div>
            <div className="overlap-group2-9">
              <div className="navbar-13">
                <Link to="/home-page">
                  <div className="navbar-link-place-26 poppins-normal-black-16px">{navbarLinkPlace1}</div>
                </Link>
                <Link to="/about-us">
                  <div className="navbar-link-about-us-13 poppins-normal-black-16px">{navbarLinkAboutUs}</div>
                </Link>
                <Link to="/tour">
                  <div className="navbar-link-place-27 poppins-normal-red-16px">{navbarLinkPlace2}</div>
                </Link>
                <Link to="/promotion-1">
                  <div className="navbar-link-visa-card-promotion-13 poppins-normal-black-16px">
                    {navbarLinkVisaCardPromotion}
                  </div>
                </Link>
                <Link to="/other-service">
                  <div className="navbar-link-other-services-26 poppins-normal-black-16px">
                    {navbarLinkOtherServices1}
                  </div>
                </Link>
                <Link to="/fqa">
                  <div className="navbar-link-other-services-27 poppins-normal-black-16px">
                    {navbarLinkOtherServices2}
                  </div>
                </Link>
                <div className="navbar-link-contact-us-13 poppins-normal-black-16px">{navbarLinkContactUs}</div>
              </div>
              <img className="icon-home-13" src="/img/navigation-icons-8@2x.svg" />
              <img className="megaphone-13" src="/img/megaphone-2@2x.svg" />
              <img className="icon-call-12" src="/img/phone-1@2x.svg" />
              <img className="question-13" src="/img/question@2x.svg" />
              <img className="users-three-13" src="/img/usersthree@2x.svg" />
              <img className="icon-plane-13" src="/img/airplane-2@2x.svg" />
              <img className="bag-13" src="/img/bag@2x.svg" />
            </div>
          </div>
          <div className="rectangle-58-26"></div>
        </div>
        <img className="home-tour-deluxe-hong-kong-island-tour" src={homeTourDeluxeHongKongIslandTour} />
        <div className="overlap-group4-5">
          <div className="overlap-group1-13">
            <div className="group-104">
              <div className="overlap-group-15">
                <Gallery className={galleryProps.className} />
                <div className="paragraph-20 inter-normal-black-20px">{paragraph}</div>
              </div>
              <div className="button-default-container-3">
                <ButtonDefault className={buttonDefault1Props.className}>{buttonDefault1Props.children}</ButtonDefault>
                <ButtonDefault className={buttonDefault2Props.className}>{buttonDefault2Props.children}</ButtonDefault>
                <ButtonDefault className={buttonDefault3Props.className}>{buttonDefault3Props.children}</ButtonDefault>
              </div>
            </div>
            <img className="main-content-5" src="/img/main-content-2@1x.svg" />
          </div>
          <div className="group-103-1">
            <Table2
              headerLeftAlignedNoSubheadRegularProps={table2Props.headerLeftAlignedNoSubheadRegularProps}
              rowMainProps={table2Props.rowMainProps}
            />
            <div className="flex-col-30">
              <HeaderLeftAlignedNoSubheadRegular className={headerLeftAlignedNoSubheadRegularProps.className}>
                {headerLeftAlignedNoSubheadRegularProps.children}
              </HeaderLeftAlignedNoSubheadRegular>
              <ItemText1Row className={itemText1Row1Props.className}>{itemText1Row1Props.children}</ItemText1Row>
            </div>
          </div>
          <RowMain
            className={rowMainProps.className}
            itemText1Row1Props={rowMainProps.itemText1Row1Props}
            itemText1Row2Props={rowMainProps.itemText1Row2Props}
          />
          <ItemText1Row className={itemText1Row2Props.className}>{itemText1Row2Props.children}</ItemText1Row>
          <div className="footer-13">
            <div className="overlap-group3-9">
              <img className="line-1-13" src="/img/line-1@1x.svg" />
              <div className="rectangle-58-27"></div>
            </div>
            <div className="flex-row-46">
              <div className="flex-col-31">
                <img className="gray-line-worldwide-1-27" src={graylineworldwide12} />
                <div className="flex-row-47">
                  <img className="icon-location_pin-13" src="/img/ep-location-7@2x.svg" />
                  <div className="surname-20 roboto-medium-black-22px">{surname}</div>
                </div>
                <div className="no-179-rua-do-campo-13 roboto-light-black-22px">{no179RuaDoCampo}</div>
              </div>
              <div className="frame-container-13">
                <div className="frame-1-13">
                  <div className="place-16 roboto-semi-bold-black-22px">{place}</div>
                  <Link to="/fqa">
                    <div className="fqa-14 roboto-semi-bold-black-22px">{fqa}</div>
                  </Link>
                  <Link to="/contact-us">
                    <div className="contact-us-14 roboto-semi-bold-black-22px">{contactUs}</div>
                  </Link>
                </div>
                <div className="frame-5-14">
                  <a href="https://www.facebook.com/Graylinehk" target="_blank">
                    <img className="icon-12" src="/img/facebook---negative@2x.svg" />
                  </a>
                  <a href="https://www.instagram.com/graylineaustralia/" target="_blank">
                    <img className="icon-12" src="/img/instagram---negative-1@2x.svg" />
                  </a>
                  <a href="https://twitter.com/grayline" target="_blank">
                    <img className="icon-12" src="/img/twitter---negative-16@2x.svg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tour5;

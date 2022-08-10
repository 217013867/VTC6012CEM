import React from "react";
import { Link } from "react-router-dom";
import Gallery from "../Gallery";
import ButtonDefault from "../ButtonDefault";
import Table from "../Table";
import HeaderLeftAlignedNoSubheadRegular from "../HeaderLeftAlignedNoSubheadRegular";
import ItemText1Row from "../ItemText1Row";
import "./Tour4.css";

function Tour4(props) {
  const {
    graylineworldwide11,
    name,
    text9,
    navbarLinkPlace1,
    navbarLinkAboutUs,
    navbarLinkPlace2,
    navbarLinkVisaCardPromotion,
    navbarLinkOtherServices1,
    navbarLinkOtherServices2,
    navbarLinkContactUs,
    homeTourHongKongDisneylandMagicTour,
    paragraph,
    graylineworldwide12,
    surname,
    no179RuaDoCampo,
    place,
    fqa,
    contactUs,
    buttonDefault1Props,
    buttonDefault2Props,
    buttonDefault3Props,
    tableProps,
    headerLeftAlignedNoSubheadRegularProps,
    itemText1RowProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="tour4 screen">
        <div className="nav-bar-8" id="nav-bar">
          <div className="flex-row-25">
            <img className="gray-line-worldwide-1-16" src={graylineworldwide11} />
            <div className="flex-col-17 poppins-normal-cod-gray-14px">
              <p className="name-9">{name}</p>
              <div className="text-9">{text9}</div>
            </div>
            <div className="overlap-group2-5">
              <div className="navbar-8">
                <Link to="/home-page">
                  <div className="navbar-link-place-16 poppins-normal-black-16px">{navbarLinkPlace1}</div>
                </Link>
                <Link to="/about-us">
                  <div className="navbar-link-about-us-8 poppins-normal-black-16px">{navbarLinkAboutUs}</div>
                </Link>
                <Link to="/tour">
                  <div className="navbar-link-place-17 poppins-normal-red-16px">{navbarLinkPlace2}</div>
                </Link>
                <Link to="/promotion-1">
                  <div className="navbar-link-visa-card-promotion-8 poppins-normal-black-16px">
                    {navbarLinkVisaCardPromotion}
                  </div>
                </Link>
                <Link to="/other-service">
                  <div className="navbar-link-other-services-16 poppins-normal-black-16px">
                    {navbarLinkOtherServices1}
                  </div>
                </Link>
                <Link to="/fqa">
                  <div className="navbar-link-other-services-17 poppins-normal-black-16px">
                    {navbarLinkOtherServices2}
                  </div>
                </Link>
                <div className="navbar-link-contact-us-8 poppins-normal-black-16px">{navbarLinkContactUs}</div>
              </div>
              <img className="icon-home-8" src="/img/navigation-icons-8@2x.svg" />
              <img className="megaphone-8" src="/img/megaphone-2@2x.svg" />
              <img className="icon-call-8" src="/img/phone-1@2x.svg" />
              <img className="question-8" src="/img/question@2x.svg" />
              <img className="users-three-8" src="/img/usersthree@2x.svg" />
              <img className="icon-plane-8" src="/img/airplane-2@2x.svg" />
              <img className="bag-8" src="/img/bag@2x.svg" />
            </div>
          </div>
          <div className="rectangle-58-16"></div>
        </div>
        <img className="home-tour-hong-kong" src={homeTourHongKongDisneylandMagicTour} />
        <div className="overlap-group4-3">
          <div className="overlap-group1-8">
            <div className="overlap-group-8">
              <Gallery />
              <ButtonDefault className={buttonDefault1Props.className}>{buttonDefault1Props.children}</ButtonDefault>
              <ButtonDefault className={buttonDefault2Props.className}>{buttonDefault2Props.children}</ButtonDefault>
              <ButtonDefault className={buttonDefault3Props.className}>{buttonDefault3Props.children}</ButtonDefault>
              <img className="main-content" src="/img/main-content@1x.svg" />
            </div>
            <div className="paragraph-13 inter-normal-black-20px">{paragraph}</div>
            <div className="group-103">
              <Table headerRow={tableProps.headerRow} rowMainProps={tableProps.rowMainProps} />
              <div className="flex-col-18">
                <HeaderLeftAlignedNoSubheadRegular>
                  {headerLeftAlignedNoSubheadRegularProps.children}
                </HeaderLeftAlignedNoSubheadRegular>
                <ItemText1Row className={itemText1RowProps.className}>{itemText1RowProps.children}</ItemText1Row>
              </div>
            </div>
          </div>
          <div className="footer-8">
            <div className="overlap-group3-5">
              <img className="line-1-8" src="/img/line-1@1x.svg" />
              <div className="rectangle-58-17"></div>
            </div>
            <div className="flex-row-26">
              <div className="flex-col-19">
                <img className="gray-line-worldwide-1-17" src={graylineworldwide12} />
                <div className="flex-row-27">
                  <img className="icon-location_pin-8" src="/img/ep-location-6@2x.svg" />
                  <div className="surname-10 roboto-medium-black-22px">{surname}</div>
                </div>
                <div className="no-179-rua-do-campo-8 roboto-light-black-22px">{no179RuaDoCampo}</div>
              </div>
              <div className="frame-container-8">
                <div className="frame-1-8">
                  <div className="place-8 roboto-semi-bold-black-22px">{place}</div>
                  <Link to="/fqa">
                    <div className="fqa-9 roboto-semi-bold-black-22px">{fqa}</div>
                  </Link>
                  <Link to="/contact-us">
                    <div className="contact-us-8 roboto-semi-bold-black-22px">{contactUs}</div>
                  </Link>
                </div>
                <div className="frame-5-8">
                  <a href="https://www.facebook.com/Graylinehk" target="_blank">
                    <img className="icon-8" src="/img/facebook---negative@2x.svg" />
                  </a>
                  <a href="https://www.instagram.com/graylineaustralia/" target="_blank">
                    <img className="icon-8" src="/img/instagram---negative-1@2x.svg" />
                  </a>
                  <a href="https://twitter.com/grayline" target="_blank">
                    <img className="icon-8" src="/img/twitter---negative-8@2x.svg" />
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

export default Tour4;

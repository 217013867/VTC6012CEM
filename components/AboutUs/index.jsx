import React from "react";
import { Link } from "react-router-dom";
import "./AboutUs.css";

function AboutUs(props) {
  const {
    graylineworldwide11,
    name,
    text3,
    navbarLinkPlace1,
    navbarLinkAboutUs,
    navbarLinkPlace2,
    navbarLinkVisaCardPromotion,
    navbarLinkOtherServices1,
    navbarLinkOtherServices2,
    navbarLinkContactUs,
    homeAboutUs,
    aboutUs,
    surname1,
    graylineworldwide12,
    surname2,
    no179RuaDoCampo,
    place,
    fqa,
    contactUs,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="about-us screen">
        <div className="nav-bar-2">
          <div className="flex-row-7">
            <img className="gray-line-worldwide-1-4" src={graylineworldwide11} />
            <div className="flex-col-4 poppins-normal-cod-gray-14px">
              <p className="name-3">{name}</p>
              <div className="text-3">{text3}</div>
            </div>
            <div className="overlap-group1-2">
              <div className="navbar-2">
                <Link to="/home-page">
                  <div className="navbar-link-place-4 poppins-normal-black-16px">{navbarLinkPlace1}</div>
                </Link>
                <Link to="/about-us">
                  <div className="navbar-link-about-us-2 poppins-normal-red-16px">{navbarLinkAboutUs}</div>
                </Link>
                <Link to="/tour">
                  <div className="navbar-link-place-5 poppins-normal-black-16px">{navbarLinkPlace2}</div>
                </Link>
                <Link to="/promotion-1">
                  <div className="navbar-link-visa-card-promotion-2 poppins-normal-black-16px">
                    {navbarLinkVisaCardPromotion}
                  </div>
                </Link>
                <Link to="/other-service">
                  <div className="navbar-link-other-services-4 poppins-normal-black-16px">
                    {navbarLinkOtherServices1}
                  </div>
                </Link>
                <Link to="/fqa">
                  <div className="navbar-link-other-services-5 poppins-normal-black-16px">
                    {navbarLinkOtherServices2}
                  </div>
                </Link>
                <Link to="/contact-us">
                  <div className="navbar-link-contact-us-1 poppins-normal-black-16px">
                    {navbarLinkContactUs}
                  </div>
                </Link>
              </div>
              <img className="icon-home-2" src="/img/navigation-icons-1@2x.svg" />
              <img className="megaphone-2" src="/img/megaphone-1@2x.svg" />
              <img className="icon-call-2" src="/img/phone-1@2x.svg" />
              <img className="question-2" src="/img/question@2x.svg" />
              <img className="users-three-2" src="/img/usersthree-1@2x.svg" />
              <img className="icon-plane-2" src="/img/airplane@2x.svg" />
              <img className="bag-2" src="/img/bag@2x.svg" />
            </div>
          </div>
          <div className="rectangle-58-4"></div>
        </div>
        <img className="home-about-us" src={homeAboutUs} />
        <div className="group-101">
          <div className="flex-col-5">
            <div className="about-us-1 valign-text-middle inter-normal-mine-shaft-36px">{aboutUs}</div>
            <p className="surname-2 inter-normal-mine-shaft-14px">{surname1}</p>
          </div>
          <div className="overlap-group-2">
            <img className="x1-1" src="/img/1@1x.svg" />
            <img className="x2" src="/img/2@1x.svg" />
            <img className="x3" src="/img/3@2x.svg" />
            <img className="x4" src="/img/4@2x.svg" />
          </div>
        </div>
        <div className="footer-2">
          <div className="overlap-group2-1">
            <img className="line-1-2" src="/img/line-1@1x.svg" />
            <div className="rectangle-58-5"></div>
          </div>
          <div className="flex-row-8">
            <div className="flex-col-6">
              <img className="gray-line-worldwide-1-5" src={graylineworldwide12} />
              <div className="flex-row-9">
                <img className="icon-location_pin-2" src="/img/ep-location-1@2x.svg" />
                <div className="surname-3 roboto-medium-black-22px">{surname2}</div>
              </div>
              <div className="no-179-rua-do-campo-2 roboto-light-black-22px">{no179RuaDoCampo}</div>
            </div>
            <div className="frame-container-2">
              <div className="frame-1-2">
                <Link to="/home-page">
                  <div className="place-1 roboto-semi-bold-black-22px">{place}</div>
                </Link>
                <Link to="/fqa">
                  <div className="fqa-2 roboto-semi-bold-black-22px">{fqa}</div>
                </Link>
                <Link to="/contact-us">
                  <div className="contact-us-2 roboto-semi-bold-black-22px">{contactUs}</div>
                </Link>
              </div>
              <div className="frame-5-2">
                <a href="https://www.facebook.com/Graylinehk" target="_blank">
                  <img className="icon-2" src="/img/facebook---negative@2x.svg" />
                </a>
                <a href="https://www.instagram.com/graylineaustralia/" target="_blank">
                  <img className="icon-2" src="/img/instagram---negative-1@2x.svg" />
                </a>
                <a href="https://twitter.com/grayline" target="_blank">
                  <img className="icon-2" src="/img/twitter---negative-1@2x.svg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

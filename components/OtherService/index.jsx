import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../Carousel";
import "./OtherService.css";

function OtherService(props) {
  const {
    graylineworldwide11,
    name,
    text7,
    navbarLinkPlace1,
    navbarLinkAboutUs,
    navbarLinkPlace2,
    navbarLinkVisaCardPromotion,
    navbarLinkOtherServices1,
    navbarLinkOtherServices2,
    navbarLinkContactUs,
    homeOtherService,
    otherService,
    graylineworldwide12,
    surname,
    no179RuaDoCampo,
    place,
    fqa,
    contactUs,
    carouselProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="other-service screen">
        <div className="nav-bar-6">
          <div className="flex-row-19">
            <img className="gray-line-worldwide-1-12" src={graylineworldwide11} />
            <div className="flex-col-13 poppins-normal-cod-gray-14px">
              <p className="name-7">{name}</p>
              <div className="text-7">{text7}</div>
            </div>
            <div className="overlap-group-6">
              <div className="navbar-6">
                <Link to="/home-page">
                  <div className="navbar-link-place-12 poppins-normal-black-16px">{navbarLinkPlace1}</div>
                </Link>
                <Link to="/about-us">
                  <div className="navbar-link-about-us-6">{navbarLinkAboutUs}</div>
                </Link>
                <Link to="/tour">
                  <div className="navbar-link-place-13 poppins-normal-black-16px">{navbarLinkPlace2}</div>
                </Link>
                <Link to="/promotion-1">
                  <div className="navbar-link-visa-card-promotion-6 poppins-normal-black-16px">
                    {navbarLinkVisaCardPromotion}
                  </div>
                </Link>
                <Link to="/other-service">
                  <div className="navbar-link-other-services-12 poppins-normal-red-16px">
                    {navbarLinkOtherServices1}
                  </div>
                </Link>
                <Link to="/fqa">
                  <div className="navbar-link-other-services-13 poppins-normal-black-16px">
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
              <img className="megaphone-6" src="/img/megaphone@2x.svg" />
              <img className="icon-call-6" src="/img/phone-1@2x.svg" />
              <img className="question-6" src="/img/question@2x.svg" />
              <img className="users-three-6" src="/img/usersthree@2x.svg" />
              <img className="icon-plane-6" src="/img/airplane@2x.svg" />
              <img className="bag-6" src="/img/bag222.svg" />
            </div>
          </div>
          <div className="rectangle-58-12"></div>
        </div>
        <img className="home-other-service" src={homeOtherService} />
        <div className="overlap-group2-3">
          <div className="content">
            <div className="intro-section">
              <div className="other-service-1">{otherService}</div>
            </div>
            <Carousel desctritpion={carouselProps.desctritpion} />
          </div>
          <div className="footer-6">
            <div className="overlap-group1-6">
              <img className="line-1-6" src="/img/line-1-6@1x.svg" />
              <div className="rectangle-58-13"></div>
            </div>
            <div className="flex-row-20">
              <div className="flex-col-14">
                <img className="gray-line-worldwide-1-13" src={graylineworldwide12} />
                <div className="flex-row-21">
                  <img className="icon-location_pin-2" src="/img/ep-location-1@2x.svg" />
                  <div className="surname-8 roboto-medium-black-22px">{surname}</div>
                </div>
                <div className="no-179-rua-do-campo-6 roboto-light-black-22px">{no179RuaDoCampo}</div>
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
    </div>
  );
}

export default OtherService;

import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage(props) {
  const {
    x951024_Auto_X21,
    findYourSpecialExperienceInMacau,
    iconicToursToIconicPlaces,
    macauWasTheFirst,
    name1,
    surname,
    no179RuaDoCampo,
    place,
    fqa,
    contactUs,
    graylineworldwide12,
    name2,
    text2,
    navbarLinkPlace1,
    navbarLinkAboutUs,
    navbarLinkPlace2,
    navbarLinkVisaCardPromotion,
    navbarLinkOtherServices1,
    navbarLinkOtherServices2,
    navbarLinkContactUs,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="home-page screen">
        <div className="overlap-group3-1">
          <img className="x95-1024_auto_x2-1" src={x951024_Auto_X21} />
          <div className="title">
            <div className="find-your-special-experience-in-macau">{findYourSpecialExperienceInMacau}</div>
            <div className="iconic-tours-to-iconic-places">{iconicToursToIconicPlaces}</div>
          </div>
          <div className="sub-title poppins-normal-abbey-14px">
            <p className="macau-was-the-first">{macauWasTheFirst}</p>
            <p className="name-1">{name1}</p>
          </div>

          <div className="nav-bar-1">
            <div className="flex-row-6">
              <img className="gray-line-worldwide-1-3" src={graylineworldwide12} />
              <div className="flex-col-3 poppins-normal-cod-gray-14px">
                <p className="name-2">{name2}</p>
                <div className="text-2">{text2}</div>
              </div>
              <div className="overlap-group2">
                <div className="navbar-1">
                  <Link to="/home-page">
                    <div className="navbar-link-place-2 poppins-normal-red-16px">{navbarLinkPlace1}</div>
                  </Link>
                  <Link to="/about-us">
                    <div className="navbar-link-about-us-1 poppins-normal-black-16px">{navbarLinkAboutUs}</div>
                  </Link>
                  <Link to="/tour">
                    <div className="navbar-link-place-3 poppins-normal-black-16px">{navbarLinkPlace2}</div>
                  </Link>
                  <Link to="/promotion-1">
                    <div className="navbar-link-visa-card-promotion-1 poppins-normal-black-16px">
                      {navbarLinkVisaCardPromotion}
                    </div>
                  </Link>
                  <Link to="/other-service">
                    <div className="navbar-link-other-services-2 poppins-normal-black-16px">
                      {navbarLinkOtherServices1}
                    </div>
                  </Link>
                  <Link to="/fqa">
                    <div className="navbar-link-other-services-3 poppins-normal-black-16px">
                      {navbarLinkOtherServices2}
                    </div>
                  </Link>
                  <Link to="/contact-us">
                    <div className="navbar-link-contact-us-1 poppins-normal-black-16px">
                      {navbarLinkContactUs}
                    </div>
                  </Link>
                </div>
                <img className="icon-home-1" src="/img/navigation-icons@2x.svg" />
                <img className="megaphone-1" src="/img/megaphone@2x.svg" />
                <img className="icon-call-1" src="/img/phone-1@2x.svg" />
                <img className="question-1" src="/img/question@2x.svg" />
                <img className="users-three-1" src="/img/usersthree@2x.svg" />
                <img className="icon-plane-1" src="/img/airplane@2x.svg" />
                <img className="bag-1" src="/img/bag@2x.svg" />
              </div>
            </div>
            <div className="rectangle-58-3"></div>
          </div>
        </div>
        <div className="footer-2222222222">
          <div className="overlap-group2-1">
            <img className="line-1-2" src="/img/line-1@1x.svg" />
            <div className="rectangle-58-5"></div>
          </div>
          <div className="flex-row-8">
            <div className="flex-col-6">
              <img className="gray-line-worldwide-1-5" src={graylineworldwide12} />
              <div className="flex-row-9">
                <img className="icon-location_pin-2" src="/img/ep-location-1@2x.svg" />
                <div className="surname-3 roboto-medium-black-22px">{surname}</div>
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

export default HomePage;

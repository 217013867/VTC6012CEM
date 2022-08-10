import React from "react";
import { Link } from "react-router-dom";
import MainContent from "../MainContent";
import Group107 from "../Group107";
import ButtonDefault from "../ButtonDefault";
import "./Tour3.css";

function Tour3(props) {
  const {
    graylineworldwide11,
    name,
    text10,
    navbarLinkPlace1,
    navbarLinkAboutUs,
    navbarLinkPlace2,
    navbarLinkVisaCardPromotion,
    navbarLinkOtherServices1,
    navbarLinkOtherServices2,
    navbarLinkContactUs,
    homeTourMacauTourGuideAndLimousineS,
    mop28001St4Hrs,
    surname1,
    specifications1,
    pngegg21,
    paragraph1,
    address1,
    automatic1,
    surname2,
    mop26001St4Hrs1,
    surname3,
    specifications2,
    pngegg22,
    paragraph2,
    address2,
    automatic2,
    x7SeaterVan,
    mop26001St4Hrs2,
    surname4,
    specifications3,
    pngegg23,
    paragraph3,
    address3,
    automatic3,
    x20SeaterCoach,
    graylineworldwide12,
    surname5,
    no179RuaDoCampo,
    place,
    fqa,
    contactUs,
    mainContentProps,
    buttonDefault1Props,
    buttonDefault2Props,
    buttonDefault3Props,
    buttonDefault4Props,
    buttonDefault5Props,
    buttonDefault6Props,
    buttonDefault7Props,
    buttonDefault8Props,
    buttonDefault9Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="tour3 screen">
        <div className="nav-bar-9" id="nav-bar">
          <div className="flex-row-32">
            <img className="gray-line-worldwide-1-18" src={graylineworldwide11} />
            <div className="flex-col-20 poppins-normal-cod-gray-14px">
              <p className="name-10">{name}</p>
              <div className="text-10">{text10}</div>
            </div>
            <div className="overlap-group5-3">
              <div className="navbar-9">
                <Link to="/home-page">
                  <div className="navbar-link-place-18 poppins-normal-black-16px">{navbarLinkPlace1}</div>
                </Link>
                <Link to="/about-us">
                  <div className="navbar-link-about-us-9 poppins-normal-black-16px">{navbarLinkAboutUs}</div>
                </Link>
                <Link to="/tour">
                  <div className="navbar-link-place-19 poppins-normal-red-16px">{navbarLinkPlace2}</div>
                </Link>
                <Link to="/promotion-1">
                  <div className="navbar-link-visa-card-promotion-9 poppins-normal-black-16px">
                    {navbarLinkVisaCardPromotion}
                  </div>
                </Link>
                <Link to="/other-service">
                  <div className="navbar-link-other-services-18 poppins-normal-black-16px">
                    {navbarLinkOtherServices1}
                  </div>
                </Link>
                <Link to="/fqa">
                  <div className="navbar-link-other-services-19 poppins-normal-black-16px">
                    {navbarLinkOtherServices2}
                  </div>
                </Link>
                <div className="navbar-link-contact-us-9 poppins-normal-black-16px">{navbarLinkContactUs}</div>
              </div>
              <img className="icon-home-9" src="/img/navigation-icons-9@2x.svg" />
              <img className="megaphone-9" src="/img/megaphone-2@2x.svg" />
              <img className="icon-call-9" src="/img/phone-1@2x.svg" />
              <img className="question-9" src="/img/question@2x.svg" />
              <img className="users-three-9" src="/img/usersthree@2x.svg" />
              <img className="icon-plane-9" src="/img/airplane-2@2x.svg" />
              <img className="bag-9" src="/img/bag@2x.svg" />
            </div>
          </div>
          <div className="rectangle-58-18"></div>
        </div>
        <img className="home-tour-macau-tour" src={homeTourMacauTourGuideAndLimousineS} />
        <div className="group-115">
          <MainContent sectionTitle={mainContentProps.sectionTitle} paragraph={mainContentProps.paragraph} />
          <div className="overlap-group-12">
            <div className="overlap-group1-9">
              <div className="mop2 valign-text-middle poppins-light-black-20px">{mop28001St4Hrs}</div>
              <div className="surname-11 valign-text-middle poppins-light-black-20px">{surname1}</div>
              <div className="specifications valign-text-middle poppins-bold-red-20px">{specifications1}</div>
              <img className="icon-user" src="/img/users---account@2x.svg" />
              <Group107 />
              <img className="transport-car" src="/img/transport---car@2x.svg" />
              <img className="pngegg-2" src={pngegg21} />
              <div className="rectangle-62 border-1px-black"></div>
              <ButtonDefault className={buttonDefault1Props.className}>{buttonDefault1Props.children}</ButtonDefault>
              <ButtonDefault className={buttonDefault2Props.className}>{buttonDefault2Props.children}</ButtonDefault>
              <ButtonDefault className={buttonDefault3Props.className}>{buttonDefault3Props.children}</ButtonDefault>
              <p className="paragraph-14 inter-normal-black-14px">{paragraph1}</p>
              <div className="address valign-text-middle poppins-normal-orange-red-20px">{address1}</div>
              <div className="automatic valign-text-middle poppins-normal-monza-20px">{automatic1}</div>
              <div className="surname-12 valign-text-middle poppins-normal-alizarin-crimson-20px">{surname2}</div>
            </div>
            <img className="currency-dollar-usd" src="/img/currency-dollar--usd-@2x.svg" />
          </div>
          <div className="overlap-group-12">
            <div className="mop2 valign-text-middle poppins-light-black-20px">{mop26001St4Hrs1}</div>
            <div className="surname-11 valign-text-middle poppins-light-black-20px">{surname3}</div>
            <div className="specifications valign-text-middle poppins-bold-red-20px">{specifications2}</div>
            <img className="icon-user" src="/img/users---account@2x.svg" />
            <Group107 />
            <img className="transport-car" src="/img/transport---car@2x.svg" />
            <img className="pngegg-2" src={pngegg22} />
            <div className="rectangle-62 border-1px-black"></div>
            <ButtonDefault className={buttonDefault4Props.className}>{buttonDefault4Props.children}</ButtonDefault>
            <ButtonDefault className={buttonDefault5Props.className}>{buttonDefault5Props.children}</ButtonDefault>
            <ButtonDefault className={buttonDefault6Props.className}>{buttonDefault6Props.children}</ButtonDefault>
            <p className="paragraph-14 inter-normal-black-14px">{paragraph2}</p>
            <div className="address valign-text-middle poppins-normal-orange-red-20px">{address2}</div>
            <div className="automatic valign-text-middle poppins-normal-monza-20px">{automatic2}</div>
            <div className="x7-seater-van valign-text-middle poppins-normal-alizarin-crimson-20px">{x7SeaterVan}</div>
          </div>
          <div className="overlap-group-12">
            <div className="mop2 valign-text-middle poppins-light-black-20px">{mop26001St4Hrs2}</div>
            <div className="surname-11 valign-text-middle poppins-light-black-20px">{surname4}</div>
            <div className="specifications valign-text-middle poppins-bold-red-20px">{specifications3}</div>
            <img className="icon-user" src="/img/users---account@2x.svg" />
            <Group107 />
            <img className="transport-car" src="/img/transport---car@2x.svg" />
            <img className="pngegg-2-1" src={pngegg23} />
            <div className="rectangle-62 border-1px-black"></div>
            <ButtonDefault className={buttonDefault7Props.className}>{buttonDefault7Props.children}</ButtonDefault>
            <ButtonDefault className={buttonDefault8Props.className}>{buttonDefault8Props.children}</ButtonDefault>
            <ButtonDefault className={buttonDefault9Props.className}>{buttonDefault9Props.children}</ButtonDefault>
            <p className="paragraph-14 inter-normal-black-14px">{paragraph3}</p>
            <div className="address valign-text-middle poppins-normal-orange-red-20px">{address3}</div>
            <div className="automatic valign-text-middle poppins-normal-monza-20px">{automatic3}</div>
            <div className="x20-seater-coach valign-text-middle poppins-normal-alizarin-crimson-20px">
              {x20SeaterCoach}
            </div>
          </div>
        </div>
        <div className="footer-9">
          <div className="overlap-group6">
            <img className="line-1-9" src="/img/line-1-9@1x.svg" />
            <div className="rectangle-58-19"></div>
          </div>
          <div className="flex-row-33">
            <div className="flex-col-21">
              <img className="gray-line-worldwide-1-19" src={graylineworldwide12} />
              <div className="flex-row-34">
                <img className="icon-location_pin-9" src="/img/ep-location-1@2x.svg" />
                <div className="surname-13 roboto-medium-black-22px">{surname5}</div>
              </div>
              <div className="no-179-rua-do-campo-9 roboto-light-black-22px">{no179RuaDoCampo}</div>
            </div>
            <div className="frame-container-9">
              <div className="frame-1-9">
                <Link to="/home-page">
                  <div className="place-1 roboto-semi-bold-black-22px">{place}</div>
                </Link>
                <Link to="/fqa">
                  <div className="fqa-10 roboto-semi-bold-black-22px">{fqa}</div>
                </Link>
                <Link to="/contact-us">
                  <div className="contact-us-9 roboto-semi-bold-black-22px">{contactUs}</div>
                </Link>
              </div>
              <div className="frame-5-9">
                <a href="https://www.facebook.com/Graylinehk" target="_blank">
                  <img className="icon-9" src="/img/facebook---negative@2x.svg" />
                </a>
                <a href="https://www.instagram.com/graylineaustralia/" target="_blank">
                  <img className="icon-9" src="/img/instagram---negative-1@2x.svg" />
                </a>
                <a href="https://twitter.com/grayline" target="_blank">
                  <img className="icon-9" src="/img/twitter---negative-9@2x.svg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tour3;

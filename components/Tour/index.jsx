import React from "react";
import { Link } from "react-router-dom";
import Tour2 from "../Tour2";
import CardsImageMask from "../CardsImageMask";
import ButtonDefault from "../ButtonDefault";
import "./Tour.css";

function Tour(props) {
  const {
    graylineworldwide11,
    name,
    text6,
    navbarLinkPlace1,
    navbarLinkAboutUs,
    navbarLinkPlace2,
    navbarLinkVisaCardPromotion,
    navbarLinkOtherServices1,
    navbarLinkOtherServices2,
    navbarLinkContactUs,
    homeTour,
    paragraph1,
    paragraph2,
    paragraph3,
    paragraph4,
    paragraph5,
    paragraph6,
    paragraph7,
    paragraph8,
    cardsImageMask,
    paragraph9,
    paragraph10,
    paragraph11,
    paragraph12,
    graylineworldwide12,
    surname,
    no179RuaDoCampo,
    place,
    fqa,
    contactUs,
    tour21Props,
    cardsImageMask1Props,
    buttonDefault1Props,
    cardsImageMask2Props,
    buttonDefault2Props,
    cardsImageMask3Props,
    buttonDefault3Props,
    tour22Props,
    cardsImageMask4Props,
    buttonDefault4Props,
    buttonDefault5Props,
    cardsImageMask5Props,
    buttonDefault6Props,
    buttonDefault7Props,
    buttonDefault8Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="tour screen">
        <div className="nav-bar-5" id="nav-bar">
          <div className="flex-row-16">
            <img className="gray-line-worldwide-1-10" src={graylineworldwide11} />
            <div className="flex-col-11 poppins-normal-cod-gray-14px">
              <p className="name-6">{name}</p>
              <div className="text-6">{text6}</div>
            </div>
            <div className="overlap-group2-2">
              <div className="navbar-5">
                <Link to="/home-page">
                  <div className="navbar-link-place-4 poppins-normal-black-16px">{navbarLinkPlace1}</div>
                </Link>
                <Link to="/about-us">
                  <div className="navbar-link-about-us-5 poppins-normal-black-16px">{navbarLinkAboutUs}</div>
                </Link>
                <a href="#home-tour">
                  <div className="navbar-link-place-11 poppins-normal-red-16px">{navbarLinkPlace2}</div>
                </a>
                <Link to="/promotion-1">
                  <div className="navbar-link-visa-card-promotion-5 poppins-normal-black-16px">
                    {navbarLinkVisaCardPromotion}
                  </div>
                </Link>
                <Link to="/other-service">
                  <div className="navbar-link-other-services-10 poppins-normal-black-16px">
                    {navbarLinkOtherServices1}
                  </div>
                </Link>
                <Link to="/fqa">
                  <div className="navbar-link-other-services-11 poppins-normal-black-16px">
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
              <img className="icon-call-5" src="/img/phone-1@2x.svg" />
              <img className="question-5" src="/img/question@2x.svg" />
              <img className="users-three-5" src="/img/usersthree@2x.svg" />
              <img className="icon-plane-5" src="/img/airplane22.svg"/>
              <img className="bag-5" src="/img/bag@2x.svg" />
            </div>
          </div>
          <div className="rectangle-58-10"></div>
        </div>
        <img className="home-tour" id="home-tour" src={homeTour} />
        <div className="macau">
          <div className="overlap-group-5">
            <Tour2 cardsImageMask={tour21Props.cardsImageMask} divBlockProps={tour21Props.divBlockProps} />
            <div className="rectangle-61 border-1px-black"></div>
            <div className="group">
              <div className="card-container">
                <div className="card-1">
                  <CardsImageMask src={cardsImageMask1Props.src} />
                  <img className="paragraph" src={paragraph1} />
                  <img className="paragraph-1" src={paragraph2} />
                  <ButtonDefault to={'/tour1'}>{buttonDefault1Props.children}</ButtonDefault>
                </div>
                <div className="card-3">
                  <CardsImageMask src={cardsImageMask2Props.src} />
                  <img className="paragraph-2" src={paragraph3} />
                  <img className="paragraph-3" src={paragraph4} />
                  <ButtonDefault to={'/tour3'}>{buttonDefault2Props.children}</ButtonDefault>
                </div>
              </div>
              <div className="card-2">
                <CardsImageMask src={cardsImageMask3Props.src} />
                <img className="paragraph-4" src={paragraph5} />
                <img className="paragraph-5" src={paragraph6} />
                <ButtonDefault to={'/tour2'}>{buttonDefault3Props.children}</ButtonDefault>
              </div>
            </div>
          </div>
        </div>
        <div className="hong-kong">
          <div className="overlap-group1-5">
            <Tour2
              cardsImageMask={tour22Props.cardsImageMask}
              className={tour22Props.className}
              divBlockProps={tour22Props.divBlockProps}
            />
            <div className="rectangle-61 border-1px-black"></div>
            <div className="card">
              <div className="card-container-1">
                <div className="card-1">
                  <CardsImageMask src={cardsImageMask4Props.src} />
                  <img className="paragraph-6" src={paragraph7} />
                  <img className="paragraph-7" src={paragraph8} />
                  <ButtonDefault to={'/tour4'}>{buttonDefault4Props.children}</ButtonDefault>
                </div>
                <div className="card-3-1">
                  <div className="cards-image-mask">
                    <img className="cards-image-mask-1" src={cardsImageMask} />
                  </div>
                  <img className="paragraph-8" src={paragraph9} />
                  <img className="paragraph-9" src={paragraph10} />
                  <ButtonDefault to={'/tour6'}>{buttonDefault5Props.children}</ButtonDefault>
                </div>
              </div>
              <div className="card-2-1">
                <CardsImageMask src={cardsImageMask5Props.src} />
                <img className="paragraph-10" src={paragraph11} />
                <img className="paragraph-11" src={paragraph12} />
                <ButtonDefault to={'/tour5'}>{buttonDefault6Props.children}</ButtonDefault>
              </div>
            </div>
          </div>
        </div>
        <div className="button-default-container">
          <ButtonDefault className={buttonDefault7Props.className}
                         action={'back'}>{buttonDefault7Props.children}</ButtonDefault>
          <ButtonDefault className={buttonDefault8Props.className}
                         action={'top'}>{buttonDefault8Props.children}</ButtonDefault>
        </div>
        <div className="footer-5">
          <div className="overlap-group3-4">
            <img className="line-1-5" src="/img/line-1-2@1x.svg" />
            <div className="rectangle-58-11"></div>
          </div>
          <div className="flex-row-17">
            <div className="flex-col-12">
              <img className="gray-line-worldwide-1-11" src={graylineworldwide12} />
              <div className="flex-row-18">
                <img className="icon-location_pin-5" src="/img/ep-location-2@2x.svg" />
                <div className="surname-7 roboto-medium-black-22px">{surname}</div>
              </div>
              <div className="no-179-rua-do-campo-5 roboto-light-black-22px">{no179RuaDoCampo}</div>
            </div>
            <div className="frame-container-5">
              <div className="frame-1-5">
                <Link to="/home-page">
                  <div className="place-1 roboto-semi-bold-black-22px">{place}</div>
                </Link>
                <Link to="/fqa">
                  <div className="fqa-5 roboto-semi-bold-black-22px">{fqa}</div>
                </Link>
                <Link to="/contact-us">
                  <div className="contact-us-5 roboto-semi-bold-black-22px">{contactUs}</div>
                </Link>
              </div>
              <div className="frame-5-5">
                <a href="https://www.facebook.com/Graylinehk" target="_blank">
                  <img className="icon-5" src="/img/facebook---negative@2x.svg" />
                </a>
                <a href="https://www.instagram.com/graylineaustralia/" target="_blank">
                  <img className="icon-5" src="/img/instagram---negative-1@2x.svg" />
                </a>
                <a href="https://twitter.com/grayline" target="_blank">
                  <img className="icon-5" src="/img/twitter---negative-2@2x.svg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tour;

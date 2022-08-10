import React from "react";
import { Link } from "react-router-dom";
import MainContent from "../MainContent";
import Group107 from "../Group107";
import ButtonDefault from "../ButtonDefault";
import "./Tour6.css";

function Tour6(props) {
  const {
    graylineworldwide11,
    name,
    text15,
    navbarLinkPlace1,
    navbarLinkAboutUs,
    navbarLinkPlace2,
    navbarLinkVisaCardPromotion,
    navbarLinkOtherServices1,
    navbarLinkOtherServices2,
    navbarLinkContactUs,
    homeTourHongKongPrivateTourGuideAnd,
    mop43001St4Hrs,
    surname1,
    specifications1,
    pngegg21,
    address1,
    automatic1,
    surname2,
    paragraph1,
    mop26001St4Hrs1,
    surname3,
    specifications2,
    pngegg22,
    paragraph2,
    address2,
    automatic2,
    x7SeaterVan,
    paragraph3,
    mop26001St4Hrs2,
    surname4,
    specifications3,
    pngegg23,
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
      <div className="tour6 screen">
        <div className="nav-bar-14" id="nav-bar">
          <div className="flex-row-48">
            <img className="gray-line-worldwide-1-28" src={graylineworldwide11} />
            <div className="flex-col-32 poppins-normal-cod-gray-14px">
              <p className="name-15">{name}</p>
              <div className="text-15">{text15}</div>
            </div>
            <div className="overlap-group7-1">
              <div className="navbar-14">
                <Link to="/home-page">
                  <div className="navbar-link-place-28 poppins-normal-black-16px">{navbarLinkPlace1}</div>
                </Link>
                <Link to="/about-us">
                  <div className="navbar-link-about-us-14 poppins-normal-black-16px">{navbarLinkAboutUs}</div>
                </Link>
                <Link to="/tour">
                  <div className="navbar-link-place-29 poppins-normal-red-16px">{navbarLinkPlace2}</div>
                </Link>
                <Link to="/promotion-1">
                  <div className="navbar-link-visa-card-promotion-14 poppins-normal-black-16px">
                    {navbarLinkVisaCardPromotion}
                  </div>
                </Link>
                <Link to="/other-service">
                  <div className="navbar-link-other-services-28 poppins-normal-black-16px">
                    {navbarLinkOtherServices1}
                  </div>
                </Link>
                <Link to="/fqa">
                  <div className="navbar-link-other-services-29 poppins-normal-black-16px">
                    {navbarLinkOtherServices2}
                  </div>
                </Link>
                <div className="navbar-link-contact-us-14 poppins-normal-black-16px">{navbarLinkContactUs}</div>
              </div>
              <img className="icon-home-14" src="/img/navigation-icons-9@2x.svg" />
              <img className="megaphone-14" src="/img/megaphone-2@2x.svg" />
              <img className="icon-call-13" src="/img/phone-1@2x.svg" />
              <img className="question-14" src="/img/question@2x.svg" />
              <img className="users-three-14" src="/img/usersthree@2x.svg" />
              <img className="icon-plane-14" src="/img/airplane-2@2x.svg" />
              <img className="bag-14" src="/img/bag@2x.svg" />
            </div>
          </div>
          <div className="rectangle-58-28"></div>
        </div>
        <img className="home-tour-hong-kong-1" src={homeTourHongKongPrivateTourGuideAnd} />
        <div className="group-116">
          <MainContent
            sectionTitle={mainContentProps.sectionTitle}
            paragraph={mainContentProps.paragraph}
            className={mainContentProps.className}
          />
          <div className="group-117">
            <div className="overlap-group-16">
              <div className="overlap-group-17">
                <div className="x00-1st-4-hrs valign-text-middle poppins-light-black-20px">{mop43001St4Hrs}</div>
                <div className="surname-21 valign-text-middle poppins-light-black-20px">{surname1}</div>
                <div className="specifications-1 valign-text-middle poppins-bold-red-20px">{specifications1}</div>
                <img className="icon-user-1" src="/img/users---account@2x.svg" />
                <Group107 />
                <img className="transport-car-1" src="/img/transport---car@2x.svg" />
                <img className="pngegg-2-2" src={pngegg21} />
                <div className="rectangle-62-1 border-1px-black"></div>
                <ButtonDefault className={buttonDefault1Props.className}>{buttonDefault1Props.children}</ButtonDefault>
                <ButtonDefault className={buttonDefault2Props.className}>{buttonDefault2Props.children}</ButtonDefault>
                <ButtonDefault className={buttonDefault3Props.className}>{buttonDefault3Props.children}</ButtonDefault>
                <div className="address-1 valign-text-middle poppins-normal-orange-red-20px">{address1}</div>
                <div className="automatic-1 valign-text-middle poppins-normal-monza-20px">{automatic1}</div>
                <div className="surname-22 valign-text-middle poppins-normal-alizarin-crimson-20px">{surname2}</div>
              </div>
              <p className="paragraph-21 inter-normal-black-14px">{paragraph1}</p>
              <img className="currency-dollar-usd-1" src="/img/currency-dollar--usd-@2x.svg" />
            </div>
            <div className="overlap-group-16">
              <div className="overlap-group-17">
                <div className="x00-1st-4-hrs valign-text-middle poppins-light-black-20px">{mop26001St4Hrs1}</div>
                <div className="surname-21 valign-text-middle poppins-light-black-20px">{surname3}</div>
                <div className="specifications-1 valign-text-middle poppins-bold-red-20px">{specifications2}</div>
                <img className="icon-user-1" src="/img/users---account@2x.svg" />
                <Group107 />
                <img className="transport-car-1" src="/img/transport---car@2x.svg" />
                <img className="pngegg-2-2" src={pngegg22} />
                <div className="rectangle-62-1 border-1px-black"></div>
                <ButtonDefault className={buttonDefault4Props.className} to={'/tour1'}>{buttonDefault4Props.children}</ButtonDefault>
                <ButtonDefault className={buttonDefault5Props.className} to={'/tour1'}>{buttonDefault5Props.children}</ButtonDefault>
                <ButtonDefault className={buttonDefault6Props.className} to={'/tour1'}>{buttonDefault6Props.children}</ButtonDefault>
                <p className="paragraph-22 inter-normal-black-14px">{paragraph2}</p>
                <div className="address-1 valign-text-middle poppins-normal-orange-red-20px">{address2}</div>
                <div className="automatic-1 valign-text-middle poppins-normal-monza-20px">{automatic2}</div>
                <div className="x7-seater-van-1 valign-text-middle poppins-normal-alizarin-crimson-20px">
                  {x7SeaterVan}
                </div>
              </div>
              <img className="currency-dollar-usd-1" src="/img/currency-dollar--usd-@2x.svg" />
            </div>
            <div className="overlap-group-16">
              <p className="paragraph-23 inter-normal-black-14px">{paragraph3}</p>
              <div className="overlap-group-17">
                <div className="x00-1st-4-hrs valign-text-middle poppins-light-black-20px">{mop26001St4Hrs2}</div>
                <div className="surname-21 valign-text-middle poppins-light-black-20px">{surname4}</div>
                <div className="specifications-1 valign-text-middle poppins-bold-red-20px">{specifications3}</div>
                <img className="icon-user-1" src="/img/users---account@2x.svg" />
                <Group107 />
                <img className="transport-car-1" src="/img/transport---car@2x.svg" />
                <img className="pngegg-2-3" src={pngegg23} />
                <div className="rectangle-62-1 border-1px-black"></div>
                <ButtonDefault className={buttonDefault7Props.className}>{buttonDefault7Props.children}</ButtonDefault>
                <ButtonDefault className={buttonDefault8Props.className}>{buttonDefault8Props.children}</ButtonDefault>
                <ButtonDefault className={buttonDefault9Props.className} func={()=>console.log('erer')}>{buttonDefault9Props.children}</ButtonDefault>
                <div className="address-1 valign-text-middle poppins-normal-orange-red-20px">{address3}</div>
                <div className="automatic-1 valign-text-middle poppins-normal-monza-20px">{automatic3}</div>
                <div className="x20-seater-coach-1 valign-text-middle poppins-normal-alizarin-crimson-20px">
                  {x20SeaterCoach}
                </div>
              </div>
              <img className="currency-dollar-usd-1" src="/img/currency-dollar--usd-@2x.svg" />
            </div>
          </div>
        </div>
        <div className="footer-14">
          <div className="overlap-group8">
            <img className="line-1-14" src="/img/line-1@1x.svg" />
            <div className="rectangle-58-29"></div>
          </div>
          <div className="flex-row-49">
            <div className="flex-col-33">
              <img className="gray-line-worldwide-1-29" src={graylineworldwide12} />
              <div className="flex-row-50">
                <img className="icon-location_pin-14" src="/img/ep-location-1@2x.svg" />
                <div className="surname-23 roboto-medium-black-22px">{surname5}</div>
              </div>
              <div className="no-179-rua-do-campo-14 roboto-light-black-22px">{no179RuaDoCampo}</div>
            </div>
            <div className="frame-container-14">
              <div className="frame-1-14">
                <Link to="/home-page">
                  <div className="place-1 roboto-semi-bold-black-22px">{place}</div>
                </Link>
                <Link to="/fqa">
                  <div className="fqa-15 roboto-semi-bold-black-22px">{fqa}</div>
                </Link>
                <Link to="/contact-us">
                  <div className="contact-us-15 roboto-semi-bold-black-22px">{contactUs}</div>
                </Link>
              </div>
              <div className="frame-5-15">
                <a href="https://www.facebook.com/Graylinehk" target="_blank">
                  <img className="icon-13" src="/img/facebook---negative@2x.svg" />
                </a>
                <a href="https://www.instagram.com/graylineaustralia/" target="_blank">
                  <img className="icon-13" src="/img/instagram---negative-1@2x.svg" />
                </a>
                <a href="https://twitter.com/grayline" target="_blank">
                  <img className="icon-13" src="/img/twitter---negative-17@2x.svg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tour6;

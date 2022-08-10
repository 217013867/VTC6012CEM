import React from "react";
import { Link } from "react-router-dom";
import MainContent2 from "../MainContent2";
import Table from "../Table";
import Gallery from "../Gallery";
import ButtonDefault from "../ButtonDefault";
import "./Tour1.css";

function Tour1(props) {
    const {
        graylineworldwide11,
        name,
        text12,
        navbarLinkPlace1,
        navbarLinkAboutUs,
        navbarLinkPlace2,
        navbarLinkVisaCardPromotion,
        navbarLinkOtherServices1,
        navbarLinkOtherServices2,
        navbarLinkContactUs,
        homeTourMacauWorldHeritageExcursion,
        paragraph,
        afterAMorningOfV,
        graylineworldwide12,
        surname,
        no179RuaDoCampo,
        place,
        fqa,
        contactUs,
        mainContent2Props,
        tableProps,
        galleryProps,
        buttonDefault1Props,
        buttonDefault2Props,
        buttonDefault3Props,
    } = props;

    return (
        <div className="container-center-horizontal">
            <div className="tour2 screen">
                <div className="nav-bar-11" id="nav-bar">
                    <div className="flex-row-39">
                        <img className="gray-line-worldwide-1-22" src={graylineworldwide11} />
                        <div className="flex-col-25 poppins-normal-cod-gray-14px">
                            <p className="name-12">{name}</p>
                            <div className="text-12">{text12}</div>
                        </div>
                        <div className="overlap-group2-7">
                            <div className="navbar-11">
                                <Link to="/home-page">
                                    <div className="navbar-link-place-22 poppins-normal-black-16px">{navbarLinkPlace1}</div>
                                </Link>
                                <Link to="/about-us">
                                    <div className="navbar-link-about-us-11 poppins-normal-black-16px">{navbarLinkAboutUs}</div>
                                </Link>
                                <Link to="/tour">
                                    <div className="navbar-link-place-23 poppins-normal-red-16px">{navbarLinkPlace2}</div>
                                </Link>
                                <Link to="/promotion-1">
                                    <div className="navbar-link-visa-card-promotion-11 poppins-normal-black-16px">
                                        {navbarLinkVisaCardPromotion}
                                    </div>
                                </Link>
                                <Link to="/other-service">
                                    <div className="navbar-link-other-services-22 poppins-normal-black-16px">
                                        {navbarLinkOtherServices1}
                                    </div>
                                </Link>
                                <Link to="/fqa">
                                    <div className="navbar-link-other-services-23 poppins-normal-black-16px">
                                        {navbarLinkOtherServices2}
                                    </div>
                                </Link>
                                <div className="navbar-link-contact-us-11 poppins-normal-black-16px">{navbarLinkContactUs}</div>
                            </div>
                            <img className="icon-home-11" src="/img/navigation-icons-2@2x.svg" />
                            <img className="megaphone-11" src="/img/megaphone-2@2x.svg" />
                            <img className="icon-call-10" src="/img/phone-1@2x.svg" />
                            <img className="question-11" src="/img/question@2x.svg" />
                            <img className="users-three-11" src="/img/usersthree@2x.svg" />
                            <img className="icon-plane-11" src="/img/airplane-2@2x.svg" />
                            <img className="bag-11" src="/img/bag@2x.svg" />
                        </div>
                    </div>
                    <div className="rectangle-58-22"></div>
                </div>
                <img className="home-tour-macau-worl" src={homeTourMacauWorldHeritageExcursion} />
                <div className="group-tour-2">
                    <div className="overlap-group1-11">
                        <MainContent2 {...mainContent2Props} />
                        <Table
                            headerRow={tableProps.headerRow}
                            className={tableProps.className}
                            rowMainProps={tableProps.rowMainProps}
                        />
                        <Gallery className={galleryProps.className} photos={[
                            '/img/tour 2-1.jpg',
                            '/img/tour 2-2.jpg',
                            '/img/tour 2-3.jpg',
                            '/img/tour 2-4.jpg',
                            '/img/tour 2-5.jpg',
                        ]}/>
                        <div className="paragraph-17 inter-normal-black-20px">{paragraph}</div>
                        <p className="after-a-morning-of-v inter-normal-black-14px">{afterAMorningOfV}</p>
                    </div>
                    <div className="button-default-container-2">
                        <ButtonDefault className={buttonDefault1Props.className}action={'top'}>{buttonDefault1Props.children}</ButtonDefault>
                        <ButtonDefault className={buttonDefault2Props.className}
                                       action={'top'}>{buttonDefault2Props.children}</ButtonDefault>
                        <ButtonDefault className={buttonDefault3Props.className}action={'top'}>{buttonDefault3Props.children}</ButtonDefault>
                    </div>
                </div>
                <div className="footer-11">
                    <div className="overlap-group3-7">
                        <img className="line-1-11" src="/img/line-1@1x.svg" />
                        <div className="rectangle-58-23"></div>
                    </div>
                    <div className="flex-row-40">
                        <div className="flex-col-26">
                            <img className="gray-line-worldwide-1-23" src={graylineworldwide12} />
                            <div className="flex-row-41">
                                <img className="icon-location_pin-11" src="/img/ep-location-13@2x.svg" />
                                <div className="surname-18 roboto-medium-black-22px">{surname}</div>
                            </div>
                            <div className="no-179-rua-do-campo-11 roboto-light-black-22px">{no179RuaDoCampo}</div>
                        </div>
                        <div className="frame-container-11">
                            <div className="frame-1-11">
                                <div className="place-13 roboto-semi-bold-black-22px">{place}</div>
                                <Link to="/fqa">
                                    <div className="fqa-12 roboto-semi-bold-black-22px">{fqa}</div>
                                </Link>
                                <Link to="/contact-us">
                                    <div className="contact-us-12 roboto-semi-bold-black-22px">{contactUs}</div>
                                </Link>
                            </div>
                            <div className="frame-5-12">
                                <a href="https://www.facebook.com/Graylinehk" target="_blank">
                                    <img className="icon-10" src="/img/facebook---negative@2x.svg" />
                                </a>
                                <a href="https://www.instagram.com/graylineaustralia/" target="_blank">
                                    <img className="icon-10" src="/img/instagram---negative-1@2x.svg" />
                                </a>
                                <a href="https://twitter.com/grayline" target="_blank">
                                    <img className="icon-10" src="/img/twitter---negative-14@2x.svg" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Tour1;

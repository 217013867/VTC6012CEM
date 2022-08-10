import React from "react";
import {Link} from "react-router-dom";
import Group2 from "../Group2";
import "./Promotion1.css";

function Promotion1(props) {
    const {
        x1,
        promotionturbojet,
        x295RoundTripEconomyClass,
        surname1,
        bookNow,
        homeVisaCardPromotion,
        graylineworldwide11,
        name,
        text5,
        navbarLinkPlace1,
        navbarLinkAboutUs,
        navbarLinkPlace2,
        navbarLinkVisaCardPromotion,
        navbarLinkOtherServices1,
        navbarLinkOtherServices2,
        navbarLinkContactUs,
        graylineworldwide12,
        surname2,
        no179RuaDoCampo,
        place,
        fqa,
        contactUs,
        group2Props,
    } = props;

    return (
        <div className="container-center-horizontal">
            <div className="promotion-1 screen">
                <div className="overlap-group5-2">
                    <div className="group-container-2">
                        <div className="overlap-group1-4">
                            <img className="mask-group-2" src="/img/mg1.svg "/>
                            <img className="x1-3" src={x1}/>
                            <div className="content1-2">
                                <div className="promotion-turbojet valign-text-bottom">{promotionturbojet}</div>
                                <div
                                    className="x295-round-trip-economy-class-1 valign-text-bottom poppins-medium-mine-shaft-24px">
                                    {x295RoundTripEconomyClass}
                                </div>
                                <div
                                    className="surname-5 valign-text-bottom  poppins-normal-mine-shaft-20px">{surname1}</div>
                            </div>
                        </div>
                        <Link to="/contact-us">
                            <div className="group-1">
                                <div className="overlap-group-4">
                                    <div
                                        className="book-now-2 valign-text-bottom poppins-bold-white-13px">{bookNow}</div>
                                </div>
                                <Link to={'/promotion-2'}>
                                    <div className="rectangle-2-7"></div>
                                </Link>
                            </div>
                        </Link>
                        <Group2 className={group2Props.className}/>
                        <div className="group-3-2">
                            <div className="ellipse-5-1">
                                <Link to={'/promotion-2'}>
                                    <img className="rectangle-2-8"
                                         src="/img/rectangle-2-5@2x.svg"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <img className="home-visa-card-promotion-2" src={homeVisaCardPromotion}/>
                    <div className="nav-bar-4">
                        <div className="flex-row-13">
                            <img className="gray-line-worldwide-1-8" src={graylineworldwide11}/>
                            <div className="flex-col-9 poppins-normal-cod-gray-14px">
                                <p className="name-5">{name}</p>
                                <div className="text-5">{text5}</div>
                            </div>
                            <div className="overlap-group4-2">
                                <div className="navbar-4">
                                    <Link to="/home-page">
                                        <div
                                            className="navbar-link-place-8 poppins-normal-black-16px">{navbarLinkPlace1}</div>
                                    </Link>
                                    <Link to="/about-us">
                                        <div
                                            className="navbar-link-about-us-4 poppins-normal-black-16px">{navbarLinkAboutUs}</div>
                                    </Link>
                                    <Link to="/tour">
                                        <div
                                            className="navbar-link-place-9 poppins-normal-black-16px">{navbarLinkPlace2}</div>
                                    </Link>
                                    <Link to="/promotion-1">
                                        <div className="navbar-link-visa-card-promotion-4 poppins-normal-red-16px">
                                            {navbarLinkVisaCardPromotion}
                                        </div>
                                    </Link>
                                    <Link to="/other-service">
                                        <div className="navbar-link-other-services-8 poppins-normal-black-16px">
                                            {navbarLinkOtherServices1}
                                        </div>
                                    </Link>
                                    <Link to="/fqa">
                                        <div className="navbar-link-other-services-9 poppins-normal-black-16px">
                                            {navbarLinkOtherServices2}
                                        </div>
                                    </Link>
                                    <Link to="/contact-us">
                                        <div className="navbar-link-contact-us-1 poppins-normal-black-16px">
                                            {navbarLinkContactUs}
                                        </div>
                                    </Link>
                                </div>
                                <img className="icon-home-4" src="/img/navigation-icons-3@2x.svg"/>
                                <img className="megaphone-4" src="/img/megaphone-3@2x.svg"/>
                                <img className="icon-call-4" src="/img/phone-1@2x.svg"/>
                                <img className="question-4" src="/img/question@2x.svg"/>
                                <img className="users-three-4" src="/img/usersthree@2x.svg"/>
                                <img className="icon-plane-4" src="/img/airplane@2x.svg"/>
                                <img className="bag-4" src="/img/bag@2x.svg"/>
                            </div>
                        </div>
                        <div className="rectangle-58-8"></div>
                    </div>
                </div>
                <div className="footer-4">
                    <div className="overlap-group3-3">
                        <img className="line-1-4" src="/img/line-1@1x.svg"/>
                        <div className="rectangle-58-9"></div>
                    </div>
                    <div className="flex-row-14">
                        <div className="flex-col-10">
                            <img className="gray-line-worldwide-1-9" src={graylineworldwide12}/>
                            <div className="flex-row-15">
                                <img className="icon-location_pin-4" src="/img/ep-location-2@2x.svg"/>
                                <div className="surname-6 roboto-medium-black-22px">{surname2}</div>
                            </div>
                            <div className="no-179-rua-do-campo-4 roboto-light-black-22px">{no179RuaDoCampo}</div>
                        </div>
                        <div className="frame-container-4">
                            <div className="frame-1-4">
                                <Link to="/home-page">
                                    <div className="place-1 roboto-semi-bold-black-22px">{place}</div>
                                </Link>
                                <Link to="/fqa">
                                    <div className="fqa-4 roboto-semi-bold-black-22px">{fqa}</div>
                                </Link>
                                <Link to="/contact-us">
                                    <div className="contact-us-4 roboto-semi-bold-black-22px">{contactUs}</div>
                                </Link>
                            </div>
                            <div className="frame-5-4">
                                <a href="https://www.facebook.com/Graylinehk" target="_blank">
                                    <img className="icon-4" src="/img/facebook---negative@2x.svg"/>
                                </a>
                                <a href="https://www.instagram.com/graylineaustralia/" target="_blank">
                                    <img className="icon-4" src="/img/instagram---negative-1@2x.svg"/>
                                </a>
                                <a href="https://twitter.com/grayline" target="_blank">
                                    <img className="icon-4" src="/img/twitter---negative-5@2x.svg"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Promotion1;

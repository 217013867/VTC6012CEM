import React, {useState} from "react";
import {Link} from "react-router-dom";
import StepsProcess from "../StepsProcess";
import Group118 from "../Group118";
import Input from "../Input";
import Input2 from "../Input2";
import Input3 from "../Input3";
import Button from "../Button";
import "./ContactUs.css";

function ContactUs(props) {
    const [lastName, setLastName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [fax, setFax] = useState('')
    const [addr, setAddr] = useState('')
    const [home, setHome] = useState('')
    const [enquiry, setEnquiry] = useState('')

    const {
        graylineworldwide11,
        name,
        text11,
        navbarLinkPlace1,
        navbarLinkAboutUs,
        navbarLinkPlace2,
        navbarLinkVisaCardPromotion,
        navbarLinkOtherServices1,
        navbarLinkOtherServices2,
        navbarLinkContactUs,
        homeContactUs,
        title,
        pleaseFillInYour,
        addressNo179Ru,
        surname1,
        address5ThFloor,
        surname2,
        addressRoom1015,
        surname3,
        mapsicleMap1,
        contactUsOnline,
        mapsicleMap2,
        mapsicleMap3,
        graylineworldwide12,
        surname4,
        no179RuaDoCampo,
        place,
        fqa,
        contactUs,
        group1181Props,
        group1182Props,
        group1183Props,
        group1184Props,
        group1185Props,
        inputProps,
        input21Props,
        input22Props,
        input23Props,
        input24Props,
        input25Props,
        input26Props,
        input3Props,
        button1Props,
        button2Props,
    } = props;

    return (
        <div className="container-center-horizontal">
            <div className="contact-us-10 screen">
                <div className="nav-bar-10">
                    <div className="flex-row-35">
                        <img className="gray-line-worldwide-1-20" src={graylineworldwide11}/>
                        <div className="flex-col-22 poppins-normal-cod-gray-14px">
                            <p className="name-11">{name}</p>
                            <div className="text-11">{text11}</div>
                        </div>
                        <div className="overlap-group6-1">
                            <div className="navbar-10">
                                <Link to="/home-page">
                                    <div
                                        className="navbar-link-place-20 poppins-normal-black-16px">{navbarLinkPlace1}</div>
                                </Link>
                                <Link to="/about-us">
                                    <div
                                        className="navbar-link-about-us-10 poppins-normal-black-16px">{navbarLinkAboutUs}</div>
                                </Link>
                                <Link to="/tour">
                                    <div
                                        className="navbar-link-place-21 poppins-normal-black-16px">{navbarLinkPlace2}</div>
                                </Link>
                                <Link to="/promotion-1">
                                    <div className="navbar-link-visa-card-promotion-10 poppins-normal-black-16px">
                                        {navbarLinkVisaCardPromotion}
                                    </div>
                                </Link>

                                <Link to="/other-service">
                                    <div className="navbar-link-other-services-20 poppins-normal-black-16px">
                                        {navbarLinkOtherServices1}
                                    </div>
                                </Link>

                                <Link to="/fqa">
                                    <div className="navbar-link-other-services-21 poppins-normal-black-16px">
                                        {navbarLinkOtherServices2}
                                    </div>
                                </Link>

                                <Link to="/contact-us">
                                    <div className="navbar-link-contact-us-1 poppins-normal-red-16px">
                                        {navbarLinkContactUs}
                                    </div>
                                </Link>
                            </div>
                            <img className="icon-home-10" src="/img/navigation-icons-10@2x.svg"/>
                            <img className="megaphone-10" src="/img/megaphone-1@2x.svg"/>
                            <img className="phone" src="/img/phone-red.svg"/>
                            <img className="question-10" src="/img/question@2x.svg"/>
                            <img className="users-three-10" src="/img/usersthree@2x.svg"/>
                            <img className="icon-plane-10" src="/img/airplane@2x.svg"/>
                            <img className="bag-10" src="/img/bag@2x.svg"/>
                        </div>
                    </div>
                    <div className="rectangle-58-20"></div>
                </div>
                <div className="flex-row-36">
                    <div className="group-123">
                        <Group118 value={lastName} path={"/img/box-4@2x.svg"}
                                  stepsProcessProps={group1181Props.stepsProcessProps}/>
                        <Group118 value={firstName} path={"/img/firstname.png"}
                                  stepsProcessProps={group1181Props.stepsProcessProps}/>
                        <Group118 value={email} path={"/img/box-1@2x.svg"}
                                  stepsProcessProps={group1181Props.stepsProcessProps}/>
                        <Group118 value={phone} path={"/img/box-2@2x.svg"}
                                  stepsProcessProps={group1181Props.stepsProcessProps}/>
                        <Group118 value={enquiry} path={"/img/box-3@2x.svg"}
                                  stepsProcessProps={group1181Props.stepsProcessProps}/>
                        {/*<Group118 stepsProcessProps={group1181Props.stepsProcessProps}/>*/}
                        {/*<div className="group-container-3">*/}
                        {/*    <Group118 className={group1182Props.className}*/}
                        {/*              stepsProcessProps={group1182Props.stepsProcessProps}/>*/}
                        {/*    <Group118 className={group1183Props.className}*/}
                        {/*              stepsProcessProps={group1183Props.stepsProcessProps}/>*/}
                        {/*    <Group118 className={group1184Props.className}*/}
                        {/*              stepsProcessProps={group1184Props.stepsProcessProps}/>*/}
                        {/*</div>*/}
                    </div>
                    <div className="flex-col-23">
                        <img className="home-contact-us" src={homeContactUs}/>
                        <div className="group-111">
                            <div className="overlap-group4-4">
                                <div className="overlap-group3-6">
                                    <div className="form">
                                        <h1 className="title-1">{title}</h1>
                                        <p className="please-fill-in-your">{pleaseFillInYour}</p>
                                        <div className="text-fields">
                                            <Input value={lastName} set={setLastName}>{inputProps.children}</Input>
                                            <Input value={firstName} set={setFirstName}>{input21Props.children}</Input>
                                            <Input value={email} set={setEmail}>{input22Props.children}</Input>
                                            <Input value={phone} set={setPhone}>{input23Props.children}</Input>
                                            <Input value={fax} set={setFax}>{input24Props.children}</Input>
                                            <Input value={addr} set={setAddr}>{input25Props.children}</Input>
                                            <Input value={home} set={setHome}>{input26Props.children}</Input>
                                            <Input2 value={enquiry} set={setEnquiry}
                                                    type={'textarea'}>{input3Props.children}</Input2>
                                        </div>


                                        <div className="button-container">
                                            <button class="buttonStyle"
                                                    onClick={() => {
                                                        const gen = t => `Please input ${t}`
                                                        if (!lastName)
                                                            alert(gen('last name'))
                                                        else if (!firstName)
                                                            alert(gen('first name'))
                                                        else if (!email)
                                                            alert(gen('email'))
                                                        else if (!phone)
                                                            alert(gen('phone number'))
                                                        else if (!enquiry)
                                                            alert(gen('enquiry'))
                                                        else
                                                            alert("You inquiry has been received, we will respond as soon as possible. Thank you for contacting us")
                                                        setLastName('')
                                                        setFirstName('')
                                                        setAddr('')
                                                        setEmail('')
                                                        setPhone('')
                                                        setFax('')
                                                        setHome('')
                                                        setEnquiry('')
                                                    }}>Submit
                                            </button>
                                            <button class="buttonStyle2"
                                                    onClick={() => {
                                                        setLastName('')
                                                        setFirstName('')
                                                        setAddr('')
                                                        setEmail('')
                                                        setPhone('')
                                                        setFax('')
                                                        setHome('')
                                                        setEnquiry('')
                                                    }}>Reset
                                            </button>
                                        </div>
                                    </div>
                                    <div className="overlap-group-13">
                                        <p className="address-no-179-ru inter-normal-mine-shaft-14px">{addressNo179Ru}</p>
                                        <div
                                            className="surname-14 valign-text-middle inter-bold-mine-shaft-24px">{surname1}</div>
                                    </div>
                                    <div className="overlap-group1-10">
                                        <p className="address-5th-floor inter-normal-mine-shaft-14px">{address5ThFloor}</p>
                                        <div
                                            className="surname-15 valign-text-middle inter-bold-mine-shaft-24px">{surname2}</div>
                                    </div>
                                    <div className="overlap-group2-6">
                                        <p className="address-room-1015 inter-normal-mine-shaft-14px">{addressRoom1015}</p>
                                        <div
                                            className="surname-16 valign-text-middle inter-bold-mine-shaft-24px">{surname3}</div>
                                    </div>
                                    <img className="mapsicle-map" src={mapsicleMap1}/>
                                </div>
                                <div
                                    className="contact-us-online valign-text-middle inter-bold-mine-shaft-24px">{contactUsOnline}</div>
                                <img className="mapsicle-map-1" src={mapsicleMap2}/>
                                <img className="mapsicle-map-2" src={mapsicleMap3}/>
                            </div>
                            <div className="frame-5-10">
                                <a href="https://www.facebook.com/Graylinehk" target="_blank">
                                    <img className="link" src="/img/facebook---negative-10@2x.png"/>
                                </a>
                                <a href="https://www.instagram.com/graylineaustralia/" target="_blank">
                                    <img className="link" src="/img/instagram---negative-10@2x.png"/>
                                </a>
                                <a href="https://twitter.com/grayline" target="_blank">
                                    <img className="twitter-negative" src="/img/twitter---negative-10@2x.png"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-10">
                    <div className="overlap-group7">
                        <img className="line-1-10" src="/img/line-1-10@1x.svg"/>
                        <div className="rectangle-58-21"></div>
                    </div>
                    <div className="flex-row-37">
                        <div className="flex-col-24">
                            <img className="gray-line-worldwide-1-21" src={graylineworldwide12}/>
                            <div className="flex-row-38">
                                <img className="icon-location_pin-10" src="/img/ep-location-10@2x.svg"/>
                                <div className="surname-17 roboto-medium-black-22px">{surname4}</div>
                            </div>
                            <div className="no-179-rua-do-campo-10 roboto-light-black-22px">{no179RuaDoCampo}</div>
                        </div>
                        <div className="frame-container-10">
                            <div className="frame-1-10">
                                <Link to="/home-page">
                                    <div className="place-1 roboto-semi-bold-black-22px">{place}</div>
                                </Link>
                                <Link to="/fqa">
                                    <div className="fqa-11 roboto-semi-bold-black-22px">{fqa}</div>
                                </Link>
                                <Link to="/contact-us">
                                    <div className="contact-us-11 roboto-semi-bold-black-22px">{contactUs}</div>
                                </Link>
                            </div>
                            <div className="frame-5-11">
                                <a href="https://www.facebook.com/Graylinehk" target="_blank">
                                    <img className="link-1" src="/img/facebook---negative@2x.svg"/>
                                </a>
                                <a href="https://www.instagram.com/graylineaustralia/" target="_blank">
                                    <img className="link-1" src="/img/instagram---negative-11@2x.svg"/>
                                </a>
                                <a href="https://twitter.com/grayline" target="_blank">
                                    <img className="link-1" src="/img/twitter---negative-11@2x.svg"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;

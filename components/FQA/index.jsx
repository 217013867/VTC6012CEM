import React from "react";
import {Link} from "react-router-dom";
import ButtonDefault from "../ButtonDefault";
import "./FQA.css";

function FQA(props) {
    const {
        graylineworldwide11,
        name,
        text8,
        navbarLinkPlace1,
        navbarLinkAboutUs,
        navbarLinkPlace2,
        navbarLinkVisaCardPromotion,
        navbarLinkOtherServices1,
        navbarLinkOtherServices2,
        navbarLinkContactUs,
        homeFqa,
        frequentlyAskedQuestions,
        graylineworldwide12,
        surname,
        no179RuaDoCampo,
        place,
        fqa,
        contactUs,
        buttonDefault1Props,
        buttonDefault2Props,
    } = props;

    return (
        <div className="container-center-horizontal">
            <div className="fqa-7 screen">
                <div className="nav-bar-7" id="nav-bar">
                    <div className="flex-row-22">
                        <img className="gray-line-worldwide-1-14" src={graylineworldwide11}/>
                        <div className="flex-col-15 poppins-normal-cod-gray-14px">
                            <p className="name-8">{name}</p>
                            <div className="text-8">{text8}</div>
                        </div>
                        <div className="overlap-group1-7">
                            <div className="navbar-7">
                                <Link to="/home-page">
                                    <div
                                        className="navbar-link-place-14 poppins-normal-black-16px">{navbarLinkPlace1}</div>
                                </Link>
                                <Link to="/about-us">
                                    <div
                                        className="navbar-link-about-us-7 poppins-normal-black-16px">{navbarLinkAboutUs}</div>
                                </Link>
                                <Link to="/tour">
                                    <div
                                        className="navbar-link-place-15 poppins-normal-black-16px">{navbarLinkPlace2}</div>
                                </Link>
                                <Link to="/promotion-1">
                                    <div className="navbar-link-visa-card-promotion-7 poppins-normal-black-16px">
                                        {navbarLinkVisaCardPromotion}
                                    </div>
                                </Link>
                                <Link to="/other-service">
                                    <div className="navbar-link-other-services-14 poppins-normal-black-16px">
                                        {navbarLinkOtherServices1}
                                    </div>
                                </Link>
                                <Link to="/fqa">
                                    <div className="navbar-link-other-services-15 poppins-normal-red-16px">
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
                            <img className="megaphone-7" src="/img/megaphone-1@2x.svg"/>
                            <img className="icon-call-10" src="/img/phone-1@2x.svg"/>
                            <img className="question-7" src="/img/question2.svg"/>
                            <img className="users-three-7" src="/img/usersthree@2x.svg"/>
                            <img className="icon-plane-7" src="/img/airplane@2x.svg"/>
                            <img className="bag-7" src="/img/bag@2x.svg"/>
                        </div>
                    </div>
                    <div className="rectangle-58-14"></div>
                </div>
                <img className="home-fqa" src={homeFqa}/>
                <div className="group-66">
                    <div className="overlap-group-7">
                        <div className="frequently-asked-questions valign-text-middle">{frequentlyAskedQuestions}</div>
                    </div>
                    <div className="why-should-i-choose">Why should i choose Gary Line? <br/>
                        <br/>
                    </div>
                    <div>
                        <p>With over 100 years of experience under its belt, Gray Line encompasses a tight-knit, ever
                            growing group of
                            entrepreneurs, colleagues and friends that have each made it their livelihood to create one of a
                            kind travel
                            experiences. Operating under one name and the world-famous, blue diamond brand, Gray Line serves
                            over 700
                            locations on six continents. By choosing Gray Line you ensure that you have the best of the best
                            at your
                            service.</p> <br/></div>
                    <div>
                        <p>Also, when you buy your tour, transfer or activity from us, you are dealing direct. We have
                            offices and
                            agents on the ground in the destination you&#39;re traveling to. We are at your disposal should
                            you have any
                            questions or need to make a change. And, with the power of the worldwide Gray Line organization
                            behind you,
                            you have our world-famous customer service guarantee that you&#39;ll either have a great
                            experience or
                            we&#39;ll make it right.</p></div>
                    <div className="why-should-i-choose">Why should I pre-purchase my tickets? <br/>
                        <br/>
                    </div>
                    <div>
                        <p> We recommend that you buy your tickets in advance to ensure tour availability and the best rate
                            for your
                            trip. As a traveler you have a lot to worry about, so go ahead and have the peace of mind that
                            your
                            sightseeing adventures are booked and ready for your arrival.</p></div>
                    <div className="why-should-i-choose">How will I receive my tickets? <br/>
                        <br/>
                    </div>
                    <div>
                        <p> Once you&#39;ve completed the booking process you will see an electronic, ready-to-print ticket
                            on your
                            screen. Not at a printer? No worries, we will also email you this voucher for your records and
                            to print when
                            you have access. You will need to print this voucher to redeem it for your tickets at your
                            destination.</p></div>
                    <div className="why-should-i-choose">How do I confirm my booking? <br/>
                        <br/>
                    </div>
                    <div>
                        <p> Your tickets are purchased and your voucher is printed. All set, right? Not quite! In order to
                            make
                            absolutely sure you are set for travel, please re-confirm your tour with our local expert at
                            your
                            destination of choice at least 24 to 72-hours in advance of your trip via email or telephone.
                            This is a
                            quick verification of your travel details and a great time to arrange any hotel pickups or extra
                            perks you
                            would like included in your excursion. The contact information for our local expert will be
                            listed on your
                            trip voucher received at the time of booking.</p></div>
                    <div className="why-should-i-choose">How do I make a change to my booking? <br/>
                        <br/>
                    </div>
                    <div>
                        <p>  We’re more than happy to accommodate you on a different date, or at a different time as long as
                            we have the
                            availability. To make a change, please contact the local Gray Line office in your destination
                            city. Contact
                            information can be found on your electronic voucher. Please note that there are several tours
                            that once
                            booked, cannot be amended. For example, tours that include a hotel stay or rail tickets. Text on
                            the tour
                            page will indicate if the date and time cannot be changed once booked.</p></div>
                    <div className="why-should-i-choose">What is Gray Line’s cancellation policy? <br/>
                        <br/>
                    </div>
                    <div>
                        <p>  Most tours and services offered on www.grayline.com are fully refundable when canceled up to 24
                            hours prior
                            to departure under Gray Line’s Easy Cancellation Policy. Easy Cancellation is noted on all
                            applicable
                            services with a duration of one day or less. Specific cancellation and refund policies are noted
                            on all
                            other services in the description details. Email info@grayline.com to cancel your grayline.com
                            reservation
                            and we will gladly consider your request.</p></div>
                    <div className="why-should-i-choose">What is Gray Line’s rebooking policy? <br/>
                        <br/>
                    </div>
                    <div>
                        <p>  Similar to the cancellation policy, most tours and services offered on grayline.com can be
                            easily rebooked
                            for a future date with no fee up to 24 hours prior to departure under the Easy Cancellation
                            Policy. Specific
                            policies are noted on all other services that don&#39;t fall under the Easy Cancellation Policy
                            in the
                            description details. Email info@grayline.com to rebook your grayline.com reservation and our
                            dedicated team
                            will help you find a time that works for you.</p></div>
                    <div className="why-should-i-choose">I keep getting the error message &#39;AVS Mismatch&#39;. My address is correct, so how do I
                        get my
                        payment to go through? <br/>
                        <br/>
                    </div>
                    <div>
                        <p> For security purposes our website is very strict in accepting payment information. Please ensure
                            that your
                            name and address are entered exactly as shown on your credit card’s billing statement, including
                            any
                            punctuation or abbreviations. Though you may enter your address near perfect from memory, these
                            tiny changes
                            make a large impact on our system accepting your payment.</p></div>
                    <div className="why-should-i-choose">Do you offer group discounts?<br/>
                        <br/>
                    </div>
                    <div>
                        <p> If you are inquiring about tickets from parties of 11 or more guests, please contact the local
                            office in
                            your destination to inquire about group rates. These discounts and their availability will vary
                            by location
                            and are not guaranteed, but we are always happy to help with your party’s excursions!</p></div>
                    <div className="why-should-i-choose">Can you please confirm that we get to cuddle a koala on the Daintree Wilderness Day Trip?<br/>
                        <br/>
                    </div>
                    <div>
                        <p> Yes, you indeed get to cuddle a koala.</p></div>
                    <div className="why-should-i-choose">Do I have to present a printed copy of my voucher or can I just show it from my smart phone?<br/>
                        <br/>
                    </div>
                    <div>
                        <p> We recognize the importance that technology plays in our daily lives and are working towards an
                            e-ticketing
                            system, but for now you must print your voucher out and redeem this at the time of your tour for
                            your
                            tickets.</p></div>
                    <div className="why-should-i-choose">What if I am at a hotel and don&#39;t have access to a printer?<br/>
                        <br/>
                    </div>
                    <div>
                        <p> Please check with the front desk of your hotel to inquire about printer capabilities. Many
                            hotels have
                            business centers with computer and printer access or are able to print for you.</p></div>
                    <div className="why-should-i-choose">I will be traveling and cannot contact the local office when I am supposed to re-confirm my
                        tour. How
                        do I go about doing this?<br/>
                        <br/>
                    </div>
                    <div>
                        <p> Busy getting where you’re going? No worries! We understand your travels can be demanding and
                            therefore we
                            recommend a general time frame to contact the local office to verify your tour. If you are tied
                            up in
                            transit or cannot access a phone 24 to 72-hours prior to your trip, as indicated on your
                            voucher, please
                            call or email our local office at your destination prior to this window to confirm your
                            arrangements and
                            ensure you are all set to explore upon your arrival.</p></div>
                    <div className="why-should-i-choose">Why does the currency change at checkout?<br/>
                        <br/>
                    </div>
                    <div>
                        <p> Though you can select to view your packages in your native currency for ease of reference, the
                            final
                            transaction on our Gray Line tours will be processed in the currency utilized by the local Gray
                            Line office.
                            This will display in the &#34;Total cost&#34; section on your purchase page. The approximate
                            currency
                            conversion shown is based on current information from multiple public sources. Please be aware
                            that the
                            actual conversion rates utilized by your card issuer or bank may vary from these public sources.</p></div>
                    <div className="why-should-i-choose">What is a &#39;Valid SID card&#39;?<br/>
                        <br/>
                    </div>
                    <div>
                        <p> A &#39;Valid SID card&#39; refers to a Student Identification Card. This may be necessary
                            for some
                            tours that offer discounted rates for Students and Seniors. If a tour has special rates for
                            Students or
                            Seniors it will indicate this at a special price on the product page and to verify your
                            eligibility please
                            have a valid Student Identification Card (students) or a valid form of identification (seniors)
                            with you
                            when you redeem your Gray Line voucher. </p></div>
                    <div className="why-should-i-choose">When I enter my payment details the screen simply refreshes with a blank payment form or states
                        &#39;Authorization Error&#39;. Did my payment go through and have I booked my tour?<br/>
                        <br/>
                    </div>
                    <div>
                        <p>  If you have not been directed to a screen that states &#34;Your booking was a success&#34;, you
                            have not
                            completed your transaction and have encountered an authorization error. An authorization error
                            occurs when
                            your bank is blocking the charges from our website. As a result we cannot successfully process
                            your credit
                            card to complete the transaction. In order to remedy this, please contact your card issuing bank
                            and let
                            them know that the charges from grayline.com or Trust My Travel, our payment processor, are
                            legitimate and
                            to clear them. Then revisit our site to try your purchase again.</p></div>
                </div>
                <div className="button-default-container-1">
                    <ButtonDefault className={buttonDefault1Props.className}
                                   action={'back'}>{buttonDefault1Props.children}</ButtonDefault>
                    <ButtonDefault className={buttonDefault2Props.className}
                                   action={'top'}>{buttonDefault2Props.children}</ButtonDefault>
                </div>
                <div className="footer-7">
                    <div className="overlap-group2-4">
                        <img className="line-1-7" src="/img/line-1-7@1x.svg"/>
                        <div className="rectangle-58-15"></div>
                    </div>
                    <div className="flex-row-23">
                        <div className="flex-col-16">
                            <img className="gray-line-worldwide-1-15" src={graylineworldwide12}/>
                            <div className="flex-row-24">
                                <img className="icon-location_pin-2" src="/img/ep-location-1@2x.svg" />
                                <div className="surname-9 roboto-medium-black-22px">{surname}</div>
                            </div>
                            <div className="no-179-rua-do-campo-7 roboto-light-black-22px">{no179RuaDoCampo}</div>
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

export default FQA;

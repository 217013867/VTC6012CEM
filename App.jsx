import "./App.css";
import React from "react";
import {Switch, BrowserRouter as Router, Route} from "react-router-dom";
import Promotion2 from "./components/Promotion2";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import Promotion3 from "./components/Promotion3";
import Promotion1 from "./components/Promotion1";
import Tour from "./components/Tour";
import OtherService from "./components/OtherService";
import FQA from "./components/FQA";
import Tour3 from "./components/Tour3";
import ContactUs from "./components/ContactUs";
import Tour22 from "./components/Tour22";
import Tour6 from "./components/Tour6";
import SearchBox from "./components/SearchBox";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/promotion-2">
                    <Promotion2 {...promotion2Data} />
                </Route>
                <Route path="/:path(|home-page)">
                    <HomePage {...homePageData} />
                </Route>
                <Route path="/about-us">
                    <AboutUs {...aboutUsData} />
                </Route>
                <Route path="/promotion-3">
                    <Promotion3 {...promotion3Data} />
                </Route>
                <Route path="/promotion-1">
                    <Promotion1 {...promotion1Data} />
                </Route>
                <Route path="/tour">
                    <Tour {...tourData} />
                </Route>
                <Route path="/other-service">
                    <OtherService {...otherServiceData} />
                </Route>
                <Route path="/fqa">
                    <FQA {...fQAData} />
                </Route>
                <Route path="/tour4">
                    <Tour22 {...tour4Data} />
                </Route>
                <Route path="/tour3">
                    <Tour3 {...tour3Data} />
                </Route>
                <Route path="/contact-us">
                    <ContactUs {...contactUsData} />
                </Route>
                <Route path="/tour2">
                    <Tour22 {...tour2Data} />
                </Route>
                <Route path="/tour1">
                    <Tour22 {...tour1Data} />
                </Route>
                <Route path="/tour5">
                    <Tour22 {...tour5Data} />
                </Route>
                <Route path="/tour6">
                    <Tour6 {...tour6Data} />
                </Route>
                <Route path="/search-box">
                    <SearchBox {...searchBoxData} />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;

const group23Data = {
    className: "group-2-2",
};

const promotion2Data = {
    x1: "/img/1@12x.png",
    promotionturbojet: "【Promotion】Round Trip Turbojet Ferry Ticket",
    x295RoundTripEconomyClass: "$295/Round Trip Economy Class",
    surname1: <React.Fragment>Hong Kong and Macau is only 1 hour ferry apart. Gray Line has partnered with Turbojet to
        provide you with the most comfortable way to travel between Hong Kong and Macau. With guarantee seats
        availability, instant confirmation, e-boarding option and no weekend/night sailing surcharges, you can book
        Turbojet ferry with us 24 hours a day. <br/> Purchase super class and premier grand class to enjoy more savings
        and added value services including priority boarding, free wifi and complimentary meals with unlimited drinks on
        board</React.Fragment>,
    bookNow: "Book Now",
    homeVisaCardPromotion: "/img/home----visa-card-promotion@1x.png",
    graylineworldwide11: "/img/graylineworldwide-1-1@2x.png",
    name: "GARY LINE TOURS OF MACAU LTD",
    text5: "澳門錦倫旅行社有限公司",
    navbarLinkPlace1: "Home",
    navbarLinkAboutUs: "About Us",
    navbarLinkPlace2: "Tours",
    navbarLinkVisaCardPromotion: "Visa Card Promotion",
    navbarLinkOtherServices1: "Other Services",
    navbarLinkOtherServices2: "FQA",
    navbarLinkContactUs: "Contact Us",
    graylineworldwide12: "/img/graylineworldwide-1@2x.png",
    surname2: "GRAY LINE TOURS OF MACAU LIMITED",
    no179RuaDoCampo: <React.Fragment>No. 179 Rua do Campo<br/>Macau<br/>Tel. No. : (853) 2833 6611</React.Fragment>,
    place: "Home",
    fqa: "FQA",
    contactUs: "Contact Us",
    group2Props: group23Data,
};


const promotion3Data = {
    x1: "/img/1@11x.png",
    promotionturbojet: "【Promotion】Complimentary Rickshaw Open Top Bus Ticket",
    x295RoundTripEconomyClass: "$200 (Adult) $100 (Child/Senior)",
    surname1: "Specially decorated in a rickshaw livery, you can explore many heritage sites of Hong Kong with a 540-degree panoramic view on this double decker.",
    bookNow: "Book Now",
    homeVisaCardPromotion: "/img/home----visa-card-promotion@1x.png",
    graylineworldwide11: "/img/graylineworldwide-1-1@2x.png",
    name: "GARY LINE TOURS OF MACAU LTD",
    text5: "澳門錦倫旅行社有限公司",
    navbarLinkPlace1: "Home",
    navbarLinkAboutUs: "About Us",
    navbarLinkPlace2: "Tours",
    navbarLinkVisaCardPromotion: "Visa Card Promotion",
    navbarLinkOtherServices1: "Other Services",
    navbarLinkOtherServices2: "FQA",
    navbarLinkContactUs: "Contact Us",
    graylineworldwide12: "/img/graylineworldwide-1@2x.png",
    surname2: "GRAY LINE TOURS OF MACAU LIMITED",
    no179RuaDoCampo: <React.Fragment>No. 179 Rua do Campo<br/>Macau<br/>Tel. No. : (853) 2833 6611</React.Fragment>,
    place: "Home",
    fqa: "FQA",
    contactUs: "Contact Us",
    group2Props: group23Data,
};


const promotion1Data = {
    x1: "/img/1@10x.png",
    promotionturbojet: "【promotion】turbojet Open Day Sailing (e-boarding) Ferry Ticket",
    x295RoundTripEconomyClass: "$295/round Trip Economy Class",
    surname1: "Gray Line Has Long Been Partnered With Turbojet Aiming To Enhance Your Experience Traveling Between Hong Kong And Macau. Now With The Launch Of Open Day Sailing Tickets, You Can Enjoy The Flexibility To Board Any Available Sailing On Your Selected Departure Date. By Accepting Bookings Made 1 Day Before Departure, And The Benefit Of E-boarding Tickets Plus Instant Confirmation, The New Product Revolutionises The Way You Travel Between The 2 Prosperous Cities.",
    bookNow: "Book Now",
    homeVisaCardPromotion: "/img/home----visa-card-promotion@1x.png",
    graylineworldwide11: "/img/graylineworldwide-1-1@2x.png",
    name: "GARY LINE TOURS OF MACAU LTD",
    text5: "澳門錦倫旅行社有限公司",
    navbarLinkPlace1: "Home",
    navbarLinkAboutUs: "About Us",
    navbarLinkPlace2: "Tours",
    navbarLinkVisaCardPromotion: "Visa Card Promotion",
    navbarLinkOtherServices1: "Other Services",
    navbarLinkOtherServices2: "FQA",
    navbarLinkContactUs: "Contact Us",
    graylineworldwide12: "/img/graylineworldwide-1@2x.png",
    surname2: "GRAY LINE TOURS OF MACAU LIMITED",
    no179RuaDoCampo: <React.Fragment>No. 179 Rua do Campo<br/>Macau<br/>Tel. No. : (853) 2833 6611</React.Fragment>,
    place: "Home",
    fqa: "FQA",
    contactUs: "Contact Us",
    group2Props: group23Data,
};

const divBlock1Data = {
    sectionTitle: "Macau",
    paragraph: <React.Fragment>Macau – Macau is a Special Administrative Region of China since 20th December 1999. This
        small but exciting city is located in Guangdong province, 60 km to the east-northeast of Hong Kong. It is a city
        where the East meets West with over 400 years in history. At the 29th<br/>Session of the World Heritage
        Committee, The Historic Centre of Macau was successfully inscribed as a World Heritage Site. With the rapid
        development of tourism and the opening of international hotel-casino such as Venetian~Macao~Resort~Hotel and MGM
        Grand Macau in recent years, Macau is becoming a distinctive entertainment and leisure holiday destination.
        Tourists can actually follow a day-tour with Gray Line Tours to visit this phenomenal World Heritage city and
        the modern side of Macau.</React.Fragment>,
};

const tour21Data = {
    cardsImageMask: "/img/cards-image-mask@2x.png",
    divBlockProps: divBlock1Data,
};

const cardsImageMask1Data = {
    src: "/img/cards-image-mask-3@2x.png",
};

const buttonDefault1Data = {
    children: "Know More",
};

const cardsImageMask2Data = {
    src: "/img/cards-image-mask-1@2x.png",
};

const buttonDefault2Data = {
    children: "Know More",
};

const cardsImageMask3Data = {
    src: "/img/cards-image-mask-2@2x.png",
};

const buttonDefault3Data = {
    children: "Know More",
};

const divBlock2Data = {
    sectionTitle: "Hong Kong",
    paragraph: "Hong Kong–is a Special Administrative Region of China since 1st July 1997. It is a cosmopolitan city with a population of 7 million spreads over Hong Kong Island, Kowloon Peninsula, New Territories and over 260 outlying islands.",
};

const tour22Data = {
    cardsImageMask: "/img/cards-image-mask-4@2x.png",
    className: "tour-2",
    divBlockProps: divBlock2Data,
};

const cardsImageMask4Data = {
    src: "/img/cards-image-mask-7@2x.png",
};

const buttonDefault4Data = {
    children: "Know More",
};

const buttonDefault5Data = {
    children: "Know More",
};

const cardsImageMask5Data = {
    src: "/img/cards-image-mask-6@2x.png",
};

const buttonDefault6Data = {
    children: "Know More",
};

const buttonDefault7Data = {
    children: "← Back",
    className: "button-default",
};

const buttonDefault8Data = {
    children: "↑ Top",
    className: "button-default-7",
};

const tourData = {
    graylineworldwide11: "/img/graylineworldwide-1-1@2x.png",
    name: "GARY LINE TOURS OF MACAU LTD",
    text6: "澳門錦倫旅行社有限公司",
    navbarLinkPlace1: "Home",
    navbarLinkAboutUs: "About Us",
    navbarLinkPlace2: "Tours",
    navbarLinkVisaCardPromotion: "Visa Card Promotion",
    navbarLinkOtherServices1: "Other Services",
    navbarLinkOtherServices2: "FQA",
    navbarLinkContactUs: "Contact Us",
    homeTour: "/img/home----tour@1x.png",
    paragraph1: "/img/paragraph-4@1x.png",
    paragraph2: "/img/paragraph-3@1x.png",
    paragraph3: "/img/paragraph@1x.png",
    paragraph4: "/img/paragraph-1@1x.png",
    paragraph5: "/img/paragraph-2@1x.png",
    paragraph6: "/img/paragraph-3@1x.png",
    paragraph7: "/img/paragraph-10@1x.png",
    paragraph8: "/img/paragraph-11@1x.png",
    cardsImageMask: "/img/cards-image-mask-5@2x.png",
    paragraph9: "/img/paragraph-6@1x.png",
    paragraph10: "/img/paragraph-7@1x.png",
    paragraph11: "/img/paragraph-8@1x.png",
    paragraph12: "/img/paragraph-9@1x.png",
    graylineworldwide12: "/img/graylineworldwide-1@2x.png",
    surname: "GRAY LINE TOURS OF MACAU LIMITED",
    no179RuaDoCampo: <React.Fragment>No. 179 Rua do Campo<br/>Macau<br/>Tel. No. : (853) 2833 6611</React.Fragment>,
    place: "Home",
    fqa: "FQA",
    contactUs: "Contact Us",
    tour21Props: tour21Data,
    cardsImageMask1Props: cardsImageMask1Data,
    buttonDefault1Props: buttonDefault1Data,
    cardsImageMask2Props: cardsImageMask2Data,
    buttonDefault2Props: buttonDefault2Data,
    cardsImageMask3Props: cardsImageMask3Data,
    buttonDefault3Props: buttonDefault3Data,
    tour22Props: tour22Data,
    cardsImageMask4Props: cardsImageMask4Data,
    buttonDefault4Props: buttonDefault4Data,
    buttonDefault5Props: buttonDefault5Data,
    cardsImageMask5Props: cardsImageMask5Data,
    buttonDefault6Props: buttonDefault6Data,
    buttonDefault7Props: buttonDefault7Data,
    buttonDefault8Props: buttonDefault8Data,
};

const carouselData = {
    "desctritpion": [
        "Hotel accommodation of major hotels in Hong Kong 、Macau and Mainland China",
        "Official ticket selling agent of ferry tickets between Macau and Hong Kong / Shenzhen",
        "Air-tickets for international and domestic Chinese flights, as well as helicopter tickets between Macau and Hong Kong / Shenzhen",
        "Accredited ticket selling agent of theme parks and tourist attractions in Hong Kong & Macau: Hong Kong Disneyland, Ocean Park, Ngong Ping 360, Peak Tram, Madame Tussauds Hong Kong and Macau Tower",
        "China visa application and Entry Permits to enter Hong Kong for Chinese residents of Taiwan arrangement"
    ]
};

const otherServiceData = {
    graylineworldwide11: "/img/graylineworldwide-1-1@2x.png",
    name: "GARY LINE TOURS OF MACAU LTD",
    text7: "澳門錦倫旅行社有限公司",
    navbarLinkPlace1: "Home",
    navbarLinkAboutUs: "About Us",
    navbarLinkPlace2: "Tours",
    navbarLinkVisaCardPromotion: "Visa Card Promotion",
    navbarLinkOtherServices1: "Other Services",
    navbarLinkOtherServices2: "FQA",
    navbarLinkContactUs: "Contact Us",
    homeOtherService: "/img/home----other-service@1x.png",
    otherService: "Other Service",
    graylineworldwide12: "/img/graylineworldwide-1@2x.png",
    surname: "GRAY LINE TOURS OF MACAU LIMITED",
    no179RuaDoCampo: <React.Fragment>No. 179 Rua do Campo<br/>Macau<br/>Tel. No. : (853) 2833 6611</React.Fragment>,
    place: "Home",
    fqa: "FQA",
    contactUs: "Contact Us",
    carouselProps: carouselData,
};

const buttonDefault9Data = {
    children: "← Back",
    className: "button-default-8",
};

const buttonDefault10Data = {
    children: "↑ Top",
    className: "button-default-9",
};

const fQAData = {
    graylineworldwide11: "/img/graylineworldwide-1-1@2x.png",
    name: "GARY LINE TOURS OF MACAU LTD",
    text8: "澳門錦倫旅行社有限公司",
    navbarLinkPlace1: "Home",
    navbarLinkAboutUs: "About Us",
    navbarLinkPlace2: "Tours",
    navbarLinkVisaCardPromotion: "Visa Card Promotion",
    navbarLinkOtherServices1: "Other Services",
    navbarLinkOtherServices2: "FQA",
    navbarLinkContactUs: "Contact Us",
    homeFqa: "/img/home----fqa@1x.png",
    frequentlyAskedQuestions: "Frequently Asked Questions",
    graylineworldwide12: "/img/graylineworldwide-1@2x.png",
    surname: "GRAY LINE TOURS OF MACAU LIMITED",
    no179RuaDoCampo: <React.Fragment>No. 179 Rua do Campo<br/>Macau<br/>Tel. No. : (853) 2833 6611</React.Fragment>,
    place: "Home",
    fqa: "FQA",
    contactUs: "Contact Us",
    buttonDefault1Props: buttonDefault9Data,
    buttonDefault2Props: buttonDefault10Data,
};


const buttonDefault12Data = {
    children: "← Back",
    className: "button-default-11",
};

const buttonDefault13Data = {
    children: "↑ Top",
    className: "button-default-12",
};

const itemText1Row1Data = {
    children: "MOP$1220",
};

const itemText1Row2Data = {
    children: "MOP$1050",
};

const rowMain1Data = {
    itemText1Row1Props: itemText1Row1Data,
    itemText1Row2Props: itemText1Row2Data,
};

const table1Data = {
    headerRow: "/img/header-row@1x.png",
    rowMainProps: rowMain1Data,
};

const headerLeftAlignedNoSubheadRegular1Data = {
    children: "SENIOR (AGED 65 OR ABOVE",
};

const itemText1Row3Data = {
    children: "MOP$700",
    className: "item-text-1-row-4",
};


const tour4Data = {
    graylineworldwide11: "/img/graylineworldwide-1-1@2x.png",
    name: "GARY LINE TOURS OF MACAU LTD",
    text12: "澳門錦倫旅行社有限公司",
    navbarLinkPlace1: "Home",
    navbarLinkAboutUs: "About Us",
    navbarLinkPlace2: "Tours",
    navbarLinkVisaCardPromotion: "Visa Card Promotion",
    navbarLinkOtherServices1: "Other Services",
    navbarLinkOtherServices2: "FQA",
    navbarLinkContactUs: "Contact Us",
    homeTourMacauWorldHeritageExcursion: "/img/home----tour----macau-world-heritage-excursion-tour--with-lunch-@1x.png",
    afterAMorningOfV: <React.Fragment>Tour price includes round trip Economy class TurboJET ticket, Hong Kong Disneyland
        1-Day Ticket,one way hotel transfer from Macau hotel to Macau Outer Harbour Ferry Terminal,
        guided service and round trip air-conditioned coach transfer in Hong Kong.
        Note: We will take 23:00 pm ferry retum to Macau.
        Please bring along passport and return air ticket for immigration.
    </React.Fragment>,
    graylineworldwide12: "/img/graylineworldwide-1@2x.png",
    surname: "GRAY LINE TOURS OF MACAU LIMITED",
    no179RuaDoCampo: <React.Fragment>No. 179 Rua do Campo<br/>Macau<br/>Tel. No. : (853) 2833 6611</React.Fragment>,
    place: "Home",
    fqa: "FQA",
    contactUs: "Contact Us",
    mainContent2Props: {
        player: 'https://www.youtube-nocookie.com/embed/DRecD384lQk',
        place: "Tours",
        sectionTitle1: "HONG KONG DISNEYLAND MAGIC TOUR\n",
        paragraph1: `Make 2022 the most magical year ever by becoming a Magic Access member! Join Magic Access not just for year-round fun, but also to enjoy special privileges on parking, shopping, dining and hotel rooms.`,
        sectionTitle2: "Information of the tour:",
        paragraph2: <React.Fragment>Daily Afternoon Departure
            <br/>(Actual time will be given at the time of reservation)
            <br/>Duration: Approx. 12 hours Hotel pick up time:Approx. 10:00am - 10:30am
            <br/>We will take 11:00 am ferry to Hong Kong and 23:00 pm ferry retum to Macau.<br/>
            Hong Kong Disneyland Resort offers unforgettable, culturally distinctive Disney experiences for guests of
            all ages and nationalities. In the magical kingdom theme park - filled with your favorite Disney stories and
            characters - explore seven diverse lands that are home to award-winning,first-of-a-kind attractions and
            entertainment.
        </React.Fragment>,
        paragraph3: "Route of the tour:",
        sectionTitle3: "Hong Kong Disneyland Magic Tour:",
        listItemOrdered1Props: {
            number: "1.",
            text: "Round Trip Economy Class TurboJET Ticket",
        },
        listItemOrdered2Props: {
            number: "2.",
            text: "One Way Hotel Transfer from Macau hotel to Macau outer Harbour Ferry Terminal",
            className: "list-item-ordered-2",
        },
        listItemOrdered3Props: {
            number: "3.",
            text: "Hong Kong Disneyland 1-Day Ticket",
            className: "list-item-ordered-3",
        },
        listItemOrdered4Props: {
            number: "4.",
            text: "Enjoy the dream-come-ture\" Royal Princess Garden\"",
            className: "list-item-ordered-4",
        },
        listItemOrdered5Props: {
            number: "5.",
            text: "Disney Park`s first Marvel-themed ride, Iron Man Experience",
            className: "list-item-ordered-5",
        },
        listItemOrdered6Props: {
            number: "6.",
            text: "Watch the brand-new \"We Love Mickey!\" pronection Show\n",
            className: "list-item-ordered-6",
        },
        listItemOrdered7Props: {
            number: "7.",
            text: "Join \"Disney Paint the Night\" parade\n",
            className: "list-item-ordered-7",
        },
        listItemOrdered8Props: {
            number: "",
            text: "",
            className: "list-item-ordered-8",
        },
        listItemOrdered9Props: {
            number: "",
            text: "",
            className: "list-item-ordered-9",
        },
        listItemOrdered10Props: {
            number: "",
            text: "",
            className: "list-item-ordered",
        },
    },
    tableProps: {
        headerRow: ['ADULT', 'CHILD ','SENIOR'],
        className: "table-1",
        row: [
            ['MOP$1220', 'MOP$1050','MOP$700'],
        ]
    },
    galleryProps: {
        className: "gallery-1",
    },
    buttonDefault1Props: {
        children: "Book now / Know More",
        className: "button-default-14",
    },
    buttonDefault2Props: {
        children: "← Back",
        className: "button-default-15",
    },
    buttonDefault3Props: {
        children: "↑ Top",
        className: "button-default-16",
    },
    photos: [
        '/img/tour 4-2.jpg',
        '/img/tour 4-1.jpg',
        '/img/tour 4-3.jpg',
        '/img/tour 4-4.jpg',
        '/img/tour 4-5.jpg',
    ]
};

const mainContent1Data = {
    sectionTitle: "MACAU TOUR GUIDE AND LIMOUSINE SERVICES",
    paragraph: "To accommodate increasing amount of business and leisure travelers’ request on traveling by limousine. Gray Line Tours is pleased to offer a comprehensive range of services to meet different requirements of our customers. We specialize in arranging private sightseeing tour by limousine / coach to any corporate client or tourist who has business or personal arrangement in Macau. A team of well-trained, experienced chauffeurs, tourist guides and escorts will ensure professional and personalized services to our clients.",
};

const buttonDefault14Data = {
    children: "Book now / Know More",
    className: "button-default-1-1",
};

const buttonDefault15Data = {
    children: "← Back",
    className: "button-default-13",
};

const buttonDefault16Data = {
    children: "↑ Top",
    className: "button-default-2-1",
};

const buttonDefault17Data = {
    children: "Book now / Know More",
    className: "button-default-1-2",
};

const buttonDefault18Data = {
    children: "← Back",
    className: "button-default-3-1",
};

const buttonDefault19Data = {
    children: "↑ Top",
    className: "button-default-2-2",
};

const buttonDefault20Data = {
    children: "Book now / Know More",
    className: "button-default-1",
};

const buttonDefault21Data = {
    children: "← Back",
    className: "button-default-3",
};

const buttonDefault22Data = {
    children: "↑ Top",
    className: "button-default-2",
};

const tour3Data = {
    graylineworldwide11: "/img/graylineworldwide-1-1@2x.png",
    name: "GARY LINE TOURS OF MACAU LTD",
    text10: "澳門錦倫旅行社有限公司",
    navbarLinkPlace1: "Home",
    navbarLinkAboutUs: "About Us",
    navbarLinkPlace2: "Tours",
    navbarLinkVisaCardPromotion: "Visa Card Promotion",
    navbarLinkOtherServices1: "Other Services",
    navbarLinkOtherServices2: "FQA",
    navbarLinkContactUs: "Contact Us",
    homeTourMacauTourGuideAndLimousineS: "/img/home----tour----macau-tour-guide-and-limousine-services@1x.png",
    mop28001St4Hrs: <React.Fragment>MOP$2,800 /1st 4 hrs, <br/>MOP$650/Every Hour Thereafter</React.Fragment>,
    surname1: "Price",
    specifications1: "Specifications",
    pngegg21: "/img/pngegg-2@2x.png",
    paragraph1: <React.Fragment> Remarks:<br/> <br/>Price includes limousine / coach with guided service (English /
        Mandarin / Cantonese speaking)<br/><br/> A minimum hire duration of 4 hours will be charged<br/> <br/>Price do
        not include parking tolls and admission fees to places of visit<br/><br/> <br/>Surcharge:<br/><br/> <br/>- 21:00
        to 24:00: MOP$150 / hour<br/><br/> <br/>- 24:00 to 08:00: 50% of the selling price</React.Fragment>,
    address1: "4 Doors, 4 Seats",
    automatic1: "Automatic",
    surname2: "Short Mercedes Benz",
    mop26001St4Hrs1: <React.Fragment>MOP$2,600 /1st 4 hrs, <br/>MOP$600/Every Hour Thereafter</React.Fragment>,
    surname3: "Price",
    specifications2: "Specifications",
    pngegg22: "/img/pngegg-2-1@2x.png",
    paragraph2: <React.Fragment> Remarks:<br/> <br/>Price includes limousine / coach with guided service (English /
        Mandarin / Cantonese speaking)<br/><br/> A minimum hire duration of 4 hours will be charged<br/> <br/>Price do
        not include parking tolls and admission fees to places of visit<br/><br/> <br/>Surcharge:<br/><br/> <br/>- 21:00
        to 24:00: MOP$150 / hour<br/><br/> <br/>- 24:00 to 08:00: 50% of the selling price</React.Fragment>,
    address2: "4 Doors, 7 Seats",
    automatic2: "Automatic",
    x7SeaterVan: "7-Seater Van",
    mop26001St4Hrs2: <React.Fragment>MOP$2,600 /1st 4 hrs, <br/>MOP$600/Every Hour Thereafter</React.Fragment>,
    surname4: "Price",
    specifications3: "Specifications",
    pngegg23: "/img/pngegg-2-2@2x.png",
    paragraph3: <React.Fragment> Remarks:<br/> <br/>Price includes limousine / coach with guided service (English /
        Mandarin / Cantonese speaking)<br/><br/> A minimum hire duration of 4 hours will be charged<br/> <br/>Price do
        not include parking tolls and admission fees to places of visit<br/><br/> <br/>Surcharge:<br/><br/> <br/>- 21:00
        to 24:00: MOP$150 / hour<br/><br/> <br/>- 24:00 to 08:00: 50% of the selling price</React.Fragment>,
    address3: "1 Doors, 20 Seats",
    automatic3: "Automatic",
    x20SeaterCoach: "20-Seater Coach",
    graylineworldwide12: "/img/graylineworldwide-1@2x.png",
    surname5: "GRAY LINE TOURS OF MACAU LIMITED",
    no179RuaDoCampo: <React.Fragment>No. 179 Rua do Campo<br/>Macau<br/>Tel. No. : (853) 2833 6611</React.Fragment>,
    place: "Home",
    fqa: "FQA",
    contactUs: "Contact Us",
    mainContentProps: mainContent1Data,
    buttonDefault1Props: buttonDefault14Data,
    buttonDefault2Props: buttonDefault15Data,
    buttonDefault3Props: buttonDefault16Data,
    buttonDefault4Props: buttonDefault17Data,
    buttonDefault5Props: buttonDefault18Data,
    buttonDefault6Props: buttonDefault19Data,
    buttonDefault7Props: buttonDefault20Data,
    buttonDefault8Props: buttonDefault21Data,
    buttonDefault9Props: buttonDefault22Data,
};

const stepsProcess2Data = {
    className: "steps-process",
};

const group1181Data = {
    stepsProcessProps: stepsProcess2Data,
};

const stepsProcess3Data = {
    className: "steps-process",
};

const group1182Data = {
    className: "group-119",
    stepsProcessProps: stepsProcess3Data,
};

const stepsProcess4Data = {
    className: "steps-process",
};

const group1183Data = {
    className: "group-120",
    stepsProcessProps: stepsProcess4Data,
};

const stepsProcess5Data = {
    className: "steps-process",
};

const group1184Data = {
    className: "group-121",
    stepsProcessProps: stepsProcess5Data,
};

const inputData = {
    children: "Last Name* :",
};

const input21Data = {
    children: "First Name* :",
};

const input22Data = {
    children: "Email * :",
};

const input23Data = {
    children: "Phone No.* :",
};

const input24Data = {
    children: "Fax Number:",
};

const input25Data = {
    children: "Contract address:",
};

const input26Data = {
    children: "Home coutry/territory:",
    className: "input-2",
};

const input3Data = {
    children: "   Enquiry* :",
};

const button1Data = {
    children: "SUBMIT",
};

const button2Data = {
    children: "RESET",
    className: "button-1",
};

const contactUsData = {
    graylineworldwide11: "/img/graylineworldwide-1-1@2x.png",
    name: "GARY LINE TOURS OF MACAU LTD",
    text11: "澳門錦倫旅行社有限公司",
    navbarLinkPlace1: "Home",
    navbarLinkAboutUs: "About Us",
    navbarLinkPlace2: "Tours",
    navbarLinkVisaCardPromotion: "Visa Card Promotion",
    navbarLinkOtherServices1: "Other Services",
    navbarLinkOtherServices2: "FQA",
    navbarLinkContactUs: "Contact Us",
    homeContactUs: "/img/home----contact-us@1x.png",
    title: "Contact us",
    pleaseFillInYour: <React.Fragment>Please fill in your personal information and place your enquire.<br/>We will get
        back to you as soon as possible through email. Thank you!</React.Fragment>,
    addressNo179Ru: <React.Fragment>Address : No. 179 Rua do Campo, Macau<br/>Tel. No. : (853) 2833 6611<br/>Fax No. :
        (853) 2833 1155<br/>Email : enquiry@grayline.com.mo<br/>Website : http://www.grayline.com.mo/</React.Fragment>,
    surname1: "GRAY LINE TOURS OF MACAU LIMITED",
    address5ThFloor: <React.Fragment>Address : 5th Floor, Cheong Hing Building, 72 Nathan Road, Tsim Sha Tsui,
        Kowloon.<br/>Tour Department: T: (852) 2368 7111 F: (852) 2721 9654<br/>Sales &amp; Marketing: T: (852) 2368
        7113 F: (852) 2721 9029<br/>Hotels &amp; Ticketing: T: (852) 2368 7114 F: (852) 2723 8528<br/>Email :
        sales@grayline.com.hk<br/>Website : http://www.grayline.com.hk/</React.Fragment>,
    surname2: "GRAY LINE TOURS OF HONG KONG LIMITED",
    addressRoom1015: <React.Fragment>Address : Room 1015 Macau Ferry Terminal (Arrival Level ) Macau<br/>Tel. No. :
        (853) 2872 5813</React.Fragment>,
    surname3: "Branch Address",
    mapsicleMap1: "/img/map1-2.png",
    contactUsOnline: "Contact Us Online:",
    mapsicleMap2: "/img/map1-1.png",
    mapsicleMap3: "/img/map1-3.png",
    graylineworldwide12: "/img/graylineworldwide-1@2x.png",
    surname4: "GRAY LINE TOURS OF MACAU LIMITED",
    no179RuaDoCampo: <React.Fragment>No. 179 Rua do Campo<br/>Macau<br/>Tel. No. : (853) 2833 6611</React.Fragment>,
    place: "Home",
    fqa: "FQA",
    contactUs: "Contact Us",
    group1181Props: group1181Data,
    group1182Props: group1182Data,
    group1183Props: group1183Data,
    group1184Props: group1184Data,
    inputProps: inputData,
    input21Props: input21Data,
    input22Props: input22Data,
    input23Props: input23Data,
    input24Props: input24Data,
    input25Props: input25Data,
    input26Props: input26Data,
    input3Props: input3Data,
    button1Props: button1Data,
    button2Props: button2Data,
};


const tour2Data = {
    graylineworldwide11: "/img/graylineworldwide-1-1@2x.png",
    name: "GARY LINE TOURS OF MACAU LTD",
    text12: "澳門錦倫旅行社有限公司",
    navbarLinkPlace1: "Home",
    navbarLinkAboutUs: "About Us",
    navbarLinkPlace2: "Tours",
    navbarLinkVisaCardPromotion: "Visa Card Promotion",
    navbarLinkOtherServices1: "Other Services",
    navbarLinkOtherServices2: "FQA",
    navbarLinkContactUs: "Contact Us",
    homeTourMacauWorldHeritageExcursion: "/img/home----tour----macau-world-heritage-excursion-tour--with-lunch-@1x.png",
    paragraph: <React.Fragment>Tour price include air-conditioned sightseeing coach, guided services, lunch at local
        restaurant and<br/>Museum of Macau admission tickets.</React.Fragment>,
    afterAMorningOfV: <React.Fragment>After a morning of visiting different Heritage sites, Iunch has been arranged for
        our guests at 360 cafe- Macau`s only360 degrees<br/>revolving restaurant located on the 60th floor of Macau
        tower. After lunch , you will visit the observationdeck of Macau Tower, located 223m<br/>above ground over
        looking the entire Macau.</React.Fragment>,
    graylineworldwide12: "/img/graylineworldwide-1@2x.png",
    surname: "GRAY LINE TOURS OF MACAU LIMITED",
    no179RuaDoCampo: <React.Fragment>No. 179 Rua do Campo<br/>Macau<br/>Tel. No. : (853) 2833 6611</React.Fragment>,
    place: "Home",
    fqa: "FQA",
    contactUs: "Contact Us",
    mainContent2Props: {
        player: 'https://www.youtube.com/embed/8u0weA61oP0',
        place: "Tours",
        sectionTitle1: "MACAU WORLD HERITAGE EXCURSION TOUR (WITH LUNCH)",
        paragraph1: `Comprising over 20 monuments and urban squares interwoven in the heart of the city, the historic district is collectively known as "The Historic Centre of Macao" and inscribed on the World Heritage List in 2005.`,
        sectionTitle2: "Information of the tour:",
        paragraph2: <React.Fragment>Duration: Approx. 6 hours (not include pick up time)<br/>Daily Morning
            Departure<br/>Hotel
            pick-up time:9:30am - 10:00am<br/>(Actual time will be given at the time of reservation)</React.Fragment>,
        paragraph3: "Route of the tour:",
        sectionTitle3: "360” Cafe - Macau Tower:",

        listItemOrdered1Props: {
            number: "1.",
            text: "Round Trip Hotel Transfer",
        },
        listItemOrdered2Props: {
            number: "2.",
            text: "Ruins of St Paul`s Roman Catholic Church(World Heritage) A must-go attraction in Macau",
            className: "list-item-ordered-2",
        },
        listItemOrdered3Props: {
            number: "3.",
            text: "Visit Museum of Macau Learn Macau`s history,people and culture",
            className: "list-item-ordered-3",
        },
        listItemOrdered4Props: {
            number: "4.",
            text: "Mount Fortress(World Heritage) Macau`s principal military defence structure from 1617 to 1626",
            className: "list-item-ordered-4",
        },
        listItemOrdered5Props: {
            number: "5.",
            text: "Na Taha(a mythical character) Temple (World Heritage)",
            className: "list-item-ordered-5",
        },
        listItemOrdered6Props: {
            number: "6.",
            text: "St. Dominic`s Church (World Heritage) Famous for its decorated wooden ceiling and sacred art",
            className: "list-item-ordered-6",
        },
        listItemOrdered7Props: {
            number: "7.",
            text: "Holy House of Mary First western-style medical clinic in Macau",
            className: "list-item-ordered-7",
        },
        listItemOrdered8Props: {
            number: "8.",
            text: "Senado Square (World Heritage) Macau`s urban centre",
            className: "list-item-ordered-8",
        },
        listItemOrdered9Props: {
            number: "9.",
            text: "Leal senado Building (World Heritage) First municipal chamber in Macau",
            className: "list-item-ordered-9",
        },
        listItemOrdered10Props: {
            number: "10.",
            text: "General Post Office Building Historic building once housed the local charitable society Tung Sin Tong",
            className: "list-item-ordered",
        },
    },
    tableProps: {
        headerRow: ['ADULT', 'CHILD (1-9 YRS)'],
        className: "table-1",
        row: [
            ['MOP$780', 'MOP$480'],
        ]
    },
    galleryProps: {
        className: "gallery-1",
    },
    buttonDefault1Props: {
        children: "Book now / Know More",
        className: "button-default-14",
    },
    buttonDefault2Props: {
        children: "← Back",
        className: "button-default-15",
    },
    buttonDefault3Props: {
        children: "↑ Top",
        className: "button-default-16",
    },
    photos: [
        '/img/tour 2-1.jpg',
        '/img/tour 2-2.jpg',
        '/img/tour 2-3.jpg',
        '/img/tour 2-4.jpg',
        '/img/tour 2-5.jpg',
    ]
};

const tour1Data = {
    graylineworldwide11: "/img/graylineworldwide-1-1@2x.png",
    name: "GARY LINE TOURS OF MACAU LTD",
    text12: "澳門d錦倫旅行社有限公司",
    navbarLinkPlace1: "Home",
    navbarLinkAboutUs: "About Us",
    navbarLinkPlace2: "Tours",
    navbarLinkVisaCardPromotion: "Visa Card Promotion",
    navbarLinkOtherServices1: "Other Services",
    navbarLinkOtherServices2: "FQA",
    navbarLinkContactUs: "Contact Us",
    homeTourMacauWorldHeritageExcursion: "/img/home----tour----macau-world-heritage-tour--without-lunch-@1x.png",
    paragraph: <React.Fragment>Tour price include air-conditioned sightseeing coach, guided services, lunch at local
        restaurant and<br/>Museum of Macau admission tickets.<br/></React.Fragment>,
    graylineworldwide12: "/img/graylineworldwide-1@2x.png",
    surname: "GRAY LINE TOURS OF MACAU LIMITED",
    no179RuaDoCampo: <React.Fragment>No. 179 Rua do Campo<br/>Macau<br/>Tel. No. : (853) 2833 6611</React.Fragment>,
    place: "Home",
    fqa: "FQA",
    contactUs: "Contact Us",
    mainContent2Props: {
        player: 'https://www.youtube.com/embed/rVYn3sQyrOE',
        place: "Tours",
        sectionTitle1: "MACAU WORLD HERITAGE TOUR (WITHOUT LUNCH)",
        paragraph1: `Comprising over 20 monuments and urban squares interwoven in the heart of the city, the historic district is collectively known as "The Historic Centre of Macao and inscribed on the World Heritage List in 2005.`,
        sectionTitle2: "Information of the tour:",
        paragraph2: <React.Fragment>Duration: Approx. 3.5 hours (not include pick up time)
            <br/>Daily Morning
            Departure<br/>Hotel
            pick-up time:9:30am - 10:00am<br/>(Actual time will be given at the time of reservation)</React.Fragment>,
        paragraph3: "Route of the tour:",
        sectionTitle3: "Historic Centre of Macao:",
        listItemOrdered1Props: {
            number: "1.",
            text: "Round Trip Hotel Transfer",
        },
        listItemOrdered2Props: {
            number: "2.",
            text: "Ruins of St Paul`s Roman Catholic Church(World Heritage) A must-go attraction in Macau",
            className: "list-item-ordered-2",
        },
        listItemOrdered3Props: {
            number: "3.",
            text: "Visit Museum of Macau Learn Macau`s history,people and culture",
            className: "list-item-ordered-3",
        },
        listItemOrdered4Props: {
            number: "4.",
            text: "Mount Fortress(World Heritage) Macau`s principal military defence structure from 1617 to 1626",
            className: "list-item-ordered-4",
        },
        listItemOrdered5Props: {
            number: "5.",
            text: "Na Taha(a mythical character) Temple (World Heritage)",
            className: "list-item-ordered-5",
        },
        listItemOrdered6Props: {
            number: "6.",
            text: "St. Dominic`s Church (World Heritage) Famous for its decorated wooden ceiling and sacred art",
            className: "list-item-ordered-6",
        },
        listItemOrdered7Props: {
            number: "7.",
            text: "Holy House of Mary First western-style medical clinic in Macau",
            className: "list-item-ordered-7",
        },
        listItemOrdered8Props: {
            number: "8.",
            text: "Senado Square (World Heritage) Macau`s urban centre",
            className: "list-item-ordered-8",
        },
        listItemOrdered9Props: {
            number: "9.",
            text: "Leal senado Building (World Heritage) First municipal chamber in Macau",
            className: "list-item-ordered-9",
        },
        listItemOrdered10Props: {
            number: "10.",
            text: "General Post Office Building Historic building once housed the local charitable society Tung Sin Tong",
            className: "list-item-ordered",
        },
    },
    tableProps: {
        headerRow: ['ADULT', 'CHILD (1-9 YRS)'],
        className: "table-1",
        row: [
            ['MOP$430', 'MOP$330'],
        ]
    },
    galleryProps: {
        className: "gallery-1",
    },
    buttonDefault1Props: {
        children: "Book now / Know More",
        className: "button-default-14",
        to: '/contact-us'
    },
    buttonDefault2Props: {
        children: "← Back",
        className: "button-default-15",
        action: 'back'
    },
    buttonDefault3Props: {
        children: "↑ Top",
        className: "button-default-16",
        action: 'top'
    },
    photos: [
        '/img/tour 1-1.jpg',
        '/img/tour 1-2.jpg',
        '/img/tour 1-3.jpg',
        '/img/tour 1-4.jpg',
        '/img/tour 1-5.jpg',
    ]
};


const headerLeftAlignedNoSubheadRegular3Data = {
    children: "ADULT",
    className: "header-left-aligned-no-subhead-regular-1",
};

const itemText1Row8Data = {
    children: "Economy Class",
};

const itemText1Row9Data = {
    children: "MOP$820",
};

const rowMain4Data = {
    className: "row-main-3",
    itemText1Row1Props: itemText1Row8Data,
    itemText1Row2Props: itemText1Row9Data,
};


const itemText1Row11Data = {
    children: "Super Class",
};

const itemText1Row12Data = {
    children: "MOP$1080",
};

const rowMain5Data = {
    className: "row-main-4",
    itemText1Row1Props: itemText1Row11Data,
    itemText1Row2Props: itemText1Row12Data,
};

const itemText1Row13Data = {
    children: "MOP$980",
    className: "item-text-1-row-6",
};


const tour5Data = {
    graylineworldwide11: "/img/graylineworldwide-1-1@2x.png",
    name: "GARY LINE TOURS OF MACAU LTD",
    text12: "澳門錦倫旅行社有限公司",
    navbarLinkPlace1: "Home",
    navbarLinkAboutUs: "About Us",
    navbarLinkPlace2: "Tours",
    navbarLinkVisaCardPromotion: "Visa Card Promotion",
    navbarLinkOtherServices1: "Other Services",
    navbarLinkOtherServices2: "FQA",
    navbarLinkContactUs: "Contact Us",
    homeTourMacauWorldHeritageExcursion: "/img/home----tour----macau-world-heritage-excursion-tour--with-lunch-@1x.png",
    paragraph: <React.Fragment>Tour price includes round trip Economy Class/Super Class TurboJET ticket, one way hotel
        transfer from<br/> Macau hotel to Macau Outer Harbour Ferry Terminal, round trip air-conditiones sightseeing
        coach in <br/>Hong Kong,guided service,tram ticket to the Victoria Peak and admission to Sky Terrace
        428.</React.Fragment>,

    afterAMorningOfV: <React.Fragment>After a morning of visiting different Heritage sites, Iunch has been arranged for
        our guests at 360 cafe- Macau`s only360 degrees<br/>revolving restaurant located on the 60th floor of Macau
        tower. After lunch , you will visit the observationdeck of Macau Tower, located 223m<br/>above ground over
        looking the entire Macau.</React.Fragment>,
    graylineworldwide12: "/img/graylineworldwide-1@2x.png",
    surname: "GRAY LINE TOURS OF MACAU LIMITED",
    no179RuaDoCampo: <React.Fragment>No. 179 Rua do Campo<br/>Macau<br/>Tel. No. : (853) 2833 6611</React.Fragment>,
    place: "Home",
    fqa: "FQA",
    contactUs: "Contact Us",
    mainContent2Props: {
        place: "Tours",
        sectionTitle1: " DELUXE HONG KONG ISLAND TOUR",
        paragraph1: `With only 1 hour ferry between Hong Kong and Macau,you can experience the beauty of Hong Kong.`,
        sectionTitle2: "Information of the tour:",
        paragraph2: <React.Fragment>Daily Afternoon Departure
            <br/>(Actual time will be given at the time of reservation)
            <br/>Duration: Approx. 10 hours Hotel pick up time: Approx.10:00am - 10:30am
            <br/>We will take 11:00 am ferry to Hong Kong and 19:30 pm ferry return to Macau.
            <br/>To provide the best buy value to travelers,we package Turbojet tickets with our classic tour in Hong
            Kong with special price.<br/>
            This classic tour includes riding the peak Tram to visit Victoria Peak, follow by entering Sky
            Terrace428-the highest viewing platform in Hong Kong.After wards, tour will visit Aberdeen Fishing
            Village(old Hong Kong)and you may choose to ride the sampan(own expense).A visit to great bargain place
            Stanley Market is included.</React.Fragment>,
        paragraph3: "Route of the tour:",
        sectionTitle3: "Hong Kong Island Half-Day Tour:",
        player: "https://www.youtube-nocookie.com/embed/-o0RB-b4OuM",
        listItemOrdered1Props: {
            number: "1.",
            text: "Round Trip TurboJET Ticket (Economy/Super Class)",
        },
        listItemOrdered2Props: {
            number: "2.",
            text: "One Way Hotel Transfer from Macau hotel to Macau outer Harbour Ferry Terminal",
            className: "list-item-ordered-2",
        },
        listItemOrdered3Props: {
            number: "3.",
            text: "Ride the nearly 130 years old peak Tram to the peak",
            className: "list-item-ordered-3",
        },
        listItemOrdered4Props: {
            number: "4.",
            text: "Sky Terrace 428 viewing platform",
            className: "list-item-ordered-4",
        },
        listItemOrdered5Props: {
            number: "5.",
            text: "Visit old Hong Kong-Aberdeen Fishing Village",
            className: "list-item-ordered-5",
        },
        listItemOrdered6Props: {
            number: "6.",
            text: "Access to QTS award TSL jewellery factory",
            className: "list-item-ordered-6",
        },
        listItemOrdered7Props: {
            number: "7.",
            text: "Visit Stanley Market ",
            className: "list-item-ordered-7",
        },
        listItemOrdered8Props: {
            number: "8.",
            text: "Enjoy complimentary meal,snacks and drinks on TurboJET ferry(Super Class Only)",
            className: "list-item-ordered-8",
        },
        listItemOrdered9Props: {
            number: "9.",
            text: "Complimentary 3-Day Hong Kong Tourist Sim Card 1GB of data usage for 72 hours in Hong Kong\n",
            className: "list-item-ordered-9",
        },
        listItemOrdered10Props: {
            number: "",
            text: "",
            className: "list-item-ordered",
        },
    },
    tableProps: {
        headerRow: ['','ADULT', 'CHILD'],
        className: "table-1",
        row: [
            ['Economy Class','MOP$820', 'MOP$750'],
            ['Super Class','MOP$1080', 'MOP$980'],
        ]
    },
    galleryProps: {
        className: "gallery-1",
    },
    buttonDefault1Props: {
        children: "Book now / Know More",
        className: "button-default-14",
    },
    buttonDefault2Props: {
        children: "← Back",
        className: "button-default-15",
    },
    buttonDefault3Props: {
        children: "↑ Top",
        className: "button-default-16",
    },
    photos: [
        '/img/tour 5-1.jpg',
        '/img/tour 5-2.jpg',
        '/img/tour 5-3.jpg',
        '/img/tour 5-4.jpg',
        '/img/tour 5-5.png',
    ]
};

const mainContent3Data = {
    sectionTitle: "HONG KONG PRIVATE TOUR GUIDE AND LIMOUSINE SERVICES",
    paragraph: "Some guests may prefer to explore Hong Kong in the comfort of a private limousine, with full control of sightseeing points, shopping venues, dining location and most importantly, time. Gray Line Tours is proud to offer a full line of private limousine service. Enjoy the luxury of a Mercedes to the comfort of a 7 seater luxury van, or even a 20 seater coach! An experienced tour guide will be available to assist you through the entire trip.",
    className: "main-content-2",
};

const buttonDefault32Data = {
    children: "Book now / Know More",
    className: "button-default-4-1",
};

const buttonDefault33Data = {
    children: "← Back",
    className: "button-default-5-1",
};

const buttonDefault34Data = {
    children: "↑ Top",
    className: "button-default-6-1",
};

const buttonDefault35Data = {
    children: "Book now / Know More",
    className: "button-default-4-2",
};

const buttonDefault36Data = {
    children: "← Back",
    className: "button-default-5-2",
};

const buttonDefault37Data = {
    children: "↑ Top",
    className: "button-default-6-2",
};

const buttonDefault38Data = {
    children: "Book now / Know More",
    className: "button-default-4",
};

const buttonDefault39Data = {
    children: "← Back",
    className: "button-default-5",
};

const buttonDefault40Data = {
    children: "↑ Top",
    className: "button-default-6",
};

const tour6Data = {
    graylineworldwide11: "/img/graylineworldwide-1-1@2x.png",
    name: "GARY LINE TOURS OF MACAU LTD",
    text15: "澳門錦倫旅行社有限公司",
    navbarLinkPlace1: "Home",
    navbarLinkAboutUs: "About Us",
    navbarLinkPlace2: "Tours",
    navbarLinkVisaCardPromotion: "Visa Card Promotion",
    navbarLinkOtherServices1: "Other Services",
    navbarLinkOtherServices2: "FQA",
    navbarLinkContactUs: "Contact Us",
    homeTourHongKongPrivateTourGuideAnd: "/img/home----tour----hong-kong-private-tour-guide-and-limousine-servi@1x.png",
    mop43001St4Hrs: <React.Fragment>MOP$4,300 /1st 4 hrs, <br/>MOP$1,100/Every Hour Thereafter</React.Fragment>,
    surname1: "Price",
    specifications1: "Specifications",
    pngegg21: "/img/pngegg-2@2x.png",
    address1: "4 Doors, 4 Seats",
    automatic1: "Automatic",
    surname2: "Short Mercedes Benz",
    paragraph1: <React.Fragment> Remarks:<br/> <br/>Price includes limousine / coach with guided service (English /
        Mandarin speaking)<br/>A minimum hire duration of 4 hours will be charged<br/>Price do not include parking and
        tunnel tolls and admission fees to places of visit<br/>Note: Please bring along passport and return air ticket
        for immigration</React.Fragment>,
    mop26001St4Hrs1: <React.Fragment>MOP$2,600 /1st 4 hrs, <br/>MOP$600/Every Hour Thereafter</React.Fragment>,
    surname3: "Price",
    specifications2: "Specifications",
    pngegg22: "/img/pngegg-2-1@2x.png",
    paragraph2: <React.Fragment> Remarks:<br/> <br/>Price includes limousine / coach with guided service (English /
        Mandarin speaking)<br/>A minimum hire duration of 4 hours will be charged<br/>Price do not include parking and
        tunnel tolls and admission fees to places of visit<br/>Note: Please bring along passport and return air ticket
        for immigration</React.Fragment>,
    address2: "4 Doors, 7 Seats",
    automatic2: "Automatic",
    x7SeaterVan: "7-Seater Van",
    paragraph3: <React.Fragment> Remarks:<br/> <br/>Price includes limousine / coach with guided service (English /
        Mandarin speaking)<br/>A minimum hire duration of 4 hours will be charged<br/>Price do not include parking and
        tunnel tolls and admission fees to places of visit<br/>Note: Please bring along passport and return air ticket
        for immigration</React.Fragment>,
    mop26001St4Hrs2: <React.Fragment>MOP$2,600 /1st 4 hrs, <br/>MOP$600/Every Hour Thereafter</React.Fragment>,
    surname4: "Price",
    specifications3: "Specifications",
    pngegg23: "/img/pngegg-2-2@2x.png",
    address3: "1 Doors, 20 Seats",
    automatic3: "Automatic",
    x20SeaterCoach: "20-Seater Coach",
    graylineworldwide12: "/img/graylineworldwide-1@2x.png",
    surname5: "GRAY LINE TOURS OF MACAU LIMITED",
    no179RuaDoCampo: <React.Fragment>No. 179 Rua do Campo<br/>Macau<br/>Tel. No. : (853) 2833 6611</React.Fragment>,
    place: "Home",
    fqa: "FQA",
    contactUs: "Contact Us",
    mainContentProps: mainContent3Data,
    buttonDefault1Props: buttonDefault32Data,
    buttonDefault2Props: buttonDefault33Data,
    buttonDefault3Props: buttonDefault34Data,
    buttonDefault4Props: buttonDefault35Data,
    buttonDefault5Props: buttonDefault36Data,
    buttonDefault6Props: buttonDefault37Data,
    buttonDefault7Props: buttonDefault38Data,
    buttonDefault8Props: buttonDefault39Data,
    buttonDefault9Props: buttonDefault40Data,
};

const keyword1Data = {
    children: "The Batman",
};

const keyword2Data = {
    children: "Ecommerce",
    className: "keyword-6",
};

const searchBoxData = {
    cloudServiceKeywords: "Cloud Service Keywords",
    searchAgain: "Search Again",
    companySuggests1: "Company Suggests",
    scalableStorageInThCloudService1: <React.Fragment>Scalable Storage in th<br/>Cloud Service</React.Fragment>,
    analyticsForTheFinancialServices1: "Analytics for the financial services",
    analyticsForEcomme1: <React.Fragment>Analytics for Ecommerce and<br/>Financial Services</React.Fragment>,
    mobilePushNotifications1: "Mobile push notifications",
    noResultsFound: "No results found",
    searchSowftareServicesAndMore: "Search sowftare, services and more...",
    search: "Search",
    popularSearch: "Popular Search",
    workManagment: "Work Managment",
    stableStorageCloud: "Stable Storage Cloud",
    cloudStorageService: "Cloud Storage Service",
    accessSalary: "Access Salary",
    simpleStorageService: "Simple Storage Service",
    companySuggests2: "Company Suggests",
    scalableStorageInThCloudService2: <React.Fragment>Scalable Storage in th<br/>Cloud Service</React.Fragment>,
    analyticsForTheFinancialServices2: "Analytics for the financial services",
    analyticsForEcomme2: <React.Fragment>Analytics for Ecommerce and<br/>Financial Services</React.Fragment>,
    mobilePushNotifications2: "Mobile push notifications",
    keyword1Props: keyword1Data,
    keyword2Props: keyword2Data,
};

const homePageData = {
    x951024_Auto_X21: "/img/95--1024-auto-x2-1@1x.png",
    findYourSpecialExperienceInMacau: "Find your special  experience In Macau",
    iconicToursToIconicPlaces: "Iconic tours to iconic places",
    macauWasTheFirst: "Macau was the first and also the last European (Portugal) colony in Asia. Today, it is a Special Administrative Region of China and an official Word Heritage Site inscribed by the World Heritage Committee. In addition, Macau is also known as the Monte Carlo of the East, with many world-famous casinos resorts, such as the Venetian, MGM and Wynn located in the city.",
    name1: "Gary Line Tours offer you the luxury to experience Hong Kong and Macau with our “A Day in 2 Cities” package, ensuring you will get the most out of your precious time.",
    searchLocationOrPriceOrKeyword: "Search Location or Price or Keyword",
    graylineworldwide11: "/img/graylineworldwide-1@2x.png",
    surname: "GRAY LINE TOURS OF MACAU LIMITED",
    no179RuaDoCampo: <React.Fragment>No. 179 Rua do Campo<br/>Macau<br/>Tel. No. : (853) 2833 6611</React.Fragment>,
    place: "Home",
    fqa: "FQA",
    contactUs: "Contact Us",
    graylineworldwide12: "/img/graylineworldwide-1-1@2x.png",
    name2: "GARY LINE TOURS OF MACAU LTD",
    text2: "澳門錦倫旅行社有限公司",
    navbarLinkPlace1: "Home",
    navbarLinkAboutUs: "About Us",
    navbarLinkPlace2: "Tours",
    navbarLinkVisaCardPromotion: "Visa Card Promotion",
    navbarLinkOtherServices1: "Other Services",
    navbarLinkOtherServices2: "FQA",
    navbarLinkContactUs: "Contact Us",
};

const aboutUsData = {
    graylineworldwide11: "/img/graylineworldwide-1-1@2x.png",
    name: "GARY LINE TOURS OF MACAU LTD",
    text3: "澳門錦倫旅行社有限公司",
    navbarLinkPlace1: "Home",
    navbarLinkAboutUs: "About Us",
    navbarLinkPlace2: "Tours",
    navbarLinkVisaCardPromotion: "Visa Card Promotion",
    navbarLinkOtherServices1: "Other Services",
    navbarLinkOtherServices2: "FQA",
    navbarLinkContactUs: "Contact Us",
    homeAboutUs: "/img/home----about-us@1x.png",
    aboutUs: "About Us",
    surname1: <React.Fragment>Gray Line Tours of Macau Limited has been in the travel industry and operating under the
        world famous trademark since 1996. With the headquarters based in Hong Kong, we offer a variety of half/full day
        tours tailored to ensure a memorable experience for all our guests.<br/><br/>With all the excitement in Macau
        and Hong Kong, it would be challenge to see everything in a short period of time. We have specially designed a
        range of innovative and unique itineraries for you to explore these two fascinating cities in one trip. Want to
        have a great time? Gray Line Tours is your choice. Book our tours today!</React.Fragment>,
    graylineworldwide12: "/img/graylineworldwide-1@2x.png",
    surname2: "GRAY LINE TOURS OF MACAU LIMITED",
    no179RuaDoCampo: <React.Fragment>No. 179 Rua do Campo<br/>Macau<br/>Tel. No. : (853) 2833 6611</React.Fragment>,
    place: "Home",
    fqa: "FQA",
    contactUs: "Contact Us",
};


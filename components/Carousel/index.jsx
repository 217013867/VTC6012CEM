import React, {useState} from "react";
import "./Carousel.css";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel as C} from 'react-responsive-carousel';



function Carousel(props) {
    const {desctritpion} = props;
    const [desIdx, setDesIdx] = useState(0)

    return (
        <div className="carouselx">
            <C showThumbs={false} showIndicators={true} showStatus={false} onChange={e => setDesIdx(e)} autoPlay={false} infiniteLoop={true}>
                <div>
                    <img height={'100%'} src="/img/hotal.jpg"/>
                </div>
                <div>
                    <img height={'100%'} src="/img/ferry.png"/>
                </div>
                <div>
                    <img height={'100%'} src="/img/airline.jpg"/>
                </div>
                <div>
                    <img height={'100%'} src="/img/tower.png"/>
                </div>
                <div>
                    <img height={'100%'} src="/img/visa.jpg"/>
                </div>
            </C>
            <p className="desctritpion inter-normal-black-14px">{desctritpion[desIdx]}</p>
        </div>
    );
}

export default Carousel;

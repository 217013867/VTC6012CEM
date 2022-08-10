import React from "react";
import "./Gallery.css";

function Gallery(props) {
    const {className, photos} = props;

    return (
        <div className={`gallery ${className || ""}`}>
            <div className="container-1">
                <div className="section-title-1 inter-bold-black-32px">Gallery of Tour</div>
                <div className="image-grid">
                    <div className="flex-row-28">
                        <div className="cards-image-mask-13">
                            <img className="cards-image-mask-14" src={photos[0]}/>
                        </div>
                        <div className="cards-image-mask-container">
                            <img className="cards-image-mask-15" src={photos[1]}/>
                            <img className="cards-image-mask-16" src={photos[2]}/>
                        </div>
                        <div className="cards-image-mask-container-1">
                            <img className="cards-image-mask-17" src={photos[3]}/>
                            <img className="cards-image-mask-18" src={photos[4]}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;

import React from "react";
import StepsProcess from "../StepsProcess";
import "./Group118.css";

function Group118(props) {
    const {className, stepsProcessProps, value, path} = props;

    return (
        <div className={`group-118 ${className || ""}`}>
            <div className="rectangle-63"></div>
            <StepsProcess value={value} className={stepsProcessProps.className} path={path}/>
        </div>
    );
}

export default Group118;

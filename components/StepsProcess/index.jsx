import React from "react";
import "./StepsProcess.css";

function StepsProcess(props) {
    const {className, value, path} = props;

    return (
        <div className={`steps-process-1 ${className || ""}`}>
            <input type={"checkbox"} checked={!!value}/>
            <div className="sub">
                <div className="overlap-group-14">
                    <img className="crown" src="/img/crown-4@2x.svg"/>
                    <img className="box" src={path}/>
                </div>
            </div>
        </div>
    );
}

export default StepsProcess;

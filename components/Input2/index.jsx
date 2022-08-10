import React from "react";
import "./Input2.css";

function Input2(props) {
    const {children, value, set, type} = props;

    return (

                <div className="text-field123">
                    <textarea className="textarea123" value={value}
                           onChange={(e) => set(e.target.value)}/>
                    <div className="label-text valign-text-middle">{children}</div>
                </div>


    );
}

export default Input2;
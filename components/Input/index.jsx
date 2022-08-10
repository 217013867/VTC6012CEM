import React from "react";
import "./Input.css";

function Input(props) {
    const {children, value, set, type} = props;

    return (
        <div className="input">
            <div className="container-5">
                <div className="text-field">
                    <input type={'text'} value={value}
                           onChange={(e) => set(e.target.value)}/>
                    <div className="label-text valign-text-middle">{children}</div>

                </div>
            </div>
        </div>
    );
}

export default Input;

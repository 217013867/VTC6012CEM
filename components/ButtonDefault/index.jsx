import React from "react";
import {Link} from "react-router-dom";
import "./ButtonDefault.css";

function ButtonDefault(props) {
    const {children, className, action, to} = props;
    console.log(props)
    const back = () => {
        return history.back()
    }

    const top = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    }

    return (
        <Link to={!!to ? to : "#"} onClick={() => action === 'back' ? back() : action === 'top' ? top() : null}>
            <div className={`button-default-23 ${className || ""}`}>
                <div className="button-text inter-normal-white-14px">{children}</div>
            </div>
        </Link>
    );
}

export default ButtonDefault;

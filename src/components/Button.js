import React from 'react';
import './Button.css';
import {Link} from "react-router-dom";

//style array handling css classes for the props
const STYLES = ['btn--primary', 'btn--outline'];

//size array handling css classes for the props
const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize
}) => {
    // If button component is true give style, if false give value 0 by default (btn--primary)
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    // If button component is true give size, if false give value 0 by default (btn--medium)
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        // Renders the button component
        <Link to="/button" className="btn-mobile">
            <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`} //renders css classes
            onClick={onClick} 
            type={type}
            >
            {children}
            </button>
        </Link>
    )
};
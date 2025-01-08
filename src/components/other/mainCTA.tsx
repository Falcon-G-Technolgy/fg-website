import React from "react";
import { Link } from "react-router-dom";

interface CtaType {
    to: string,
    linkText: string,
    color?: string
}
const MainCTA = React.memo (({to, linkText, color='bg-main-yellow'}: CtaType) => {
    return (
        <Link to={to}>
            <span 
            className={` ${color} hover:bg-secondary-yellow px-5 py-3 rounded-md text-center`} >
                {linkText}
            </span>
        </Link>
    );
})

export default MainCTA;

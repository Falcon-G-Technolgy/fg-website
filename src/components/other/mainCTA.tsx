import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface CtaType {
    to: string,
    linkText: string,
    style?: string
}
const MainCTA = React.memo (({to, linkText, style}: CtaType) => {
    return (
        <motion.span whileHover={{ y: -3 }}>
            <Link to={to}>
                <span 
                className={style ? style : 'bg-main-yellow hover:bg-secondary-yellow px-5 py-3 rounded-md text-center'} >
                    {linkText}
                </span>
            </Link>        
        </motion.span>

    );
})

export default MainCTA;

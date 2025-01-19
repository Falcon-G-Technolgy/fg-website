import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const socialMediaTable = [
    {
        icon: <FaFacebook/>,
        link: ''
    },
    {
        icon: <FaInstagram/>,
        link: ''
    },    
    {
        icon: <FaLinkedin/>,
        link: ''
    },    
    {
        icon: <FaXTwitter/>,
        link: ''
    },
    {
        icon: <FaGithub/>,
        link: ''
    },
]

const Footer: React.FC = () => {
    return (
        <footer className="bg-main-black flex xs:items-center xs:justify-center h-40 xs:h-52 relative top-24 xs:top-20 px-8 py-5 text-main-white ">
            <div className="flex flex-col items-end  xs:gap-3">
                <div className="flex xs:flex-col items-center gap-2">
                    <img src="/logotype-fg.PNG" className="size-16" alt="Logotype FG tech" />
                    <div className="xs:text-center">
                        <h1 className="font-bold">Falcon-G Technology</h1>
                        <p>Se booster grace au digital !</p>
                    </div>
                </div>
                <div className="flex gap-3 text-2xl relative right-9 xs:right-3 ">
                    {
                        socialMediaTable.map ((media, key) => (
                            <Link key={key} to={media.link}>
                                { media.icon}
                            </Link>
                        ))
                    }
                </div>
            </div>
            <div>

            </div>
        </footer>
    );
}

export default Footer;

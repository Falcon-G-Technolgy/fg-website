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
        <footer className="bg-main-black flex flex-col gap-2  h-40 xs:h-auto relative top-24 tablet:top-10 xs:top-20 px-8 py-5 text-main-white ">
            <div className="flex xs:flex-col xs:gap-12 xs:items-center justify-between xs:justify-center">
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
                                    <span className="hover:text-main-yellow">
                                        { media.icon}
                                    </span>
                                </Link>
                            ))
                        }
                    </div>
                </div>
                <div className="flex flex-col xs:text-center">
                    <Link to="/a-propos">
                        <span className="hover:text-main-yellow">À propos de nous</span>
                    </Link>
                    <Link to="/realisations">
                        <span className="hover:text-main-yellow">Réalisations</span>
                    </Link>
                    <Link to="/expertises">
                        <span className="hover:text-main-yellow">Expertise et services</span>
                    </Link>
                    <Link to="/blog">
                        <span className="hover:text-main-yellow">Blog</span>
                    </Link>
                    <Link to="/contact">
                        <span className="hover:text-main-yellow">Contact</span>
                    </Link>
                </div>                
            </div>
            <hr />
        </footer>
    );
}

export default Footer;

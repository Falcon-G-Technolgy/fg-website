import { NavLink } from "react-router-dom";
import MainCTA from "../other/mainCTA";

import { motion } from "framer-motion";

const sidebarVariant = {
    initial: { opacity: 0, x: -5 },
    animate: { opacity: 1, x: 0, transition: { delay: 2 } }
}
const SideBar = ({sideBar}: { sideBar: boolean}) => {
    return (
        <motion.div variants={sidebarVariant} initial="initial" animate="animate"
        className={ sideBar ? 'bg-black fixed top-0 left-0 h-screen w-64 tablet:w-3/4 bg-opacity-95 py-10 px-2 tablet:px-4' : 'hidden' } >
            <div  className="flex items-center gap-2 px-4 py-5 ">
                <img src="/logotype-fg.PNG" alt="Logo unique Group" className="size-8"/>
                <h1 className="text-white font-bold sm:text-3xl">Falcon G Technology</h1> 
            </div>
            <div className="flex flex-col px-4 gap-40">
                <div className="text-white text-[18px] flex flex-col gap-5 ">
                    <NavLink to="/">
                        <span>Accueil</span>
                    </NavLink>
                    <NavLink to="/a-propos">
                        <span>À propos de nous</span>
                    </NavLink>
                    <NavLink to="/realisations">
                        <span>Réalisations</span>
                    </NavLink>
                    <NavLink to="/expertises">
                        <span>Expertises</span>
                    </NavLink>
                    <NavLink to="/blog">
                        <span>Blog</span>
                    </NavLink>
                    <NavLink to="/contact">
                        <span>Contact</span>
                    </NavLink>
                </div>
                <div>
                    <MainCTA linkText="Nous contacter" to="/contact" style="bg-main-yellow text-black w-full hover:bg-gray-900 px-5 py-3 rounded-md text-center"/>
                </div>
            </div>
        </motion.div>
    );
}

export default SideBar;

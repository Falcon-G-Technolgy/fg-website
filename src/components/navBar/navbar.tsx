import { Link } from "react-router-dom";
import Onglets from "./components/onglets";
import MainCTA from "../other/mainCTA";
import SidebarButton from "../sideBar/sidebarButton";
import SideBar from "../sideBar/sideBar";
import { useState } from "react";

export interface sideBarType {
    sideBar: boolean,
    setSidebar : VoidFunction
}

const Navbar = () => {
    const [sidebar, setSidebar] = useState (false)
    const showOrHidde = () => {
        setSidebar (!sidebar)
    }
    return (
        <header>
            <div className="w-full bg-white h-6 z-40 fixed"/>
            <nav className="bg-main-black xs:py-2 py-3 px-4 sm:px-8 fixed top-5 w-full z-30 flex items-center justify-between text-white">
                <Link to="/">
                    <picture>
                        <source srcSet="/web-pics/logotype-fg.webp" type="image/webp" />
                        <img className="size-12 sm:size-14" src="/logotype-fg.PNG" alt="Falcon G Technology" />
                    </picture>                
                </Link>
                <div className="hidden desktop:flex items-center gap-12 ">
                    <Onglets/>
                    <MainCTA to="" linkText="Commander un logiciel"/>
                </div>
                <SidebarButton setSidebar={showOrHidde} />
                <SideBar sideBar={sidebar} />
            </nav>            
        </header>

    );
}

export default Navbar;

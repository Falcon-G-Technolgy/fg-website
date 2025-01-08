import { Link } from "react-router-dom";
import Onglets from "./components/onglets";
import MainCTA from "../other/mainCTA";

const Navbar = () => {
    return (
        <header>
            <div className="w-full bg-white h-6 z-30 "/>
            <nav className="bg-main-black xs:py-2 py-3 xs:px-4 sm:px-8 fixed w-full z-30 flex items-center justify-between text-white">
                <Link to="/">
                    <picture>
                        <source srcSet="/web-pics/logotype-fg.webp" type="image/webp" />
                        <img className=" xs:size-12 size-14" src="/logotype-fg.PNG" alt="Falcon G Technology" />
                    </picture>                
                </Link>
                <div className="flex items-center gap-12">
                    <Onglets/>
                    <MainCTA to="" linkText="Commander un logiciel"/>
                </div>
            </nav>            
        </header>

    );
}

export default Navbar;

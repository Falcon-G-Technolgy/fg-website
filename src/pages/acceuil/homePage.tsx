import Navbar from "../../components/navBar/navbar";
import HeroSection from "./components/heroSection/heroSection";

const HomePage = () => {
    return (
        <>
            <Navbar/>
            <div className="relative top-16 sm:static ">
                <HeroSection/>
            </div>
        </>
    );
}

export default HomePage;

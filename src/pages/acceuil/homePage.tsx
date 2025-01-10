import Navbar from "../../components/navBar/navbar";
import HeroSection from "./components/heroSection/heroSection";

const HomePage = () => {
    return (
        <>
            <Navbar/>
            <div className="relative top-20 sm:top-24 ">
                <HeroSection/>
            </div>
        </>
    );
}

export default HomePage;

import React from "react";
import Navbar from "../../components/navBar/navbar";

const LazyeHeroSection = React.lazy (() => import ('./components/heroSection/heroSection'))
const LazySection2 = React.lazy (() => import ('./components/section-2/section2'))
const HomePage = () => {
    return (
        <>
            <Navbar/>
            <div className="relative top-20 sm:top-24 ">
                <LazyeHeroSection/>
                <LazySection2/>
            </div>
        </>
    );
}

export default HomePage;

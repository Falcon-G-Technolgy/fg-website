import React from "react";
import MainContent from "./components/mainContent";

const LazySectionImage = React.lazy (() => import ('./components/sectionImage'))
const HeroSection = () => {
    return (
        <section className="bg-main-yellow sm:h-[36rem] flex items-center sm:justify-between flex-col sm:flex-row  pt-24 sm:pt-0 ">
            <MainContent/>
            <LazySectionImage/>
        </section>
    );
}

export default HeroSection;

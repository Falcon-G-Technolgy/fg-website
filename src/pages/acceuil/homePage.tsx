import React from "react";
import Navbar from "../../components/navBar/navbar";

const LazyeHeroSection = React.lazy (() => import ('./components/heroSection/heroSection'))
const LazySection2 = React.lazy (() => import ('./components/section-2/section2'))
const LazySection3 = React.lazy (() => import ('./components/section-3/section3'))
const LazySection4 = React.lazy (() => import ('./components/section-4/section4'))
const LazySection5 = React.lazy (() => import ('./components/section-5/section5'))
const LazySection6 = React.lazy (() => import ('./components/section-6/section6'))
const LazySection7 = React.lazy (() => import ('./components/section-7/section7'))
const HomePage = () => {
    return (
        <>
            <Navbar/>
            <div className="relative top-20 tablet:top-10 desktop:top-24 ">
                <LazyeHeroSection/>
                <LazySection2/>
                <LazySection3/>
                <LazySection4/>
                <LazySection5/>
                <LazySection6/>
                <LazySection7/>
            </div>
        </>
    );
}

export default HomePage;

import MainContent from "./components/mainContent";
import { motion } from "framer-motion";

const imgVariant = {
    initial: {
        opacity: 0,
        x: 20
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 1
        }
    }
}
const HeroSection = () => {
    return (
        <section className="bg-main-yellow h-[36rem] flex items-center sm:justify-between flex-col sm:flex-row pt-8 sm:pt-0 ">
            <MainContent/>
            <motion.img 
            className="w-96"
            variants={imgVariant} initial="initial" animate="animate"
            src="/section-hero.jpg" alt="Homme s'envolant avec joie avec la technologie" />
        </section>
    );
}

export default HeroSection;


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
    },
    hover: {
        x: -50,
        y: 20,
        transition: {
            duration: 2
        }
    }
}
const SectionImage = () => {
    return (
        <div>
            <motion.img 
            className="w-96"
            variants={imgVariant} initial="initial" whileInView="animate" whileHover="hover" whileFocus ="hover"
            src="/section-hero.png" loading="lazy" alt="Homme s'envolant avec joie avec la technologie" />
        </div>
    );
}

export default SectionImage;


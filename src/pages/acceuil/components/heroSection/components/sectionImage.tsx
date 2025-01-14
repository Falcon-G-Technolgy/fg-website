
import { motion } from "framer-motion";

const imgVariant = {
    initial: {
        opacity: 0,
        x: 10
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 1
        }
    },
    hover: {
        y: -20,
    }
}
const SectionImage = () => {
    return (
        <div>
            <motion.img 
            className="w-96"
            variants={imgVariant} initial="initial" animate="animate" whileHover="hover"
            src="/section-hero.png" loading="lazy" alt="Homme s'envolant avec joie avec la technologie" />
        </div>
    );
}

export default SectionImage;


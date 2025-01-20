import { motion } from "framer-motion"

interface ItemType {
    img: string,
    title: string,
    description: string
}

const cardVariant = {
    initial: { opacity: 0, x: -10 },
    inView: { opacity: 1, x: 0 },
    hover: { y: -5 }
}
const ItemCard = ({ img, title, description }: ItemType) => {
    return (
        <motion.div 
        variants={cardVariant} initial="initial" whileInView="inView" whileHover="hover"
        className="container bg-main-black rounded-md shadow-lg" >
            <div className="h-40 bg-cover rounded-ss-md " style={{ backgroundImage: `url(${img})`}} />
            <div className="p-4 text-main-white">
                <h1 className="text-main-yellow font-medium mb-2"> {title} </h1>
                <p> {description} </p>
            </div>
        </motion.div>
    );
}

export default ItemCard;

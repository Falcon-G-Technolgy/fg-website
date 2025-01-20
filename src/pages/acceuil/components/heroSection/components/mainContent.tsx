import MainCTA from "../../../../../components/other/mainCTA";
import ItemList from "./itemList";

import { motion } from "framer-motion";

const MainContent = () => {
    const offerList = [
        'Obtenez un logiciel taillé sur mesure pour vos activités',
        'Obtenez un site web qui vous reflète et ramène des prospects à votre marque',
        'Obtenez une identité visuelle pour renforcer l’image de marque de votre entreprise'
    ]
    return (
        <div className="content-center px-4 sm:pl-8  ">
            <div className="mb-4 flex flex-col gap-3">
                <motion.h1
                initial={{opacity: 0, x: -20}} animate={{opacity: 1, x: 0, transition: {delay: 1}}}
                className=" text-[2.5rem] leading-tight sm:text-[3rem] font-bold sm:w-[50rem] mb-2 text-black">Envolez-vous dans l’univers technologique et digital pour booster votre <strong className="text-white bg-black px-4">business</strong> !</motion.h1>
                
                <motion.h2 
                initial={{opacity: 0, x: -20}} animate={{opacity: 1, x: 0, transition: {delay: 1.5}}}
                className="text-2xl font-medium text-main-black mb-2 opacity-85">Alors, prêt à embarquer ?</motion.h2>                
            </div>

            <motion.ul
            initial={{opacity: 0, y: -20}} animate={{opacity: 1, y: 0, transition: {delay: 2}}}
            className="flex flex-col gap-2">
                {
                    offerList.map ((offer, key) => <ItemList key={key} offer={offer}/>)
                }
            </motion.ul>
            <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.5 }} animate={{ opacity: 1, y: 0,scale:1 , transition: {delay: 2.5}}}
            className="text-white relative top-7 flex flex-col sm:flex-row gap-7  sm:gap-3 z-10 ">
                <MainCTA to="" linkText="Commander un logiciel" style="bg-black hover:bg-gray-900 px-5 py-3 rounded-md text-center"/>
                <MainCTA to="" linkText="Nous contacter" style="bg-main-blue hover:bg-blue-900 px-5 py-3 rounded-md text-center"/>
            </motion.div>
        </div>
    );
}

export default MainContent;

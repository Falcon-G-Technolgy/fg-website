import React from "react";
import MainCTA from "../../../../components/other/mainCTA";
const LazyImage = React.lazy (() => import ('./components/sectionImage'))
const LazySectionParagraph = React.lazy (() => import ('../../../../components/other/sectionParagraph'))
const LazySerciceList = React.lazy (() => import ('./components/servicesList'))

const Section2 = () => {
    return (
        <section className=" xs:px-8 tablet:px-8 px-24 xs:py-2 xs:pb-10 py-16 flex xs:flex-col gap-5">
            <div className="flex flex-col gap-4 xs:w-full w-3/4 py-10 ">
                <LazySectionParagraph text="Procurez-vous un logiciel conçu pour gérer vos tâches répétitives et simplifier votre gestion grâce à nos solutions personnalisées, le tout à des tarifs très compétitifs !" />
                <p className="text-xl text-balance ">Nous contribuons a la digitalisation de votre entreprise en vous offrant:</p>
                <LazySerciceList/>
                <div className="mt-5">
                   <MainCTA to="" linkText="J'ai besoin d'un logiciel" bgColor="blue-800"/> 
                </div>
            </div>
            <div className="xs:w-full w-1/4">
                <LazyImage img="/images/section-2.jpg"/>
            </div>
        </section>
    );
}

export default Section2;

import MainCTA from "../../../../components/other/mainCTA";
import TextMarked from "../../../../components/other/textMarked";
import FeaturesSection from "./components/featureSection";

const Section6 = () => {
    return (
        <section className="bg-main-yellow flex flex-col py-10 px-8 items-center">
            <TextMarked text="Notre approche" style="text-2xl text-white py-1 bg-main-blue px-5"/> 
            <div className="hidden tablet:block mt-5">
                <p>Notre philosophie repose sur une collaboration étroite avec nos clients pour comprendre leurs besoins spécifiques et offrir des solutions agiles, adaptables et scalable</p>
                <p>Nous avons comme valeur :</p>            
            </div>
            <div className="flex xs:flex-col items-center tablet:mt-5">
                <img src="/images/img-section-6.png" className=" xs:w-[60rem]" alt="" />
                <div className="flex flex-col gap-5 xs:text-center ">
                    <p className="tablet:hidden">Notre philosophie repose sur une collaboration étroite avec nos clients pour comprendre leurs besoins spécifiques et offrir des solutions agiles, adaptables et scalable</p>
                    <p className="tablet:hidden">Nous avons comme valeur :</p>
                    <FeaturesSection/>
                    <MainCTA to="" linkText="Je veux en savoir plus" style="bg-main-blue text-white hover:bg-blue-900 px-5 py-3 rounded-md text-center" />
                </div>
            </div>
        </section>
    );
}

export default Section6;

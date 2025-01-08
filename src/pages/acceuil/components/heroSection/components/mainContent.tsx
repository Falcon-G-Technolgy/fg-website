import MainCTA from "../../../../../components/other/mainCTA";
import ItemList from "./itemList";

const MainContent = () => {
    const offerList = [
        'Obtenez un logiciel taillé sur mesure pour vos activités',
        'Obtenez un site web qui vous reflète et ramène des prospects à votre marque',
        'Obtenez une identité visuelle pour renforcer l’image de marque de votre entreprise'
    ]
    return (
        <div className="content-center px-4 sm:pl-8  ">
            <h1 className=" text-3xl leading-tight sm:text-[2.5rem] font-semibold sm:w-[50rem] mb-2">Envolez-vous dans l’univers technologique et digital pour booster votre <strong className="text-white bg-black px-4">business</strong> !</h1>
            <h2 className="text-2xl font-medium opacity-90 mb-2">Alors, prêt à embarquer ?</h2>
            <ul className="flex flex-col gap-2">
                {
                    offerList.map ((offer, key) => <ItemList key={key} offer={offer}/>)
                }
            </ul>
            <div className="text-white relative top-7 flex gap-3 ">
                <MainCTA to="" linkText="Commander un logiciel" color="bg-main-black"/>
                <MainCTA to="" linkText="Nous contacter" color="bg-main-blue"/>
            </div>
        </div>
    );
}

export default MainContent;

import MainCTA from "../../../../components/other/mainCTA";
import TextMarked from "../../../../components/other/textMarked";
import ItemList from "./components/itemList";

const itemList = [
    { firstText: 'Creation des ', markedText: 'sites web' },
    { firstText: 'Le ', markedText: 'UI / UX design' },
    { firstText: 'Des ', markedText: 'supports marketings' },
    { firstText: 'Des ', markedText: 'Montages videos' },
    { firstText: 'Le ', markedText: 'Motion design' },
    { firstText: 'Des ', markedText: 'Brandings et visuels' },
]
const Section3 = () => {
    return (
        <section className="bg-main-yellow flex flex-col gap-8 items-center py-10 xs:px-8 tablet:px-8 px-24">
            <h1 className="flex xs:flex-col tablet:flex-row xs:w-full gap-2 text-2xl xs:text-3xl text-gray-900 font-semibold">
            Vous avez besoin d'une <TextMarked text="Identité visuelle" style="px-2 py-1 rotate-45 text-white bg-main-blue" /> propre à vous ! 
            </h1>
            <div className="flex xs:flex-col gap-5">
                <img className="sm:w-2/4 rounded-lg  "
                src="/images/section-3.jpg" loading="lazy" alt="Obtenez une identite visuel propre a vous!" />
                <div className="flex flex-col gap-4">
                    <div className="text-[1.20rem]">
                        <h2 >Nous offrons des services de création visuelle pour aider nos clients à se démarquer avec des designs modernes et impactant.</h2>
                        <p>Cela inclut notament:</p>                        
                    </div>
                    <ul className="flex flex-col gap-3 mb-5">
                        {
                            itemList.map ((item, key) => <ItemList key={key} firstText={item.firstText} textMarked={item.markedText} />)
                        }
                    </ul>
                    <MainCTA to="" linkText="Commander un design" style="bg-main-blue text-white hover:bg-blue-900 px-5 py-3 rounded-md text-center"/>
                </div>
            </div>
        </section>
    );
}

export default Section3;

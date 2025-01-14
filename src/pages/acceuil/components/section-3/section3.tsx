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
        <section className="bg-main-yellow flex flex-col gap-8 items-center py-10 xs:px-8 sm:px-24">
            <h1 className="flex xs:flex-col xs:w-full gap-2 text-2xl xs:text-3xl text-gray-900 font-semibold">
            Vous avez besoin d'une<TextMarked text="Identité visuelle"/> propre à vous ! 
            </h1>
            <div className="flex xs:flex-col gap-5">
                <img className="sm:w-2/4 rounded-lg  "
                src="/images/section-3.jpg" loading="lazy" alt="Obtenez une identite visuel propre a vous!" />
                <div>
                    <div className="text-xl">
                        <h2>Nous offrons des services de création visuelle pour aider nos clients à se démarquer avec des designs modernes et impactant.</h2>
                        <p>Cela inclut notament:</p>                        
                    </div>
                    <ul className="flex flex-col gap-3">
                        {
                            itemList.map ((item, key) => <ItemList key={key} firstText={item.firstText} textMarked={item.markedText} />)
                        }
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Section3;

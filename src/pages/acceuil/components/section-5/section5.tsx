import ItemCard from "./components/itemCard";

const itemsTable = [
    {
        img: '/images/section-5/item1.jpg',
        title : 'Travail basé sur des missions',
        description: 'Nous nous engageons pour une durée limitée (quelques semaines, mois ou années) afin de répondre à un besoin particulier'
     },    
     {
        img: '/images/section-5/item2.jpg',
        title : 'Expertise spécifique',
        description: 'Nous intervenons dans des domaines précis tels que le développement des logiciels afin d’apporter des solutions que le client ne peut pas gérer en interne'
     },    
     {
        img: '/images/section-5/item3.jpg',
        title : 'Travail en équipe et en autonomie',
        description: 'Selon le projet, nous collaborons avec l’équipe du client, tandis que nous gardons une certaine autonomie dans d’autres cas'
     },
]

const Section5 = () => {
    return (
        <section className="desktop:px-24 py-10 px-8 flex flex-col xs:gap-5 ">
            <div className="flex flex-row-reverse">
                <h1 className="w-2/4 xs:w-full text-[1.20rem] font-medium text-main-black text-right ">Et en plus du développement des solutions sur mesure, nous travaillons en consultance pour aider nos clients à prendre les meilleures décisions en matière du digital</h1>
            </div>
            <div className="flex flex-col gap-10">
                <h2 className="w-2/4 xs:w-full">Notre but est d'apporter une expertise spécifique, de résoudre des problèmes, ou de conduire des projets pour nos clients, avec les caractéristique suivantes:</h2>
                <div className="flex xs:flex-col gap-5">
                    {
                        itemsTable.map ((item, key) => <ItemCard key={key} img={item.img} title={item.title} description={item.description}/>  )
                    }
                </div>
            </div>
        </section>
    );
}

export default Section5;

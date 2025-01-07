import ItemOnglet, { OngletType } from "./itemOnglet";

const Onglets = () => {
    const ongletTable: OngletType[] = [
        {to: '/', ongletName: 'Accueil'},
        {to: '/a-propos', ongletName: 'À propos'},
        {to: '/realisations', ongletName: 'Réalisation'},
        {to: '/expertises', ongletName: 'Expertise'},
        {to: '/blog', ongletName: 'Blog'},
        {to: '/contact', ongletName: 'Contact'},
    ]
    return (
        <div className="flex gap-5 xs:hidden">
            {
                ongletTable.map ((onglet, key) => <ItemOnglet key={key} to={onglet.to} ongletName={onglet.ongletName}/>  )
            }
        </div>
    );
}

export default Onglets;

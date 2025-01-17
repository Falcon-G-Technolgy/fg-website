import MainCTA from "../../../../components/other/mainCTA";

const Section8 = () => {
    return (
        <section className="bg-[url('/images/section-8.png')] h-[35rem] bg-center bg-cover content-center px-24 xs:px-8 ">
            <div className="w-2/4 xs:w-full flex flex-col gap-8">
                <div className=" xs:w-2/4 flex flex-col gap-8">
                    <h1 className="text-3xl text-main-white">Alors, pret a vous envoler dans la digitalisation?</h1>
                    <div className="text-main-white w-3/4 flex flex-col gap-2">
                        <p>Faites appel à notre expertise pour vos besoins en logiciels et support marketing.</p>
                        <p>Ramenez votre business à un autre niveau !</p>                
                    </div>                    
                </div>
                <div>
                    <MainCTA to="" linkText="Prendre contact, c'est gratuit" style="bg-main-blue text-white hover:bg-blue-900 px-5 py-3 rounded-md text-center"/>
                </div>                
            </div>
        </section>
    );
}

export default Section8;

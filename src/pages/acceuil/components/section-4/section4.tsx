const Section4 = () => {
    return (
        <section className=" desktop:px-24 py-10 px-8 "  >
            <h1 className="w-2/4 xs:w-full text-[1.20rem] font-medium text-main-black ">Notre équipe des designers talentueux s’assure que chaque élément visuel soit parfaitement aligné avec les valeurs et l’image de votre entreprise</h1>
            <div className="flex tablet:items-center">
                <img src="/images/img-section-4.png" loading="lazy" className="w-[45rem] relative left-[-45px] desktop:left-16 desktop:top-[-70px] " alt="" />
                <img src="/images/visuels.png" className=" xs:size-40 tablet:size-72 size-96 relative xs:right-36 tablet:right-60 right-24 " alt="" />
            </div>
            
        </section>
    );
}

export default Section4;

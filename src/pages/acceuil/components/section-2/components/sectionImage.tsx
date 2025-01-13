const SectionImage = ({img}: {img: string}) => {
    return (
        <img src={img} alt="" loading="lazy" className="w-72 rounded-lg " />
    );
}

export default SectionImage;

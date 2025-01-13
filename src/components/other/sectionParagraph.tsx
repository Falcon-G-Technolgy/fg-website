interface ParagraphType {
    text: string,
    color?: string,
    direction?: string,
    size?: string
}

const SectionParagraph = ({text, color = 'main-black', direction = 'left', size = '2xl'}: ParagraphType) => {
    return (
        <h3 className={`text-${color} text-${direction} text-${size} font-semibold `}>
            {text}
        </h3>
    );
}

export default SectionParagraph;

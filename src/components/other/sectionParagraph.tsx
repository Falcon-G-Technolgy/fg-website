interface ParagraphType {
    text: string,
    color?: string,
    direction?: string
}

const SectionParagraph = ({text, color = 'main-black', direction = 'left'}: ParagraphType) => {
    return (
        <h3 className={`text-${color} text-${direction} text-xl`}>
            {text}
        </h3>
    );
}

export default SectionParagraph;

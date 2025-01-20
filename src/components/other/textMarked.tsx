type TextMarkedType  = {
    text: string,
    style?: string,
}

const TextMarked = ({text, style}: TextMarkedType) => {
    return (
        <div className="rotate-3 ">
            <mark className={ style ? style : 'px-2 py-1 rotate-45 text-white bg-black '}>
                {text}
            </mark>            
        </div>

    );
}

export default TextMarked;

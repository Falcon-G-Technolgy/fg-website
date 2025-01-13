type TextMarkedType  = {
    text: string,
    color?: string,
    bg?: string
}

const TextMarked = ({text, color = 'white', bg = 'blue-900'}: TextMarkedType) => {
    return (
        <div className="rotate-3 ">
            <mark className={`px-2 py-1 rotate-45 text-${color} bg-${bg} `}>
                {text}
            </mark>            
        </div>

    );
}

export default TextMarked;

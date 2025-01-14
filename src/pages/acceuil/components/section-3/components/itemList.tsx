import ListPoint from "../../../../../components/other/listPoint";
import TextMarked from "../../../../../components/other/textMarked";

type ItemType = {
    firstText: string,
    textMarked: string,
    color?: string
}
const ItemList = ({ firstText, textMarked, color = 'white' }: ItemType) => {
    return (
        <li className="flex gap-2 ">
            <div className="w-5"><ListPoint/></div>
            <p className="text-black opacity-90 flex items-center gap-1 "> {firstText} <TextMarked text={textMarked} color={color} bg="black" /> </p>
        </li>
    );
}

export default ItemList;

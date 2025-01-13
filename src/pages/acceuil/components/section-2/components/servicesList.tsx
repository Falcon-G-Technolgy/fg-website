import ListPoint from "../../../../../components/other/listPoint";
import TextMarked from "../../../../../components/other/textMarked";

const ServicesList = () => {
    return (
        <div>
            <ul className="flex flex-col xs:gap-4 gap-3">
                <li className="flex gap-2 ">
                    <div className="w-5"><ListPoint/></div>
                    <p className="text-black opacity-90 flex items-center gap-1 ">Des logiciel <TextMarked text="Destop" color="black" bg="main-yellow"/> </p>
                </li>

                <li className="flex gap-2 ">
                    <div className="w-5"><ListPoint/></div>
                    <p className="text-black opacity-90 flex items-center gap-1 ">Des apllications <TextMarked text="web et web-mobile"/> </p>
                </li>

                <li className="flex gap-2 ">
                    <div className="w-5"><ListPoint/></div>
                    <p className="text-black opacity-90 flex items-center gap-1 ">Des applications <TextMarked text="Mobiles"  bg="main-black"/> </p>
                </li>
            </ul>
        </div>
    );
}

export default ServicesList;

import ListPoint from "../../../../../components/other/listPoint";
import TextMarked from "../../../../../components/other/textMarked";

const ServicesList = () => {
    return (
        <div>
            <ul className="flex flex-col xs:gap-4 gap-3">
                <li className="flex gap-2 ">
                    <div className="w-5"><ListPoint/></div>
                    <p className="text-black opacity-90 flex items-center gap-1 ">Des logiciel <TextMarked text="Destop" style="px-2 py-1 rotate-45 text-white bg-main-yellow"/> </p>
                </li>

                <li className="flex gap-2 ">
                    <div className="w-5"><ListPoint/></div>
                    <p className="text-black opacity-90 flex items-center gap-1 ">Des apllications <TextMarked text="web et web-mobile" style="px-2 py-1 rotate-45 text-white bg-main-blue" /> </p>
                </li>

                <li className="flex gap-2 ">
                    <div className="w-5"><ListPoint/></div>
                    <p className="text-black opacity-90 flex items-center gap-1 ">Des applications <TextMarked text="Mobiles" /> </p>
                </li>
            </ul>
        </div>
    );
}

export default ServicesList;

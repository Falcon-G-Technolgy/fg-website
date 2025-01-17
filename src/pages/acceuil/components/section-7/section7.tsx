import { FaMicrosoft } from "react-icons/fa";
import { SiMeta, SiUber, SiVodafone } from "react-icons/si";

const Section7 = () => {
    return (
        <section className="px-24 xs:px-8 py-10">
            <h1 className="text-main-black text-2xl font-medium ">Ils ont décidé de nous faire confiance...</h1>
            <div className="flex items-center gap-5 overflow-hidden justify-around ">
                <SiUber className="size-20"/>
                <SiVodafone className="size-12 text-red-700"/>
                <SiMeta className="size-16 text-blue-700"/>
                <FaMicrosoft className="size-14"/>
            </div>
        </section>
    );
}

export default Section7;

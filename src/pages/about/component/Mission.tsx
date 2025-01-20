import MainCTA from "../../../components/other/mainCTA"
import TextMarked from "../../../components/other/textMarked"
import { mission } from "../constante/data"
const Mission = () => {
  return (
    <div className="px-10 mt-5 flex flex-col items-center gap-10">
        <div>
          <TextMarked text="Quelle est Notre mission ?" style="px-2 desktop:px-5 py-1 bg-main-yellow text-2xl text-black font-medium "/>
        </div>
        <div className="flex sm:justify-center sm:gap-16 xs:flex-col xs:items-center xs:gap-5">
          <img src="/images/about-page/about-3.png" loading="lazy" className="w-60" />
          <div className="flex flex-col xs:text-center gap-10 w-5/12 xs:w-full pt-5">
            <p className="text-lg ">{mission.p1}</p>
            <p className="text-lg ">{mission.p2}</p>
            <MainCTA to="" linkText="Contacter notre equipe"/>
          </div>
        </div>
    </div>
  )
}

export default Mission

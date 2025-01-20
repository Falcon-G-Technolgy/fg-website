import TextMarked from "../../../components/other/textMarked"
import { aboutUs } from "../constante/data"
const QuiNousSomme = () => {
  return (
    <div className="px-8 py-10 flex xs:gap-5 tablet:gap-8 flex-col items-center justify-center">
        <div>
          <TextMarked text="Qui Somme Nous ?" style="px-5 py-1 bg-main-yellow text-2xl text-black font-medium "/>
        </div>
        <div className="flex xs:flex-col items-center xs:gap-5 justify-around">
            <div className="flex flex-col xs:text-center gap-10 w-5/12 xs:w-full pt-5 max-md:w-full">
                <p>{aboutUs.p1}</p>
                <p>{aboutUs.p2}</p>
            </div>
            <div className="size-[20rem] xs:size-60">
                <img src="../../logotype-fg.PNG" loading="lazy" alt="Logo FG tech" />
            </div>
        </div>
    </div>
  )
}

export default QuiNousSomme
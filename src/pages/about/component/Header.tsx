
import TextMarked from "../../../components/other/textMarked"
import { aboutData } from "../constante/data"

const {titre,span,description} = aboutData
const Header = () => {
  return (
    
    <div className='relative flex flex-col desktop:flex-row h-screen xs:h-[60rem] tablet:h-[85rem] desktop:justify-between justify-normal bg_about pt-10 sm:pt-24 xs:px-8 sm:px-16'>
       
       <div className="flex flex-col w-7/12 xs:w-full text-white xl:w-6/12 mt-10 pt-14 lg:w-7/12 lg:mt-2 md:w-full" >
           <div className="flex flex-col mt-10 desktop:w-[50rem] w-full">
               <h1 className="text-5xl font-bold text-white tablet:text-center" >{titre}</h1>
               <div className="flex tablet:justify-center my-7 gap-2 text-3xl items-center">
                  <TextMarked text={span} style="px-5 py-1 bg-[#FBA200] text-5xl text-black font-bold "/>
                  <p className="text-6xl font-bold text-white relative top-2">!</p>
                </div>
                <p className="text-xl mt-4 desktop:w-3/4 xs:w-full xs:text-center tablet:text-center">{description}</p>
            </div>
       </div>
       <div className="relative size-[25rem] xs:size-80 tablet:size-[39rem] "> 
         <img src="/images/about-page/hero-about-page.png" loading="lazy" alt="" className="object-cover" />
       </div>
    </div>
  )
}

export default Header
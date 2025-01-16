
import { aboutData } from "../constante/data"

const {titre,span,description} = aboutData
const Header = () => {
  return (
    
    <div className='relative flex  w-screen h-screen justify-between bg_about pt-24 px-20 max-md:flex-col  '>
       <div className="flex flex-col w-7/12 text-white xl:w-6/12 mt-10 pt-14 lg:w-7/12 lg:mt-2 md:w-full" >
           <div className="flex flex-col max-w-6xl mt-10">
               <h1 className="text-6xl font-bold text-white lg:text-5xl" >{titre}</h1>
               <div className="flex my-4 text-3xl items-center">
                  <p className="bg-[#FBA200] rotate-1 w-auto py-1 px-1 mr-2 ">
                       <span className="text-4xl -rotate-3 text-black font-bold">{span}</span>
                  </p>
                  <span className="font-medium text-3xl ">!</span>
                </div>
                <p className="text-xl mt-4">{description}</p>
            </div>
       </div>
       <div className="relative size-[36%] "> 
         <img src="../../hero-about-page.png" alt="" className="object-cover" />
       </div>
    </div>
  )
}

export default Header
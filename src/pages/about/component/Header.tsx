import { aboutData } from "../constante/data"

const {titre,span,description} = aboutData
const Header = () => {
  return (
    <div className='relative flex w-screen h-screen justify-between bg_about pt-24 px-20 '>
        <div className="flex flex-col w-6/12 text-white mt-10 pt-14 lg:w-7/12 lg:mt-2 max-lg:w-full" >
            <div className="flex flex-col max-w-6xl mt-10">
                <h1 className="text-5xl font-bold text-white">{titre}</h1>
                <div className="flex my-3 text-3xl items-center">
                 <p className="bg-[#FBA200] rotate-1 w-auto py-1 px-1 mr-2 ">
                    <span className="text-4xl -rotate-3 text-black font-bold">{span}</span> 
                </p>
                   <span className="font-medium text-3xl ">!</span>
                </div>
                 
            </div>
                <p className="text-xl mt-4">
                  {description}
                </p>
        </div>
        <div className="relative size-[36%]">
        <img src="../../hero-about-page.png" alt="" className="object-cover" />
        </div>
        
    </div>
  )
}

export default Header
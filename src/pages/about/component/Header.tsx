import { div, title } from "framer-motion/client"
import { aboutData } from "../constante/data"

const {titre,span,description} = aboutData
const Header = () => {
  return (
    <div className='relative flex w-screen h-screen px-16 pt-24 mt-10 bg_about'>
        <div className="flex flex-col text-white ">
            <div className="flex flex-col">
                <h1 className="text-5xl font-bold text-white">{titre}</h1>
                <div>
                 <p className="bg-[#FBA200] rotate-3 w-3/6 py-2 px-2">
                    <span className="text-5xl rotate-0">{span}</span>
                </p>
                !    
                </div>
                
            </div>
            <p>
                {description}
            </p>
        </div>
    </div>
  )
}

export default Header
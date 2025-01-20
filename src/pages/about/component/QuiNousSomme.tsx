import { aboutUs } from "../constante/data"
const QuiNousSomme = () => {
  return (
    <div className="px-16">
        <div className='w-full flex items-center justify-center mt-10 mb-20'>
           <p className="bg-[#FBA200] rotate-1  py-1 px-1 mr-2 w-auto ">
              <span className="text-2xl -rotate-3 text-black font-medium">Qui Somme Nous ?</span>
           </p>
        </div>
        <div className="flex justify-around">
            <div className="flex flex-col gap-10 w-5/12 pt-5 max-md:w-full">
                <p>
                  {aboutUs.p1}
                </p>
                <p>
                    {aboutUs.p2}
                </p>
            </div>
            <div className="size-[20rem]">
                <img src="../../logotype-fg.PNG" alt="" />
            </div>
        </div>
    </div>
  )
}

export default QuiNousSomme
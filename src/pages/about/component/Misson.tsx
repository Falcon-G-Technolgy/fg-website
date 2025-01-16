import { misson } from "../constante/data"
const Misson = () => {
  return (
    <div className="px-10 mt-5">
      <div className='w-full flex items-center justify-center mt-10 mb-20'>
           <p className="bg-[#FBA200] rotate-1  py-1 px-1 mr-2 w-auto ">
              <span className="text-2xl -rotate-3 text-black font-medium">Quelle est Notre mission ?</span>
           </p>
        </div>
        <div className="flex px-10">
            <div className="size-6/12">
               <img src="../../femme-avec-pc-1.jpg" alt="" />
            </div>
            <div className="flex flex-col items-start gap-10 w-5/12 pt-5">
                <p className="text-lg ">{misson.p1}</p>
                <p className="text-lg ">{misson.p2}</p>
                <button className="bg-[#FBA200] px-4 py-2 rounded-lg">Contacter notre equipe</button>
            </div>
        </div>
    </div>
  )
}

export default Misson

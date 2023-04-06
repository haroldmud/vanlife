import { useEffect } from "react";
import { useState } from "react"
import Footer from "./components/Footer"
import './server'

export default function Vans(){
  const [Vans, setVans] = useState([]);
  const [loads, setLoads] = useState(true);

  useEffect(()=>{
    const fetchVans = async()=>{
      try{
        const response = await fetch('/api/vans');
        const vanData = await response.json();
        setVans(vanData.vans);
        setLoads(false);
      }catch(error){
        console.error(error);
        setLoads(false);
      }
    }
    fetchVans();
    return ()=>{fetchVans()}
  },[])
  console.log(Vans)
  

  return(
    <section>
      {loads ? (<div className="h-[100vh] flex flex-col justify-center"><p className="mx-auto  w-fit">Loading...</p></div>)
      : Vans ? (
      <div className="mb-12 px-4">
        <h2 className="font-bold text-3xl">Explore our van options</h2>
        <div className="flex gap-3 text-[13px] mt-6 text-gray-600">
          <button className="bg-[#ffead0] w-fit px-4 rounded-sm">simples</button>
          <button className="bg-[#ffead0] w-fit px-4 rounded-sm">Luxury</button>
          <button className="bg-[#ffead0] w-fit px-4 rounded-sm">Rugged</button>
          <button className="pl-2 underline">clear filters</button>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-6">
          {Vans?.map((item,idx)=><div key={idx} className="w-[95%] mx-auto">
            <img className="object-cover rounded-md " src={item.imageUrl} alt="Van" />
            <div className="flex justify-between mt-2">
              <div className="flex flex-col gap-2 ">
                <p className="font-bold">{item.name}</p>
                <button className={`bg-[#e17654] text-[#ffead0] font-semibold w-fit px-4 py-1 rounded-sm`}>{item.type}</button>
              </div>
              <div>
                <p className="font-bold">${item.price}</p>
                <p className="text-[12px] font-semibold text-end">/day</p>
              </div>
            </div>
          </div>)

          
          }
        </div>
      </div>
      )
    :(<div className="h-[100vh] flex flex-col justify-center"><p className="mx-auto  w-fit">NO DATA AVAILABLE</p></div>)
    }
      <Footer/>
    </section>
  )
}

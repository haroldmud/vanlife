import { useEffect, useState } from "react";
import { useLoaderData, useLocation } from "react-router-dom"

export default function Login(){
  const location = useLocation();
  const logging = useLoaderData();
  const [isShown, setIsShown] = useState(true);

  useEffect(()=>{
    const holdIsShown =setTimeout(()=>{
      setIsShown(state => !state);
    }, 5000)

    return()=> {clearTimeout(holdIsShown)}
  },[])

  return(
    <div className="mt-12">
      <h1 className="text-center font-bold text-2xl">Sign in to your account</h1>
      {
        location.state && !logging && <h2 className={`${isShown ? "text-center text-red-800 font-bold" : "text-transparent"} mt-4`}>{location.state.message}</h2>
      }
      <form className="flex flex-col w-10/12 mx-auto mt-16 ">
        <input className="border pl-4 py-2 outline-none" placeholder="Email address" type="text" />
        <input className="border pl-4 py-2 outline-none" placeholder="Password" type="password" />
        <button className="py-2 text-white font-bold bg-[#FF8C38] mt-8">Sign in</button>
      </form>

      <div className="mt-12 mb-20">
        <p className="text-center">Don't have an account? <span className="text-[#FF8C38]"><button>Create one now</button></span></p>
      </div>
    </div>
  )
}

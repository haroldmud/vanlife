import { useEffect, useState } from "react";
import { useLoaderData, useLocation } from "react-router-dom"
import { loginUser } from "../api";

export default function Login(){
  const location = useLocation();
  const logging = useLoaderData();
  const [isShown, setIsShown] = useState(true);
  const [loginFormData, setLoginFormData] = useState({email:"", password:""});
  const [email, setEmail] =useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event){
    event.preventDefault();
    setLoginFormData({email:email, password:pass})
    
  }

   useEffect(()=>{
    async function holdLogin(){
      try{
        await loginUser(loginFormData);
        
      }catch(err){
        setError(true)
      }
    }
    holdLogin();
    return()=>{holdLogin()}
  },[loginFormData])

  function handleEmail(event){
    setEmail(event.target.value)
  }

  function handlePass(event){
    setPass(event.target.value)
  }

  useEffect(()=>{
    const handleError=setTimeout(()=>{
      if(Error){
        setError(false)
      }
    }, 5000)
    return()=>{clearTimeout(handleError)}
  },[submitted])

  useEffect(()=>{
    const holdIsShown =setTimeout(()=>{
      setIsShown(state => !state);
    }, 3000)

    return()=> {clearTimeout(holdIsShown)}
  },[])

  return(
    <div className="mt-12">
      <h1 className="text-center font-bold text-2xl">Sign in to your account</h1>
      {
        location.state && !logging && <h2 className={`${isShown ? "text-center text-red-800 font-bold" : "text-transparent"} mt-4`}>{location.state.message}</h2>
      }
      <form onSubmit={(e)=>{handleSubmit(e);setSubmitted(true)}} className="flex flex-col w-10/12 mx-auto mt-16 ">
        <input onChange={(e)=> handleEmail(e)} className="border pl-4 py-2 outline-none" placeholder="Email address" type="text" />
        <input onChange={(e)=> handlePass(e)} className="border pl-4 py-2 outline-none" placeholder="Password" type="password" />
        <button className="py-2 text-white font-bold bg-[#FF8C38] mt-8">Sign in</button>
      </form>
      <p className={`${error  && submitted ?"text-red-500": "text-transparent"  } text-center mt-2`}>No user with those credentials found!</p>
      <div className="mt-12 mb-20">
        <p className="text-center">Don't have an account? <span className="text-[#FF8C38]"><button>Create one now</button></span></p>
      </div>
    </div>
  )
}

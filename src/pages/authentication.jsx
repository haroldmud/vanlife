import { useEffect, useState } from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import { loginUser } from "../api";

export default function Login() {
  const location = useLocation();
  const logging = useLoaderData();
  const [isShown, setIsShown] = useState(true);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    async function holdLogin() {
      try {
        await loginUser({ email: email, password: pass });
      } catch (err) {
        setError(true);
      }
    }
    holdLogin();
  }
  useEffect(()=>{
    const handleError=setTimeout(()=>{
      if(Error && submitted){
        setError(false);
        setSubmitted(false)
      }
    }, 3000)
    return()=>{clearTimeout(handleError)}
  },[submitted])

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handlePass(event) {
    setPass(event.target.value);
  }

  useEffect(()=>{
    const handleError=setTimeout(()=>{
      if(Error && submitted){
        setError(false);
        setSubmitted(false)
      }
    }, 3000)
    return()=>{clearTimeout(handleError)}
  },[submitted])

  useEffect(()=>{
    const holdIsShown =setTimeout(()=>{
      setIsShown(state => !state);
    }, 3000)

    return()=> {clearTimeout(holdIsShown)}
  },[])

  return (
    <div className="mt-12">
      <h1 className="text-center font-bold text-2xl">
        Sign in to your account
      </h1>
      {location.state && !logging && (
        <h2
          className={`${
            isShown ? "text-center text-red-800 font-bold" : "text-transparent"
          } mt-4`}
        >
          {location.state.message}
        </h2>
      )}
      <form
        onSubmit={(e) => {
          handleSubmit(e);
          setSubmitted(true);
        }}
        className="flex flex-col w-10/12 mx-auto mt-16 "
      >
        <input
          onChange={(e) => handleEmail(e)}
          className="border pl-4 py-2 outline-none"
          placeholder="Email address"
          type="text"
        />
        <input
          onChange={(e) => handlePass(e)}
          className="border pl-4 py-2 outline-none"
          placeholder="Password"
          type="password"
        />
        <button className="py-2 text-white font-bold bg-[#FF8C38] mt-8">
          Sign in
        </button>
      </form>
      <p
        className={`${
          error && submitted && email.length > 0 && pass.length > 0
            ? "text-red-500"
            : "text-transparent"
        } text-center mt-2`}
      >
        No user with those credentials found!
      </p>
      <p
        className={`${
          submitted && (email.length === 0 || pass.length === 0)
            ? "text-red-500 text-center"
            : "text-transparent"
        }`}
      >
        No input should be empty
      </p>
      <div className="mt-12 mb-20">
        <p className="text-center">
          Don't have an account?{" "}
          <span className="text-[#FF8C38]">
            <button>Create one now</button>
          </span>
        </p>
      </div>
    </div>
  );
}

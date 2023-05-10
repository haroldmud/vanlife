import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {IoMdContact} from "react-icons/io"
import {RiUserSharedFill} from 'react-icons/ri'
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/loginSlice";

export default function Nav() {
  const location = useLocation();
  const logging = useSelector(prev => prev.login.value)
  const logDispatch = useDispatch();
  function handleLogOut(){
    logDispatch(login(false))
  }
  return (
    <div className="flex justify-between p-4 bg-[#fff7ed]">
      <Link to="/" className={`my-auto font-[1000]`}>
        #VANLIFE
      </Link>
      <div className={`text-[12px] font-bold my-auto flex gap-4`}>
        <Link
          to="/host"
          className={
            `${location.pathname === "/host" ||
            location.pathname === "/host/income" ||
            location.pathname === "/host/list" ||
            location.pathname === "/host/reviews"
              ? "underline-offset-2 underline text-black"
              : "text-[#4d4d4d]"} my-auto`
          }
        >
          Host
        </Link>
        <Link
          to="/about"
          className={
            `${location.pathname === "/about"
              ? "underline-offset-2 underline text-black"
              : "text-[#4d4d4d]" } my-auto`
          }
        >
          About
        </Link>
        <Link
          to="/vans"
          className={
            `${location.pathname === "/vans"
              ? "underline-offset-2 underline text-black"
              : "text-[#4d4d4d]"} my-auto`
          }
        >
          Vans
        </Link>
        { logging ? <button
          onClick={handleLogOut}
          className="hover:text-black hover:border-black text-[#4d4d4d] text-xl border-2 border-[#4d4d4d] rounded-full p-1"
        >
          <RiUserSharedFill/>
        </button>:<Link
          to="/authentication"
          className={`
            ${location.pathname === "/authentication"
              ? "underline-offset-2 underline text-black"
              : "text-[#4d4d4d]"} text-3xl` 
          }
        >
          <IoMdContact/>
        </Link>}
      </div>
    </div>
  );
}

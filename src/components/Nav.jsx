import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation();
  return (
    <div className="flex justify-between p-4 bg-[#fff7ed]">
      <Link to="/" className={` font-[900]`}>
        #VANLIFE
      </Link>
      <div className={`text-[12px] font-bold my-auto flex gap-4`}>
        <Link
          to="/host/dashboard"
          className={
            location.pathname === "/host/dashboard" ||
            location.pathname === "/host/income" ||
            location.pathname === "/host/list" ||
            location.pathname === "/host/reviews"
              ? "underline-offset-2 underline text-black"
              : "text-[#4d4d4d]"
          }
        >
          Host
        </Link>
        <Link
          to="/about"
          className={
            location.pathname === "/about"
              ? "underline-offset-2 underline text-black"
              : "text-[#4d4d4d]"
          }
        >
          About
        </Link>
        <Link
          to="/vans"
          className={
            location.pathname === "/vans"
              ? "underline-offset-2 underline text-black"
              : "text-[#4d4d4d]"
          }
        >
          Vans
        </Link>
      </div>
    </div>
  );
}

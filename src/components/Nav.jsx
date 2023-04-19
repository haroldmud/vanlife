import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation();
  return (
    <div className="flex justify-between p-4">
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
              ? "underline text-black"
              : "text-gray-400"
          }
        >
          Host
        </Link>
        <Link
          to="/about"
          className={
            location.pathname === "/about"
              ? "underline text-black"
              : "text-gray-400"
          }
        >
          About
        </Link>
        <Link
          to="/vans"
          className={
            location.pathname === "/vans"
              ? "underline text-black"
              : "text-gray-400"
          }
        >
          Vans
        </Link>
      </div>
    </div>
  );
}

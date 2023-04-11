import { Routes, Route, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import App from "../App";
import { About } from "../about";
import Vans from "../vans";
import VanDetails from "../vanDetails";

export default function Header() {
  const location = useLocation();

  return (
      
    <section className="max-w-[80rem] xl:w-5/12 lg:w-8/12 h-fit mx-auto">
        <div className="flex justify-between p-4">
          <Link to="/" className={` font-[900]`}>
            #VANLIFE
          </Link>
          <div className={`text-[12px] font-bold my-auto flex gap-4`}>
            <Link
              to="/about"
              className={location.pathname === "/about" ? "underline text-black":"text-gray-400"}
            >
              About
            </Link>
            <Link
              to="/vans"
              className={location.pathname === "/vans" ? "underline text-black":"text-gray-400"}
            >
              Vans
            </Link>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetails/>}/>
        </Routes>
      </section>
  );
}

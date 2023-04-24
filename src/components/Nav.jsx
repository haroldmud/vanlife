import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div className="flex justify-between p-4 bg-[#fff7ed]">
      <NavLink to="/" className={` font-[900]`}>
        #VANLIFE
      </NavLink>
      <div className={`text-[12px] font-bold my-auto flex gap-4`}>
        <NavLink
          to="/host"
          className={({ isActive }) =>
            isActive
              ? "underline-offset-2 underline text-black"
              : "text-[#4d4d4d]"
          }
        >
          Host
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "underline-offset-2 underline text-black"
              : "text-[#4d4d4d]"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/vans"
          className={({ isActive }) =>
            isActive
              ? "underline-offset-2 underline text-black"
              : "text-[#4d4d4d]"
          }
        >
          Vans
        </NavLink>
      </div>
    </div>
  );
}

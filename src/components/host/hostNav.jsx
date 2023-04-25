import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function HostNav() {
  const location = useLocation();
  const vanId = useParams();
  console.log(vanId);
  return (
    <div className="flex gap-4 font-bold bg-[#fff7ed] px-4 py-8 text-[13px]">
      <NavLink
        className={`${
          location.pathname === "/host"
            ? "underline-offset-2 underline"
            : "text-[#4d4d4d]"
        }`}
        to="/host"
      >
        Dashboard
      </NavLink>
      <NavLink
        className={`${
          location.pathname === "/host/income"
            ? "underline-offset-2 underline"
            : "text-[#4d4d4d]"
        }`}
        to="income"
      >
        Income
      </NavLink>
      <NavLink
        className={`${
          location.pathname === "/host/list" ||
          location.pathname === `/host/list/${vanId.id}`
            ? "underline-offset-2 underline"
            : "text-[#4d4d4d]"
        }`}
        to="list"
      >
        Vans
      </NavLink>
      <NavLink
        className={`${
          location.pathname === "/host/reviews"
            ? "underline-offset-2 underline"
            : "text-[#4d4d4d]"
        }`}
        to="reviews"
      >
        Reviews
      </NavLink>
    </div>
  );
}

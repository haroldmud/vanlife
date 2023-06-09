import { Link } from "react-router-dom";
import { useLocation, useParams } from "react-router-dom";

export default function HostNav() {
  const location = useLocation();
  const vanId = useParams();

  return (
    <div className="flex gap-4 font-bold bg-[#fff7ed] px-4 py-8 text-[13px]">
      <Link
        className={`${
          location.pathname === "/host"
            ? "underline-offset-2 underline"
            : "text-[#4d4d4d]"
        }`}
        to="/host"
      >
        Dashboard
      </Link>
      <Link
        className={`${
          location.pathname === "/host/income"
            ? "underline-offset-2 underline"
            : "text-[#4d4d4d]"
        }`}
        to="/host/income"
      >
        Income
      </Link>
      <Link
        className={`${
          location.pathname === "/host/list"||
          location.pathname === `/host/list/${vanId.id}` ||location.pathname === `/host/list/${vanId.id}/price` || location.pathname === `/host/list/${vanId.id}/photo`
            ? "underline-offset-2 underline"
            : "text-[#4d4d4d]"
        }`}
        to="/host/list"
      >
        Vans
      </Link>
      <Link
        className={`${
          location.pathname === "/host/reviews"
            ? "underline-offset-2 underline"
            : "text-[#4d4d4d]"
        }`}
        to="/host/reviews"
      >
        Reviews
      </Link>
    </div>
  );
}

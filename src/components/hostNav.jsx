import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function HostNav() {
  const location = useLocation();
  return (
    <div className="flex gap-4 font-bold">
      <Link
        className={`${location.pathname === "/host/dashboard" && "underline"}`}
        to="/host/dashboard"
      >
        Dashboard
      </Link>
      <Link
        className={`${location.pathname === "/host/income" && "underline"}`}
        to="/host/income"
      >
        Income
      </Link>
      <Link
        className={`${location.pathname === "/host/list" && "underline"}`}
        to="/host/list"
      >
        Vans
      </Link>
      <Link
        className={`${location.pathname === "/host/reviews" && "underline"}`}
        to="/host/reviews"
      >
        Reviews
      </Link>
    </div>
  );
}

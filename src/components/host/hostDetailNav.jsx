import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";

export default function HostDetailNav(props) {
  const location = useLocation();
  return (
    <div>
      <div className="flex gap-4 text-sm font-bold mt-2">
        <Link
          className={`${
            location.pathname === `/host/list/${props.id}`
              ? "underline underline-offset-2"
              : "text-[#4d4d4d]"
          }`}
          to={`/host/list/${props.id}`}
        >
          Details
        </Link>
        <Link
          className={`${
            location.pathname === `/host/list/${props.id}/price`
              ? "underline underline-offset-2"
              : "text-[#4d4d4d]"
          }`}
          to="price"
        >
          Pricing
        </Link>
        <Link
          className={`${
            location.pathname === `/host/list/${props.id}/photo`
              ? "underline underline-offset-2"
              : "text-[#4d4d4d]"
          }`}
          to="photo"
        >
          Photo
        </Link>
      </div>
    </div>
  );
}

import HostNav from "./hostNav";
import { Outlet } from "react-router-dom";

export default function HostLayout() {
  return (
    <div className="max-w-[80rem] md:w-[94%] w-11/12 h-fit mx-auto">
      <HostNav />
      <Outlet />
    </div>
  );
}

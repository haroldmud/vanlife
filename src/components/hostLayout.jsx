import HostNav from "./hostNav";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function HostLayout() {
  return (
    <div className="max-w-[80rem] w-full h-fit mx-auto">
      <HostNav />
      <Outlet />
      <Footer />
    </div>
  );
}

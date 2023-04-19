import { Outlet } from "react-router-dom";
import Nav from "./Nav";

function Layout() {
  return (
    <section className="max-w-[80rem] xl:w-5/12 lg:w-8/12 h-fit mx-auto">
      <Nav />
      <Outlet />
    </section>
  );
}

export default Layout;

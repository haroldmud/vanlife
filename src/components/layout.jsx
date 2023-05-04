import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

function Layout() {
  return (
    <section className="max-w-[80rem] xl:w-5/12 lg:w-8/12 h-[100vh] mx-auto flex flex-col justify-between">
      <div>
      <Nav />
      <Outlet />
      </div>
      <Footer/>
    </section>
  );
}

export default Layout;

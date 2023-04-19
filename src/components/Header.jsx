import { Routes, Route } from "react-router-dom";
import App from "../App";
import { About } from "../pages/about";
import Vans from "../pages/vans";
import VanDetails from "../pages/vanDetails";
import Layout from "./layout";
import Host from "../pages/host/dashboard";
import Income from "../pages/host/income";
import List from "../pages/host/list";
import Review from "../pages/host/reviews";
import HostLayout from "./hostLayout";
import Dashboard from "../pages/host/dashboard";

export default function Header() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetails />} />
        <Route path="/host" element={<Host />}></Route>
        <Route element={<HostLayout />}>
          <Route path="/host/dashboard" element={<Dashboard />} />
          <Route path="/host/income" element={<Income />} />
          <Route path="/host/list" element={<List />} />
          <Route path="/host/reviews" element={<Review />} />
        </Route>
      </Route>
    </Routes>
  );
}

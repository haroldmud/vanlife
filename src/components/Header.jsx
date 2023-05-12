import { Routes, Route } from "react-router-dom"; 
import App from "../App";
import { About } from "../pages/about";
import Vans from "../pages/vans";
import VanDetails from "../pages/vanDetails";
import Layout from "./layout";
import Income from "../pages/host/income";
import List from "../pages/host/list";
import Review from "../pages/host/reviews";
import HostLayout from "./host/hostLayout";
import Dashboard from "../pages/host/dashboard";
import HostVanDetail from "../pages/host/hostDetail/detail";
import HostPhoto from "../pages/host/hostDetail/photo";
import HostPrice from "../pages/host/hostDetail/price";
import HostDescription from "../pages/host/hostDetail/description";

export default function Header() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
        <Route path="about" element={<About />} />
        <Route path="vans" element={<Vans />} />
        <Route path="vans/:id" element={<VanDetails />} />
        <Route path="host" element={<HostLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route path="list" element={<List />} />
          <Route path="reviews" element={<Review />} />
          <Route path="list/:id" element={<HostVanDetail />}>
            <Route index element={<HostDescription />} />
            <Route path="price" element={<HostPrice />} />
            <Route path="photo" element={<HostPhoto />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

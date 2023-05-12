import { Routes, Route } from "react-router-dom";
import App from "../App";
import { About } from "../pages/about";
import Vans from "../pages/vans";
import VanDetails from "../pages/vanDetails";
import Layout from "./layout";
import Income from "../pages/host/income";
import List from "../pages/host/list";
import Review from "../pages/host/reviews";
import HostLayout from "./hostLayout";
import Dashboard from "../pages/host/dashboard";

export default function Header() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index  element={<App />} />
        <Route path="about" element={<About />} />
        <Route path="vans" element={<Vans />} />
        <Route path="vans/:id" element={<VanDetails />} />
        <Route path="host" element={<HostLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route path="list" element={<List />} />
          <Route path="reviews" element={<Review />} />
        </Route>
      </Route>
    </Routes>
  );
}

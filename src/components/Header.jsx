import { Route,createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import App from "../App";
import { About } from "../pages/about";
import Vans, {loader as vansLoader} from "../pages/vans";
import VanDetails from "../pages/vanDetails";
import Layout from "./layout";
import Host from "../pages/host/dashboard";
import Income from "../pages/host/income";
import List from "../pages/host/list";
import Review from "../pages/host/reviews";
import HostLayout from "./hostLayout";
import Unfound from "../pages/404";
import Dashboard from "../pages/host/dashboard";
import Error from './Error';

const instanceRouter = createBrowserRouter(createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route index element={<App />} />
        <Route path="about" element={<About />} />
        <Route path="vans" loader={vansLoader} errorElement={<Error/>} element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetails />} />
        <Route path="/host" element={<Host />}></Route>
        <Route path="/host" element={<HostLayout />}>
          <Route path="/host/dashboard" element={<Dashboard />} />
          <Route path="/host/income" element={<Income />} />
          <Route path="/host/list" element={<List />} />
          <Route path="/host/reviews" element={<Review />} />
        </Route>
        <Route path="*" element={<Unfound/>}/>
      </Route>
))

export default function Header() {
  return (
    <RouterProvider router={instanceRouter}/>
  );
}

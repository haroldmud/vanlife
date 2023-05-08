import { Route,createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import App from "../App";
import { About } from "../pages/about";
import Vans, {loader as vansLoader} from "../pages/vans";
import VanDetails, {loader as vanDetailsLoad} from "../pages/vanDetails";
import Layout from "./layout";
import Income from "../pages/host/income";
import List, {loader as listLoader} from "../pages/host/list";
import Review from "../pages/host/reviews";
import HostLayout from "./hostLayout";
import Unfound from "../pages/404";
import Dashboard from "../pages/host/dashboard";
import Error from './Error';
import Login from '../pages/authentication';
import {loader as loginLoad} from './auth'
import HostVanDetail, {loader as hostDetailLoad} from '../pages/host/hostDetail/detail';
import HostDescription from '../pages/host/hostDetail/description';
import HostPrice from '../pages/host/hostDetail/price';
import HostPhoto from '../pages/host/hostDetail/photo';
import Auth from './auth';

const instanceRouter = createBrowserRouter(createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route index element={<App />} />
        <Route path="about" element={<About />} />
        <Route path="vans" loader={vansLoader} errorElement={<Error/>} element={<Vans />} />
        <Route path="vans/:id" loader={vanDetailsLoad} element={<VanDetails />} />
        <Route path="host" element={<HostLayout />}>
        <Route element={<Auth/>}>
          <Route index element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route path="reviews" element={<Review />} />
        </Route>
          <Route path="list" loader={listLoader} element={<List />} />
          <Route element={<Auth/>}>
          <Route path="list/:id" loader={hostDetailLoad} element={<HostVanDetail />}>
            <Route index element={<HostDescription />} />
            <Route path="price" element={<HostPrice />} />
            <Route path="photo" element={<HostPhoto />} />
          </Route>
          </Route>
        </Route>
        <Route path='authentication' loader={loginLoad} element={<Login/>}/>
        <Route path="*" element={<Unfound/>}/>
      </Route>
))

export default function Header() {
  return (
    <RouterProvider router={instanceRouter}/>
  );
}

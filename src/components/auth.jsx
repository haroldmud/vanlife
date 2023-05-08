import { Navigate, Outlet } from "react-router-dom";

export default function Auth(){
  const isLoggedIn = false;

  if(!isLoggedIn){
    return <Navigate to="/authentication"/>
  }
  return <Outlet/>
}
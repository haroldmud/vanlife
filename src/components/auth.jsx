import { Navigate, Outlet } from "react-router-dom";

export function loader(){
  return false
}

export default function Auth(){
  const isLoggedIn = loader();
  if(!isLoggedIn){
    return <Navigate to="/authentication" state={{message:"You should login first"}}/>
  }
  return <Outlet/>
}

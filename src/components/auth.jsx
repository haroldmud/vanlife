import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";




export default function Auth(){
  const isLoggedIn = useSelector(prev => prev.login.value);
  if(!isLoggedIn){
    return <Navigate to="/authentication" state={{message:"You should login first"}}/>
  }
  return <Outlet/>
}

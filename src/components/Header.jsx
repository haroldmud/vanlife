import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import App from "../App"
import { About } from "../about"
import Vans from "../vans"

export default function Header(){
  return(
    <BrowserRouter>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/vans'>Vans</Link>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/vans" element={<Vans/>}/>
      </Routes>
    </BrowserRouter>
  )
}
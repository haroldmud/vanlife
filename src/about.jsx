import Footer from "./components/Footer"
import { Link } from "react-router-dom"

export function About(){
  return(
    <section className="">
      <img className="w-full" src="/images/image2.png" alt="" />
      <div className="px-4 flex flex-col gap-6 mt-10 mb-4">
        <h2 className="text-3xl font-bold">Don't squeeze in sedan when you could relax in a van</h2>
        <p>
          Our mission is to enliven your road trip with the perfect  travel van rental.
          Our vans are cerified before each trip to ensure your travel plans can go off without
          a hitch. <br />
          (hitch costs extra😉) <br/><br/>
          Our team is full of vanlife enthusiasts who know firstthand the magic of touring the world on 4 wheels.
        </p>
        <div className="bg-[#ffcc8d] rounded-md p-6 flex flex-col gap-4">
          <div className="font-semibold ">
            <p>Your destination is waiting.</p>
            <p>Your van is ready</p>
          </div>
          <Link to='/vans' className="bg-black text-white text-sm font-bold p-2 rounded-md w-fit">Explore our van</Link>
        </div>
      </div>
      <Footer/>
    </section>
  )
}
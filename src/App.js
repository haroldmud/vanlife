import Footer from "./components/Footer"
export default function App() {
  return (
    <section className=" h-[100vh]  mx-auto">
      <div className="relative">
        <img className="h-[100vh] object-cover" src="/images/image1.png" alt="" />
        <div className="top-12 mt-8 absolute w-full px-4 flex flex-col gap-6">
          <h2 className="text-white font-bold text-3xl">You got the travel plans, we got the travel plan</h2>
          <div className="text-white">
          <p>Add adventure to your life by joining  the #vanlife movement.</p>
          <p>Rent the perfect van to make your perfect road trip</p>
          </div>
          <button className="w-full bg-[#ff8c38] rounded-lg py-2 font-bold text-white">Find your van</button>
        </div>
      </div>
      <Footer/>
    </section>
  )
}
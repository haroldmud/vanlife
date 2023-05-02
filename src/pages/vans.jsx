import { useEffect } from "react";
import { useState } from "react";
import Footer from "../components/Footer";
import { Link, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetching } from "../features/vanslice";
import { useLocation } from "react-router-dom";
import "../server";

export default function Vans() {
  const location = useLocation();
  console.log(location)
  const [Vans, setVans] = useState([]);
  const [loads, setLoads] = useState(true);
  const vanLoad = useSelector((prev) => prev.vans.value.van);
  const vanDispatch = useDispatch();
  vanDispatch(fetching(Vans));
  const [searchParams, setSearchParams] = useSearchParams();
  const searchFilter = searchParams.get("type");

  const vanFilter = searchFilter
    ? vanLoad.filter((char) => char.type.toLowerCase() === searchFilter)
    : vanLoad;

  useEffect(() => {
    const fetchVans = async () => {
      try {
        const response = await fetch("/api/vans");
        const vanData = await response.json();
        setVans(vanData.vans);
        setLoads(false);
      } catch (error) {
        setLoads(false);
      }
    };
    fetchVans();
    return () => {
      fetchVans();
    };
  }, []);

  return (
    <section>
      {loads ? (
        <div className="h-[100vh] flex flex-col justify-center">
          <p className="mx-auto  w-fit">Loading...</p>
        </div>
      ) : Vans ? (
        <div className="mb-12 px-4">
          <h2 className="font-bold text-3xl">Explore our van options</h2>
          <div className="flex gap-3 text-[13px] mt-6 text-gray-600">
            <Link
              to="?type=simple"
              className={`${location.search === "?type=simple" ? "bg-[#e17654] text-white" : 'bg-[#ffead0]'}  w-fit px-4 rounded-sm`}
            >
              Simple
            </Link>
            <Link
              to="?type=luxury"
              className={`${location.search === "?type=luxury" ? "bg-black text-white" : 'bg-[#ffead0]'} w-fit px-4 rounded-sm`}
            >
              Luxury
            </Link>
            <Link
              to="?type=rugged"
              className={`${location.search === "?type=rugged" ? "bg-[#115e59] text-white" : 'bg-[#ffead0]'} w-fit px-4 rounded-sm`}
            >
              Rugged
            </Link>
            <button
              onClick={() => setSearchParams({})}
              className="pl-2 underline"
            >
              clear filters
            </button>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-6">
            {vanFilter?.map((item, idx) => (
              <Link to={`/vans/${idx}}`} key={idx} className="w-[95%] mx-auto">
                <img
                  className="object-cover rounded-md "
                  src={item.imageUrl}
                  alt="Van"
                />
                <div className="flex justify-between mt-2">
                  <div className="flex flex-col gap-2 ">
                    <p className="font-bold">{item.name}</p>
                    <button
                      className={`${
                        item.type === "simple"
                          ? "bg-[#e17654]"
                          : item.type === "rugged"
                          ? "bg-[#115e59]"
                          : "bg-black"
                      } text-[#ffead0] 
                font-semibold w-fit px-4 py-1 rounded-sm`}
                    >
                      {item.type}
                    </button>
                  </div>
                  <div>
                    <p className="font-bold">${item.price}</p>
                    <p className="text-[12px] font-semibold text-end">/day</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div className="h-[100vh] flex flex-col justify-center">
          <p className="mx-auto  w-fit">NO DATA AVAILABLE</p>
        </div>
      )}
      <Footer />
    </section>
  );
}

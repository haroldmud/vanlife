import { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";

function VanDetails() {
  const vanId = useParams();
  const location = useLocation();
  const detail = vanId.id.slice(0, -1);
  const [item, setItem] = useState(null);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const vanId = async () => {
      try {
        const response = await fetch(`/api/vans/${Number(detail) + 1}`);
        const vanId = await response.json();
        setItem(vanId.vans);
        setLoad(false)
      } catch (error) {
        setItem("null");
        setLoad(false)
      }
    };
    vanId();
  }, [detail]);
  return load ? (
    <div className="h-[100vh] flex flex-col justify-center">
      <p className="mx-auto  w-fit">Loading...</p>
    </div>
  ) : item ? (
    <div className="w-[90%] mx-auto mt-8">
      <Link to={`${location.state ? `/vans/?${location.state.search}` : "/vans"}`}
       className="mb-4 flex gap-1">
        <span className="my-auto text-gray-500">&larr;</span>
        <p className="underline text-sm my-auto"> Go back</p>
      </Link>
      <img className="object-cover rounded-md " src={item?.imageUrl} alt="Van" />
      <div className="mt-8">
        <div className="flex flex-col gap-2 mb-4">
          <div
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
          </div>
          <p className="font-bold text-4xl">{item.name}</p>
        </div>
        <div>
          <p className="font-bold text-2xl">
            ${item.price}
            <span className="text-xl font-semibold">/day</span>
          </p>
          <p className="mt-4">{item.description}</p>
        </div>
        <button className="bg-[#ff8c38] mt-4 mb-12 w-full text-center text-white font-semibold py-2 rounded-xl">
          Rent this van
        </button>
      </div>
    </div>
  ):<>Not data</>
}

export default VanDetails;

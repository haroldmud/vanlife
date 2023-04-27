import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function VanDetails() {
  const vanId = useParams();
  const details = useSelector((prev) => prev.vans.value.van);
  const item = details[vanId.id.slice(0, -1)];
  return (
    <div className="w-[90%] mx-auto mt-8">
      <Link to="/vans " className="mb-4 flex gap-1">
        <span className="my-auto text-gray-500">&larr;</span>
        <p className="underline text-sm my-auto"> Go back</p>
      </Link>
      <img className="object-cover rounded-md " src={item.imageUrl} alt="Van" />
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
  );
}

export default VanDetails;

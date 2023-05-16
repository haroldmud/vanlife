import { Link, useParams, Outlet, useLoaderData } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import HostDetailNav from "../../../components/host/hostDetailNav";
import { getVans } from "../../../api";
import { loader as loadLogOut }  from "../../authentication";

export async function loader({ request }) {
  return { vans: await getVans(), prevPath: loadLogOut({ request }) };
}

export default function HostVanDetail() {
  const hostList=useLoaderData();
  const listId = useParams();
  const item = hostList.vans[listId.id];

  return (
    <div className=" bg-[#fff7ed] h-full border border-[transparent]">
      <Link to="/host/list" className="mb-4 flex gap-1 w-10/12 mx-auto">
        <span className="my-auto text-gray-500 text-sm">
          <HiArrowLeft />
        </span>
        <p className="underline text-sm my-auto"> Go back</p>
      </Link>
      <div className="bg-white w-10/12 mx-auto p-4 rounded mb-8">
        <div className="flex gap-4">
          <img
            className="object-cover w-28 h-28"
            src={item?.imageUrl}
            alt="Van"
          />
          <div className="">
            <div className="flex flex-col gap-2 mb-4 mt-2">
              <div
                className={`${
                  item?.type === "simple"
                    ? "bg-[#e17654]"
                    : item?.type === "rugged"
                    ? "bg-[#115e59]"
                    : "bg-black"
                } text-[#ffead0]
              font-semibold w-fit px-4 py-1 rounded-sm text-sm`}
              >
                {item?.type}
              </div>
              <p className="font-bold text-xl">{item?.name}</p>
              <div>
                <p className="font-bold">
                  ${item?.price}
                  <span className="font-semibold">/day</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <HostDetailNav id={listId.id} />
        <Outlet context={{ hostList }} />
      </div>
    </div>
  );
}

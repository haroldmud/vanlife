import { Link, useLoaderData } from "react-router-dom";
import { getVans } from "../../api";
import "../../server";
import { loader as loadLogOut } from "../authentication";

export async function loader({ request }) {
  return { vans: await getVans(), prevPath: loadLogOut({ request }) };
}

function List() {
  const list = useLoaderData();
  console.log(list.prevPath);
  const loading = false;

  return loading ? (
    <div className="text-center py-52">Loading...</div>
  ) : (
    <div className="bg-[#fff7ed] px-4 py-8 ">
      <h2 className="font-bold text-4xl">Your listed vans</h2>
      <div className="py-12 flex flex-col gap-4">
        {list?.vans.map((item, idx) => (
          <Link
            to={`/host/list/${idx}`}
            key={item.id}
            className="bg-white flex gap-4 rounded-xl p-4"
          >
            <img className="w-16 rounded-xl" src={item.imageUrl} alt="" />
            <div>
              <h3 className="font-bold text-2xl ">{item.name}</h3>
              <p className="font-semibold text-gray-400">${item.price}/day</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default List;

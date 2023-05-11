import { Link, useLoaderData, defer, Await } from "react-router-dom";
import React from "react";
import { getVans } from "../../api";
import "../../server";
import { loader as loadLogOut } from "../authentication";

export async function loader({ request }) {
  return defer({ vans: await getVans(), prevPath: loadLogOut({ request }) });
}

function List() {
  const list = useLoaderData();

  return (
    <div className="bg-[#fff7ed] px-4 py-8 ">
      <React.Suspense fallback={<div className="h-[100vh] flex flex-col justify-center">
                                     <p className="mx-auto w-fit text-center">Loading...</p>
                                  </div>}
        >
      <h2 className="font-bold text-4xl">Your listed vans</h2>
      <div className="py-12 flex flex-col gap-4">
        <Await resolve={list.vans}>
          {list.vans.map((item, idx) => (
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
        </Await>
      </div>
      </React.Suspense>
    </div>
  );
}

export default List;

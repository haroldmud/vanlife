import React from "react";

function List() {
  return (
    <div className="bg-[#fff7ed] px-4 py-8 ">
      <div className="flex justify-between">
        <p className="font-bold">Your listed vans</p>
        <button>View all</button>
      </div>
      <div className="py-12">
        <p className="text-center text-red-800 font-bold">
          You haven't rented any van yet!
        </p>
      </div>
    </div>
  );
}

export default List;

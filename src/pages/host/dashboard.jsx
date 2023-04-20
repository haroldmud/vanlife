import { AiFillStar } from "react-icons/ai";

export default function Dashboard() {
  return (
    <section className="">
      <div className="flex justify-between bg-[#ffead0] p-4">
        <div>
          <h1 className="font-bold text-xl">Welcome!</h1>
          <p className="my-4">
            Income last{" "}
            <span className="font-bold underline underline-offset-1">
              30 days
            </span>
          </p>
          <p className="text-2xl font-bold">$2,260</p>
        </div>
        <button>Details</button>
      </div>
      <div className="bg-[#ffddb2] px-4 py-8 flex justify-between">
        <div className="flex gap-2">
          <p className="font-bold">Review score</p>
          <p>
            <span className="flex">
              <AiFillStar className="text-yellow-500 my-auto text-sm" />
              <span className="font-bold">0.5</span>
              <span className="text-[#4d4d4d] font-semibold">/5</span>
            </span>
          </p>
        </div>
        <button>Details</button>
      </div>
    </section>
  );
}

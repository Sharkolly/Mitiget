import { CiSearch } from "react-icons/ci";
import { FaCheck } from "react-icons/fa6";
import { checkBtn } from "../data/data";
const CheckList = () => {
  return (
    <section className="bg-gray-100 rounded-lg shadow-md w-full pb-5 mb-6">
      <div className="py-3 bg-primary flex gap-8 items-center px-8 rounded-tl-lg rounded-tr-lg ">
        <div className="">
          <CiSearch className="text-white text-2xl" />
        </div>
        <h2 className="text-md text-white">
          Audit Transfer for Data Permission Policy v8.1
        </h2>
      </div>

      <div className="flex justify-end pr-8">
        <div className=" mt-3">
          <input
            type="date"
            className="border border-gray-300 rounded-md p-2 w-full max-w-sm text-black"
          />
        </div>
      </div>
      <div className="mt-3">
        {checkBtn.map((check, index) => (
          <div key={index} className="flex items-center gap-3 px-8 py-3 mt-3">
            <div>
              <FaCheck className="text-green-500" />
            </div>
            <div>{check.date}</div>
            <div>{check.name}</div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex gap-5 px-8">
        <button className="px-4 py-2 bg-white text-back rounded-lg">
          Override Log
        </button>
        <button className="px-4 py-2 bg-primary text-white rounded-lg">
          Close
        </button>
      </div>
    </section>
  );
};

export default CheckList;

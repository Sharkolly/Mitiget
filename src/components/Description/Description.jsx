import { MdCancel } from "react-icons/md";
import { IoDocumentTextSharp } from "react-icons/io5";
import Section from "./Section";
import { useContextStore } from "../../hooks/ContextStore";
import { useState } from "react";

const Description = () => {
  const { viewIndex, setToggleView, toggleView } = useContextStore();
  const [descView, setDescView] = useState("Overview");

  const handleDescViewChange = (view) => setDescView(view);

  const cancel_button = () => setToggleView(false);

  return (
    <section
      className={`${
        toggleView ? "max-xl:flex" : "max-xl:hidden"
      } w-full max-xl:bg-[linear-gradient(to_right,rgba(0,0,0,0.8),rgba(0,0,0,0.8))] max-xl:fixed max-xl:top-0 max-xl:left-0 max-xl:right-0 max-xl:bottom-0  2xl:block 2xl:w-[28%] 2xl:p-4 overflow-y-auto  2xl:h-screen z-100 max-xl:py-5`}
    >
      <div className="w-full 2xl:bg-white 2xl:h-screen max-xl:h-[calc(100vh+13rem)]  max-lg:h-[1100px]  max-md:h-[1550p overflow-auto  flex justify-center z-999 max-xl:my-5">
        {toggleView ? (
          <div className="2xl:border-2 border-slate-200 bg-white 2xl:w-full max-xl:w-[80%] max-md:w-[95%]  2xl:h-screen max-lg:h-[1550px] rounded-md py-6 md:px-4 2xl:px-0">
            <div className="mx-7">
              <div className="flex items-center justify-between">
                <p>G-Doc Review</p>
                <span
                  className="w-7 h-7 bg-red-600 flex items-center justify-center text-white rounded-md cursor-pointer "
                  onClick={cancel_button}
                >
                  {/* <MdCancel className="text-red-600 text-2xl" /> */}
                  <p className="text-2xl">x</p>
                </span>
              </div>

              <div className="flex gap-8 items-center mt-7">
                <span className="w-12 rounded-sm h-12 flex justify-center items-center bg-primary ">
                  <IoDocumentTextSharp className="text-3xl text-white" />
                </span>
                <div className="flex flex-col gap-1">
                  <h2 className="text-lg">HR-PAY-00{viewIndex}</h2>
                  <p className="text-md">Payroll Processing Policy</p>
                </div>
              </div>
            </div>

            <div className="border-b-1 border-gray-300 text-sm flex px-5 justify-between  mt-10 ">
              <span
                className={`${
                  descView === "Overview" && "border-b-3 border-primary"
                } px-0.5 cursor-pointer`}
                onClick={() => handleDescViewChange("Overview")}
              >
                Overview
              </span>
              <span
                className={`${
                  descView === "Preview" && "border-b-3 border-primary"
                } px-0.5 cursor-pointer`}
                onClick={() => handleDescViewChange("Preview")}
              >
                Preview
              </span>
              <span
                className={`${
                  descView === "History" && "border-b-3 border-primary"
                } px-0.5 cursor-pointer`}
                onClick={() => handleDescViewChange("History")}
              >
                History
              </span>
            </div>
            <Section />
          </div>
        ) : (
          <div className="flex items-center text-xl font-bold">
            No Description Available
          </div>
        )}
      </div>
    </section>
  );
};

export default Description;

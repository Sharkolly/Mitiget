import { GoDownload } from "react-icons/go";
import { CiCircleCheck } from "react-icons/ci";
import { IoMdNotifications } from "react-icons/io";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { SlOptionsVertical } from "react-icons/sl";
import { MdOutlineViewHeadline } from "react-icons/md";
import { IoDocumentTextSharp } from "react-icons/io5";
import OptionsMenu from "./OptionsMenu";
// import { options_menu } from "../../data/data";
import { useState } from "react";
import { useContextStore } from "../../hooks/ContextStore";
import { toast } from "react-toastify";

const Results = ({ results }) => {
  const {  setViewIndex, setToggleView,  } = useContextStore();
  const [OptionIndex, setOptionIndex] = useState(null);
  const [toggleOptionIndex, setToggleOptionIndex] = useState(false);
  const [optionsMenu, setOptionsMenu] = useState([
    "View History",
    "Archive Policy",
    "Duplicate Policy",
  ]);

  const handleOptionMenu = (index) => {
    setOptionIndex(optionsMenu === index ? null : index);
    setToggleOptionIndex(!toggleOptionIndex);
  };

  const viewBtn = (index) => {
    setToggleView(true)
    setViewIndex(index + 1);
  };

  const downloading = () => {
    toast('✅ Downloading Please wait ....', {
         className: "bg-primary text-white shadow-md font-bold",
      progressClassName: "bg-primary",
    })
  }
  return (
    <section className="mt-3">
      <h2>Search Results: {results.length}</h2>
      <div className="flex flex-col gap-1 mt-2">
        {results.map((result, index) => (
          <div
            className="rounded-md px-2 pt-3 pb-4 bg-gray-100 max-md:px-0"
            key={index}
          >
            <div className="flex justify-between place-items-center mx-2 mb-3">
              <p className="text-xs">"Last updated: 4 days ago"</p>
              <span
                className="cursor-pointer relative"
                onClick={() => handleOptionMenu(index)}
              >
                <SlOptionsVertical className="text-gray-400" />

                {OptionIndex === index && toggleOptionIndex && (
                  <div className="absolute left-[-160px] z-99  w-44 ">
                    <OptionsMenu
                      items={optionsMenu}
                      setOptionsMenu={setOptionsMenu}
                    />
                  </div>
                )}
              </span>
            </div>
            <div className="flex ml-2  gap-3 w-full max-md:mx-2">
              <span className="w-11 rounded-sm h-11 max-md:w-8 max-md:h-8 flex justify-center items-center bg-primary ">
                <IoDocumentTextSharp className="text-2xl text-white" />
              </span>
              <div className="flex flex-1 gap-3 ">
                <h2 className="text-sm flex flex-col gap-1 max-[500px]:hidden ">
                  <span className="">Code:</span>
                  <span>Title:</span>
                </h2>
                <div className="flex justify-evenly w-full">
                  <h2 className="text-sm flex flex-col gap-1">
                    <span className="">{result.code}</span>
                    <span>{result.title}</span>
                  </h2>
                  <h2 className="text-sm flex flex-col gap-1">
                    <span className="">
                      <span className="max-[500px]:hidden">Department:</span>{" "}
                      {result.dept}
                    </span>
                    <span>{result.version}</span>
                  </h2>
                  <h2 className="text-sm flex flex-col gap-1">
                    <button className="rounded-lg px-2 py-0.5 bg-green-100 flex items-center gap-2">
                      <span>
                        <IoIosCheckmarkCircle className="text-green-500" />
                      </span>
                      <span>{result.status}</span>
                    </button>
                    {result.tags.map((tag, index) => (
                      <div
                        key={index}
                        className={`text-xs px-2 py-1 rounded-full flex items-center gap-1 justify-end  `}
                      >
                        <span
                          className={`${
                            tag.name === "Audit Trail" ? "hidden" : "block"
                          }`}
                        >
                          <IoMdNotifications className="text-yellow-500 text-lg" />
                        </span>
                        <span className="">{tag.name}</span>
                        {tag.name === "Attestation" ? (
                          <span className="h-3 w-3 bg-green-700 rounded-full"></span>
                        ) : (
                          <CiCircleCheck />
                        )}
                      </div>
                    ))}
                  </h2>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-0">
              <button className="bg-primary cursor-pointer px-4 py-1 text-white rounded-md flex gap-2 items-center" onClick={() => viewBtn(index)}>
                <span>
                  <MdOutlineViewHeadline />
                </span>{" "}
                <p>View</p>
              </button>
              <button className="bg-white cursor-pointer px-4 py-1 text-black rounded-md border-1 border-gray-400 flex gap-2 items-center" onClick={downloading} >
                {" "}
                <span className="text-primary ">
                  <GoDownload />
                </span>{" "}
                <p>Download</p>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Results;

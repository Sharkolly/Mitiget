import { CiSearch } from "react-icons/ci";
import { FaCaretUp } from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { IoMdOptions } from "react-icons/io";
import Dropdown from "../Dropdown";
import Filters from "./Filters";
import SearchResults from "./SearchResults";
import Status from "./Status";
import { RxHamburgerMenu } from "react-icons/rx";
import { useContextStore } from "../../hooks/ContextStore";

export default function MainPage() {
  const { setToggleSideBar } = useContextStore();

  const ToggleSidebar = () => setToggleSideBar(true);

  return (
    <main className="flex-1 py-4 overflow-y-auto  h-screen max-md:w-[100%] max-md:mx-auto ">
      <div className="">
        <div className="pb-4 md:hidden px-4 flex justify-between items-center">
          <p className="qwitcher-grypen-bold text-6xl text-primary">
            M - Clarion
          </p>
          <span
            className="w-7 h-7  flex items-center justify-center text-white rounded-md cursor-pointer md:hidden "
            onClick={ToggleSidebar}
          >
            <RxHamburgerMenu className="text-3xl text-black " />
          </span>
        </div>
        <div className="flex items-center justify-between max-md:flex-col max-md:items-start max-md:gap-4 max-lg:w-[150%] max-md:w-full px-4">
          <div className="flex border-2 rounded-md py-2 px-3 w-[60%] items-center max-md:w-full">
            <span className="w-7">
              <CiSearch />
            </span>
            <input
              className="flex-1 border-none outline-none"
              type="search"
              name="Search"
              placeholder="Search ..."
            />
            <span className="w-7">
              <IoMdOptions />
            </span>
          </div>

          <div className="flex gap-7 text-2xl  items-center max-md:justify-between max-md:w-full">
            <div className="flex items-center gap-2 ">
              <span className="w-7">
                <IoIosSettings />
              </span>
              <span className="w-7">
                <IoIosNotifications />
              </span>
            </div>

            <div className="h-10 rounded-sm w-[1px] bg-black"></div>

            <div className="flex gap-2  border-2 border-primary p-2 rounded-md">
              <span className="w-7">
                <IoPersonCircleSharp />
              </span>
              <span className="w-7">
                <FaCaretUp />
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white pl-3 max-md:pl-1 mt-4 pt-0.5 max-lg:w-[150%] max-md:w-full ">
          <div className="flex items-center gap-4 border-1  px-5 py-1 border-gray-400 mt-5 rounded-md justify-self-start">
            <p>Policy</p>
            <span className="text-xl">&gt;</span>
            <p className="text-primary">G-Doc Library</p>
          </div>

          <div className="flex mt-10 max-md:flex-col max-md:mt-5 max-md:gap-5">
            <Filters />
            <SearchResults />
          </div>
        </div>
      </div>
    </main>
  );
}

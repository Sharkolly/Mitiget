import { FaBriefcase } from "react-icons/fa";
// import { FcProcess } from "react-icons/fc";
import { UserCheck, ShieldAlert, Workflow, ShieldCheck } from "lucide-react";
import { IoMdHome } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { useContextStore } from "../../hooks/ContextStore";

export default function Sidebar() {
  const {setToggleSideBar, toggleSideBar} = useContextStore();

    const cancelToggleSidebar = () => setToggleSideBar(false)
  return (
    <aside className={`w-72 ${!toggleSideBar && 'max-md:hidden' }  max-md:fixed max-md:w-full max-md:left-0 max-md:right-0  h-screen overflow-y-auto z-50 max-md:bg-[linear-gradient(to_right,rgba(0,0,0,0.8),rgba(0,0,0,0.8))]`}>
      <div className="w-64 bg-white h-screen overflow-auto max-md:w-[75%]">
        <div className="">
          <div className="pt-4 px-4 flex justify-between items-center">
            <p className="text-4xl italic ..qwitcher-grypen-regular text-primary">
              M - Clarion
            </p>
            <span className="w-7 h-7 bg-red-600 flex items-center justify-center text-white rounded-md cursor-pointer md:hidden " onClick={cancelToggleSidebar}>
              {/* <MdCancel className="text-red-600 text-2xl" /> */}
              <p className="text-2xl">x</p>
            </span>
          </div>
          <div className="border-b-2 p-4 pb-0">
            <div className="flex gap-2 items-center mb-4">
              <span>
                <FaBriefcase className="text-primary" />
              </span>
              <p className="text-md font-semibold">Mitiget Assurance LTD</p>
            </div>
            <div className="flex gap-2 items-center mb-4 w-[80%] mx-auto">
              <span>
                <IoPerson className="text-primary" />
              </span>
              <p className="text-md font-bold">Super Admin</p>
            </div>
          </div>

          <div className="pl-1 mt-3">
            <div className="flex items-center gap-2 mb-4 cursor-pointer hover:bg-gray-200 pl-2 rounded">
              <span>
                <IoMdHome className="text-xl text-primary" />
              </span>
              <p className="text-md font-semibold">Home</p>
            </div>
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2 cursor-pointer hover:bg-gray-200 pl-2 rounded">
                <span>
                  <UserCheck className="text-xl text-primary" />
                </span>
                <p className="text-md font-semibold text-primary">
                  Administration
                </p>
              </div>
              <ul className="list-disc list-inside w-[80%] mx-auto text-sm space-y-3 ">
                <li className="marker:text-primary font-semibold marker:pr-0 text-primary">
                  User Dashboard
                </li>
                <li className="marker:text-primary font-semibold marker:pr-0 ">
                  Onboard User
                </li>
                <li className="marker:text-primary font-semibold marker:pr-0 ">
                  Onboard Management
                </li>
                <li className="marker:text-primary font-semibold marker:pr-0 ">
                  Priviledges
                </li>
                <li className="marker:text-primary font-semibold marker:pr-0 ">
                  System Settings
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-2 mb-4 cursor-pointer hover:bg-gray-200 pl-2 rounded">
              <span>
                <ShieldAlert className="text-xl text-primary" />
              </span>
              <p className="text-md font-semibold">Risk</p>
            </div>
            <div className="flex items-center gap-2 mb-4 cursor-pointer hover:bg-gray-200 pl-2 rounded">
              <span>
                <Workflow className="text-xl text-primary" />
              </span>
              <p className="text-md font-semibold">Process Management</p>
            </div>
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2 cursor-pointer hover:bg-gray-200 pl-2 rounded">
                <span>
                  <ShieldCheck className="text-xl text-primary" />
                </span>
                <p className="text-md font-semibold text-primary">Policy</p>
              </div>
              <ul className="list-disc list-inside w-[80%] mx-auto text-sm space-y-3 ">
                <li className="marker:text-primary font-semibold marker:pr-0 ">
                  G-Doc Dashboard
                </li>
                <li className="marker:text-primary font-semibold marker:pr-0 text-primary">
                  G-Doc Library
                </li>
                <li className="marker:text-primary font-semibold marker:pr-0 ">
                  My Accounts
                </li>
                <li className="marker:text-primary font-semibold marker:pr-0 ">
                  My Alleviations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

import Sidebar from "./sidebar/Sidebar";
import MainPage from "./middle/MainPage";
import Description from "./Description/Description";
import { useContextStore } from "../hooks/ContextStore";

const Layout = () => {
  const { toggleView } = useContextStore();

  return (
    <div className="md:flex h-screen bg-gray-100 w-full max-md:w-[100%] max-md:mx-auto">
      <Sidebar />
      <MainPage />
      {toggleView && <Description />}
      {/* <Description/> */}
    </div>
  );
};

export default Layout;

import Sidebar from "./sidebar/Sidebar";
import MainPage from "./middle/MainPage";
import Description from "./Description/Description";
import { useContextStore } from "../hooks/ContextStore";

const Layout = () => {
  const { toggleView } = useContextStore();

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <MainPage />
      {toggleView && <Description />}
      {/* <Description/> */}
    </div>
  );
};

export default Layout;

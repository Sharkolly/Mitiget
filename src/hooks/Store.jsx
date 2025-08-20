import { useState } from "react";
import { StoreContext } from "./StoreContext";

const StoreContextComponent = ({ children }) => {
  const [viewIndex, setViewIndex] = useState(1);
  const [toggleView, setToggleView] = useState(true);
  const [toggleSideBar, setToggleSideBar] = useState(false);
  return (
    <StoreContext.Provider
      value={{ viewIndex, setViewIndex, toggleView, setToggleView, toggleSideBar, setToggleSideBar }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextComponent;

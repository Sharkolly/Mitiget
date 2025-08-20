import { useContext } from "react";
import { StoreContext } from "./StoreContext";

export const useContextStore = () => {
  const context = useContext(StoreContext);
  if (!context) throw new Error("useStore must be used within a Store");
  return context;
};

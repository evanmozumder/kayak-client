import { createContext } from "react";
import useFirebase from "../hooks/useFirebase";
import useOrders from "../hooks/useOrders";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const { orders, setOrders, orderCount, setOrderCount, found, count } =
    useOrders();
  const context = useFirebase();
  // console.log("found from authprovider", found);

  const data = {
    context,
    orders,
    count,
    found,
    setOrders,
    orderCount,
    setOrderCount,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

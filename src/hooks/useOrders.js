import { useEffect, useState } from "react";
import useFirebase from "./useFirebase";

const useOrders = () => {
  const [orders, setOrders] = useState([]);
  const context = useFirebase();

  const { user } = context;

  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  const found = orders.find((order) => order.email === user.email);
  const count = found?.orders.length;
  const [orderCount, setOrderCount] = useState(0);

  console.log(count);
  console.log("ordercount from authprovider", orderCount);
  if (count) {
    // setOrderCount(count);
  }
  return { orders, setOrders, orderCount, setOrderCount, count, found };
};

export default useOrders;

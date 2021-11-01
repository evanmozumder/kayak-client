import { useEffect, useState } from "react";
import useFirebase from "./useFirebase";

const useOrders = () => {
  const [orders, setOrders] = useState([]);
  // const [orderDetails, setOrderDetails] = useState[{}]
  const context = useFirebase();

  const [orderCount, setOrderCount] = useState(0);
  const { user } = context;

  useEffect(() => {
    fetch("https://murmuring-plains-87841.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  /* useEffect(()=>{
    fetch(`https://murmuring-plains-87841.herokuapp.com/specificorder/${id}`)
      .then((res) => res.json())
      .then((data) => setOrderDetails(data));
  },[]) */
  const found = orders.find((order) => order.email === user.email);
  const count = found?.orders.length;
  if (count) {
    // setOrderCount(count);
  }
  // console.log(count);
  // console.log("ordercount from authprovider", orderCount);

  return { orders, setOrders, orderCount, setOrderCount, count, found };
};

export default useOrders;

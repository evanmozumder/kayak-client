import React from "react";
import useAuth from "../../hooks/useAuth";
import DisplayAllOrders from "../DisplayAllOrders/DisplayAllOrders";

const ManageAllOrders = () => {
  const { orders } = useAuth();
  //   console.log("orders fro manage all", orders);

  return (
    <div>
      <h2>manage orderws</h2>
      {orders.map((order) => (
        <DisplayAllOrders key={order._id} order={order}></DisplayAllOrders>
      ))}
    </div>
  );
};

export default ManageAllOrders;

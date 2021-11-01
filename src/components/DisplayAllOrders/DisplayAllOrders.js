import React, { useState } from "react";

const DisplayAllOrders = (props) => {
  const { order } = props;
  const [orderDetails, setOrderDetails] = useState({});
  //   console.log("order from display", order);
  const getOrderDetails = (id) => {
    fetch(`https://murmuring-plains-87841.herokuapp.com/specificorder/${id}`)
      .then((res) => res.json())
      .then((data) => setOrderDetails(data));
  };
  return (
    <div>
      user: {order.name} orders:
      {order.orders.map((singleOrder) => {
        getOrderDetails(singleOrder);
        return (
          <>
            <li>{orderDetails.name}</li>
            <button>Delete</button>
          </>
        );
      })}
    </div>
  );
};

export default DisplayAllOrders;

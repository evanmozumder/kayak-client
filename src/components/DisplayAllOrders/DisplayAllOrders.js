import React from "react";

const DisplayAllOrders = (props) => {
  const { order } = props;
  //   console.log("order from display", order);
  return (
    <div>
      user: {order.name} orders:
      {order.orders.map((singleOrder) => (
        <li>{singleOrder}</li>
      ))}
    </div>
  );
};

export default DisplayAllOrders;

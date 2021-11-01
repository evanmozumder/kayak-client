import React from "react";
import useAuth from "../../hooks/useAuth";

const MyOrders = () => {
  const { orders } = useAuth();
  const { context, setOrderCount } = useAuth();
  const { user } = context;

  const found = orders?.find((order) => order.email === user.email);
  console.log(found);
  const handleCancel = (id) => {
    const choice = window.confirm(
      "Are yOu sure you want to cancel this booking?"
    );
    if (choice) {
      const rest_orders = found.orders.filter((order) => order !== id);
      const new_order = [rest_orders];
      setOrderCount(rest_orders.length);
      found.orders = new_order;
      const url = `https://murmuring-plains-87841.herokuapp.com//${found._id}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(found),
      })
        .then((res) => res.json())
        .then((data) => {});
    }
  };
  return (
    <div>
      <ul>
        {found?.orders.map((order) => (
          <>
            <li>{order}</li>
            <button onClick={() => handleCancel(order)}>Cancel</button>
          </>
        ))}
      </ul>
    </div>
  );
};

export default MyOrders;

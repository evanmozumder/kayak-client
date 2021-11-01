import React from "react";
import useAuth from "../../hooks/useAuth";

const MyOrders = () => {
  const { orders } = useAuth();
  // const [details, setDetails] = useState({});
  const { context, setOrderCount } = useAuth();
  const { user } = context;
  // const [orderDetails, setOrderDetails] = useState[{}];
  /* fetch(`https://murmuring-plains-87841.herokuapp.com/specificorder/${}`)
      .then((res) => res.json())
      .then((data) => setOrderDetails(data)); */

  const found = orders?.find((order) => order.email === user.email);
  // console.log(found);
  /* const getDetails = (orderId) => {
    fetch(
      `https://murmuring-plains-87841.herokuapp.com/specificorder/${orderId}`
    )
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
        console.log("details", details);
      });
  }; */
  // const allOrders = found?.orders.map((order) => getDetails(order));
  // console.log("allorders", allOrders);
  const handleCancel = (id) => {
    const choice = window.confirm(
      "Are yOu sure you want to cancel this booking?"
    );
    // console.log("choice", choice);
    if (choice) {
      const rest_orders = found.orders.filter((order) => order !== id);
      const new_order = rest_orders;
      // console.log("after deleted", new_order);
      setOrderCount(rest_orders.length);
      found.orders = new_order;
      const url = `https://murmuring-plains-87841.herokuapp.com/orders/${found._id}`;
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
        {found?.orders.map((order) => {
          return (
            <>
              <li>{order}</li>
              <button
                className="btn btn-danger"
                onClick={() => handleCancel(order)}
              >
                Cancel
              </button>
            </>
          );
          // getDetails(order);
          // return (
          //   <>
          //     <Card style={{ width: "18rem" }}>
          //       <Card.Img variant="top" src={details.img} />
          //       <Card.Body>
          //         <Card.Title>{details.name}</Card.Title>
          //         <Card.Text>{details.description}</Card.Text>
          //         <Button onClick={() => handleCancel(order)} variant="primary">
          //           Cancel
          //         </Button>
          //       </Card.Body>
          //     </Card>
          //     {/* <button onClick={}>Cancel</button> */}
          //   </>
          // );
        })}
      </ul>
    </div>
  );
};

export default MyOrders;

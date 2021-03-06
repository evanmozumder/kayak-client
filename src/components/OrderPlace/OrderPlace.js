import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import useOrders from "../../hooks/useOrders";
// import { clearTheCart } from "../../utilities/fakedb";
import "./OrderPlace.css";

const OrderPlace = () => {
  const { order_id } = useParams();
  const [details, setDetails] = useState({});
  const history = useHistory();
  // getting ordered services
  fetch(
    `https://murmuring-plains-87841.herokuapp.com/specificorder/${order_id}`
  )
    .then((res) => res.json())
    .then((data) => setDetails(data));
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { context } = useAuth();
  const { orderCount, setOrderCount } = useOrders();
  const { orders, setOrders } = useOrders();
  const { user } = context;

  // setOrders(new_order);
  // console.log(orders);
  const onSubmit = (data) => {
    // const savedCart = getStoredCart();
    // data.order = savedCart;
    // checking if user already exist or not
    const found = orders.find((order) => order.email === data.email);
    // console.log("before found", found);
    if (found) {
      const new_order = [...found.orders, order_id];
      setOrderCount(new_order.length);
      found.orders = new_order;
      found.address = data.address;
      found.city = data.city;
      found.phone = data.phone;
      // console.log("new state of old user", found);
      // console.log("data", data);
      const url = `https://murmuring-plains-87841.herokuapp.com/orders/${found._id}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(found),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount) {
            alert("Booked Successfully");
            history.push("/");
          }
        });
    } else {
      data.orders = [order_id];
      setOrderCount(1);
      fetch("https://murmuring-plains-87841.herokuapp.com/orders", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.insertedId) {
            alert("Booked successfully");
            history.push("/");
            reset();
          }
        });
    }

    // console.log(data);
  };
  return (
    <div className="d-flex justify-content-center">
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={details.img} />
          <Card.Body>
            <Card.Title>{details.name}</Card.Title>
            <Card.Text>{details.description}</Card.Text>
          </Card.Body>
        </Card>
      </div>
      <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue={user.displayName} {...register("name")} />

        <input
          defaultValue={user.email}
          {...register("email", { required: true })}
        />
        {errors.email && <span className="error">This field is required</span>}
        <input placeholder="Address" defaultValue="" {...register("address")} />
        <input placeholder="City" defaultValue="" {...register("city")} />
        <input
          placeholder="phone number"
          defaultValue=""
          {...register("phone")}
        />
        <input className="btn btn-success" type="submit" value="Book Now" />
      </form>
    </div>
  );
};

export default OrderPlace;

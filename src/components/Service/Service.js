import React from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import useOrders from "../../hooks/useOrders";

const Service = (props) => {
  const { service } = props;
  const { found } = useOrders();
  const history = useHistory();
  const handleBookNow = (id) => {
    const alreadySelected = found?.orders.find((order) => order === id);
    if (alreadySelected) {
      alert("already booked");
    } else {
      history.push(`/orderplace/${service._id}`);
    }
  };
  return (
    <div className="col-md-4">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={service.img} />
        <Card.Body>
          <Card.Title>{service.name}</Card.Title>
          <Card.Text>{service.description}</Card.Text>
          <Button onClick={() => handleBookNow(service._id)} variant="primary">
            Book Now
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;

import React from "react";
import { Button, Card } from "react-bootstrap";

const RecommendedDeal = (props) => {
  const { deal } = props;
  return (
    <div className="col-md-4">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={deal.img} />
        <Card.Body>
          <Card.Title>{deal.name}</Card.Title>
          <Card.Text>{deal.description}</Card.Text>
          <Button variant="primary">View Deals</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RecommendedDeal;

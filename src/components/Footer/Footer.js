import React from "react";
import { Button, Form } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="bg-dark">
      <h3 className="text-white text-center mt-4 pt-4">Contact Us</h3>
      <Form className="w-25 ms-auto me-auto pb-5">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="text-white">Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="text-white">Message</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="success">Submit</Button>
      </Form>
    </div>
  );
};

export default Footer;

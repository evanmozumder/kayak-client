import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useFirebase from "../../hooks/useFirebase";

const Header = () => {
  const { user, handleLogout } = useFirebase();
  const { orders, setOrders, orderCount, setOrderCount, count } = useAuth();
  setOrderCount(count);
  console.log("order count", orderCount);
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            KAYAK
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/features">
              Features
            </Nav.Link>
            <Nav.Link as={Link} to="/pricing">
              Pricing
            </Nav.Link>
            {user?.email ? (
              <>
                <Nav.Link onClick={handleLogout} as={Link} to="/">
                  Logout
                </Nav.Link>
                <h5
                  style={{
                    color: "white",
                    marginTop: "6px",
                    marginRight: "6px",
                  }}
                >
                  user : {user.displayName}
                </h5>
                <Nav.Link
                  style={{ color: "white", marginTop: "6px" }}
                  as={Link}
                  to="/myorders"
                >
                  <h5>My Orders : {orderCount}</h5>
                </Nav.Link>
                <Nav.Link as={Link} to="/manageallorders">
                  Manage All Orders
                </Nav.Link>
                <Nav.Link as={Link} to="/addnewservice">
                  Add New Service
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/signup">
                  Sign Up
                </Nav.Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

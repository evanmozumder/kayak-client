import React from "react";
import { Button } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { context } = useAuth();
  const { signInWithGoogle, setUser, setError } = context;
  const history = useHistory();
  const location = useLocation();
  const redirect_uri = location.state?.from || "/home";
  const handleLogin = (e) => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log("user", user);
        setUser(user);
        history.push(redirect_uri);
        console.log("redirect from", redirect_uri);
        console.log("history", history);
      })
      .catch((err) => {
        const errorMessage = err.message;
        setError(errorMessage);
      });
    e.preventDefault();
  };
  return (
    <div>
      <h2>Please Login</h2>
      <Button onClick={handleLogin} variant="warning" type="submit">
        Google Sign In
      </Button>
    </div>
  );
};

export default Login;

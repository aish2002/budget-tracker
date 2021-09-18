import React, { useState } from "react";
import { Row, Form, Button, Col } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

const Signin = ({setAuthenticated}) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  
  const [msg, setMsg] = useState(true);

  const handleSignIn = (e) => {
    e.preventDefault();
    axios
      .post("/api/login", user)
      .then((res) => {
        console.log(res)
        if(res.status === 201){
          setAuthenticated(true);
          window.location = '/dashboard';
        }else{
          setMsg(res.data)
        }
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) =>
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });

  return (
    <Row className="min-vh-100 justify-content-center align-items-center login-signup">
      <Col className="px-4">
        <h2>Welcome back</h2>
        <span>
          New Here? <a href="/signup">Create New Account</a>
        </span>

        <Form className="mt-4" onSubmit={handleSignIn}>
          <Form.Control
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            required
          />
          <br />
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            required
          />
          <div className="text-right">
            <Link to="/reset">Forgot Password ?</Link>
          </div>
          <Form.Text>{msg}</Form.Text>
          <br />
          <Button variant="primary" type="submit" block>
            Sign In
          </Button>
        </Form>
      </Col>
      <Col></Col>
    </Row>
  );
};

export default Signin;

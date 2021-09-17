import React, { useState } from "react";
import { Row, Form, Button, Col } from "react-bootstrap";
import axios from "axios";

const SignUp = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    repassword: "",
  });

  const handleSignUp = (e) => {
    e.preventDefault();
    if (user.password === user.repassword) {
      axios.post("/api/register",user).then((res) => console.log(res)).catch(err => console.log(err));
    }
  };

  const handleChange = (e) =>
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });

  return (
    <Row className="min-vh-100 justify-content-center align-items-center login-signup">
      <Col className="px-4">
        <h2>Create Account</h2>

        <Form className="mt-4" onSubmit={handleSignUp}>
          <Form.Control
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            required
          />
          <br />
          <Form.Control
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <br />
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <br />
          <Form.Control
            type="password"
            name="repassword"
            placeholder="Reenter Password"
            onChange={handleChange}
            required
          />
          {!(user.password === user.repassword) &&
            user.repassword.length > 1 && (
              <Form.Text>Password does not match</Form.Text>
            )}
          <br />
          <Row className="justify-content-between">
            <Col>
              <Button variant="primary" style={{ width: "100%" }} type="submit">
                Sign Up
              </Button>
            </Col>
            <Col>
              <Button
                variant="outline-primary"
                style={{ width: "100%" }}
                href="/signin"
              >
                Sign In
              </Button>
            </Col>
          </Row>
        </Form>
      </Col>
      <Col></Col>
    </Row>
  );
};

export default SignUp;

import React, { useState } from "react";
import { Row, Form, Button, Col } from "react-bootstrap";
import axios from "axios";
import './Authentication.css';

const SignUp = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    repassword: "",
  });
  const [msg, setMsg] = useState(null)

  const handleSignUp = (e) => {
    e.preventDefault();
    if (user.password === user.repassword) {
      setMsg(null)
      axios
        .post("/api/register", user)
        .then((res) => {
          if(res.status === 200){
            setMsg(res.data)
          }else{
            console.log(res.data);
            window.location = '/dashboard';
          }
        })
        .catch((err) => console.log(err));
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
            <Form.Text>{msg}</Form.Text>
          <br/>
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
                className="signin"
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

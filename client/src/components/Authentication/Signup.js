import React, { useState } from "react";
import { Row, Form, Button, Col, Navbar,Image } from "react-bootstrap";
import axios from "axios";
import './Authentication.css';
import {ReactComponent as Money} from "../../assets/money.svg";
import logo from "../../assets/logo.png";

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
    <div className='min-vh-100'>
      <Navbar>
        <Navbar.Brand>
          <Image src={logo} width="80px" height="80px" />
          MoneyFlow
        </Navbar.Brand>
      </Navbar>
      <Row className="justify-content-center align-items-center login-signup mt-5 pt-5">
      <Col className='d-none d-md-block'><Money/></Col>
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
              <Form.Text className="error">Password does not match</Form.Text>
            )}
            <Form.Text className="error">{msg}</Form.Text>
          <br/>
          <Row className="justify-content-between">
            <Col>
              <Button variant="primary" style={{ width: "100%" }} type="submit">
                Sign Up
              </Button>
            </Col>
            <Col>
              <Button
                
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
    </Row>
    </div>
  );
};

export default SignUp;

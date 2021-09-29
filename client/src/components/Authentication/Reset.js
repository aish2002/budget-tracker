import React, { useState } from "react";
import { Row, Form, Button, Col , Navbar, Image} from "react-bootstrap";
import axios from "axios";
import './Authentication.css'
import {ReactComponent as Money} from "../../assets/money.svg";
import logo from "../../assets/logo.png";

const Reset = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    repassword: "",
  });

  const handleReset = (e) => {
    e.preventDefault();
    if (user.password === user.repassword) {
      axios
        .post(process.env.REACT_APP_API +"/reset", user)
        .then((res) => {
          if(res.status === 201){
            console.log('resetted');
            window.location = '/signin';            
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
        <h2>Reset Password</h2>

        <Form className="mt-4" onSubmit={handleReset}>
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
            placeholder="New Password"
            onChange={handleChange}
            required
          />
          <br />
          <Form.Control
            type="password"
            name="repassword"
            placeholder="Reenter New Password"
            onChange={handleChange}
            required
          />
          {!(user.password === user.repassword) &&
            user.repassword.length > 1 && (
              <Form.Text className="error">Password does not match</Form.Text>
            )}
          <br />
          <Button variant="primary" type="submit" block>
            Reset Password
          </Button>
        </Form>
      </Col>
    </Row>
    </div>
  );
};

export default Reset;

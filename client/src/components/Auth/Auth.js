import React,{useState} from "react";
import { Row,Form,Button, Col } from "react-bootstrap";
import axios from 'axios';

export const Signin = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })
  const [valid, setValid] = useState(true)

  const handleSignIn = (e) => {
    e.preventDefault();
    axios.post('/login').then(res => console.log(res))
  }

  const handleChange = (e) => setUser({
    ...user,
    [e.target.name]: e.target.value
  })

  return (
    <Row className="min-vh-100 justify-content-center align-items-center login-signup">
        <Col className="px-4">
        <h2>Welcome back</h2>
        <span>New Here? <a href="/signup">Create New Account</a></span>
        
        <Form className="mt-4" onSubmit={handleSignIn}>
            <Form.Control  type="email" placeholder="Email" onChange={handleChange}  required/>
            <br/>
            <Form.Control  type="password" placeholder="Password" onChange={handleChange} required/>
            {!valid && <Form.Text >
              Invalid Credentials
            </Form.Text>}
            <br/>
            <Button variant="primary" type="submit" block>
                Sign In
            </Button>
        </Form>
        </Col>
        <Col>
        </Col>
    </Row>
  );
};

export const SignUp = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    repassword: '',
  })
  
  const handleSignUp = (e) => {
    e.preventDefault();
    if(user.password === user.repassword){
      axios.post('/register').then(res => console.log(res))
    }
  }

  const handleChange = (e) => 
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })

  return (
    <Row className="min-vh-100 justify-content-center align-items-center login-signup">
        <Col className="px-4">
        <h2>Create Account</h2>
                
        <Form className="mt-4" onSubmit={handleSignUp}>
            <Form.Control  type="text" name="name" placeholder="Name" onChange={handleChange} required/>
            <br/>
            <Form.Control  type="email" name="email" placeholder="Email" onChange={handleChange} required/>
            <br/>
            <Form.Control  type="password" name="password" placeholder="Password" onChange={handleChange} required/>
            <br/>
            <Form.Control  type="password" name="repassword" placeholder="Reenter Password" onChange={handleChange} required/>
            {!(user.password === user.repassword) && user.repassword.length > 1 && <Form.Text >
              Password does not match
            </Form.Text>}
            <br/>
            <div className="d-flex justify-content-between">
            <Button variant="primary" style={{width: '200px'}} type="submit">
              Sign Up
            </Button>
            <Button variant="outline-primary" style={{width: '200px'}} href="/signin">
              Sign In
            </Button>
            </div>
        </Form>
        </Col>
        <Col>
        </Col>
    </Row>
  );
};



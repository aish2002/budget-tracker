import React,{useState} from "react";
import { Row,Form,Button, Col } from "react-bootstrap";
import axios from 'axios';

const Reset = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
    repassword: '',
  })
  
  const handleReset = (e) => {
    e.preventDefault();
    if(user.password === user.repassword){
        axios.post('/api/reset').then(res => console.log(res))
    }
  }

  const handleChange = (e) => setUser({
    ...user,
    [e.target.name]: e.target.value
  })

  return (
    <Row className="min-vh-100 justify-content-center align-items-center login-signup">
        <Col className="px-4">
        <h2>Reset Password</h2>
                
        <Form className="mt-4" onSubmit={handleReset}>
            <Form.Control  type="email" name="email" placeholder="Email" onChange={handleChange}  required/>
            <br/>
            <Form.Control  type="password" name="password" placeholder="New Password" onChange={handleChange} required/>
            <br/>
            <Form.Control  type="password" name="repassword" placeholder="Reenter New Password" onChange={handleChange} required/>
            {!(user.password === user.repassword) &&
            user.repassword.length > 1 && (
              <Form.Text>Password does not match</Form.Text>
            )}
            <br/>
            <Button variant="primary" type="submit" block>
                Reset Password
            </Button>
        </Form>
        </Col>
        <Col>
        </Col>
    </Row>
  );
};

export default Reset;
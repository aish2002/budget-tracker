import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter,Route,Redirect } from "react-router-dom";
import SignUp from "./Authentication/Signup";
import Signin from "./Authentication/Signin";
import Reset from "./Authentication/Reset";
import Dashboard from "./Dashboard";

const Home = () => {
    return (
      <BrowserRouter>
        <Container >
          <Route exact path='/' render={() => {
              return (
                  <Redirect to="/signin" /> 
              )
          }}/>
          <Route path='/signin' component={Signin} />
          <Route path='/signup' component={SignUp} />
          <Route path='/reset' component={Reset}/>
        </Container>
        <Route path='/dashboard' component={Dashboard}/>
      </BrowserRouter>
    );
  }
  
  export default Home;

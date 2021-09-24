import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter,Route,Redirect } from "react-router-dom";
import SignUp from "../Signup/Signup";
import Signin from "../Signin/Signin";
import Reset from "../Reset/Reset";
import Dashboard from "../Dashboard/Dashboard";

function Home() {
  
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

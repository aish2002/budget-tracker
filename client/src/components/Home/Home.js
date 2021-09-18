<<<<<<< HEAD
import React,{useState} from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter,Route,Redirect } from "react-router-dom";
import SignUp from "../Signup/Signup";
import Signin from "../Signin/Signin";
import Reset from "../Reset/Reset";
import Dashboard from "../Dashboard/Dashboard";
function Home() {
  //not working check
  const [authenticated, setAuthenticated] = useState(false)

    return (
      <BrowserRouter>
        <Container >
          <Route exact path='/' render={() => {
              return (
                  authenticated ?
                  <Redirect to="/dashboard" /> :
                  <Redirect to="/signin" /> 
              )
          }}/>
          <Route path='/signin' >
            <Signin setAuthenticated={setAuthenticated}/>
          </Route>
          <Route path='/signup' >
            <SignUp setAuthenticated={setAuthenticated}/>
          </Route>
          <Route path='/reset' component={Reset}/>
          <Route path='/dashboard' component={Dashboard}/>
        </Container>
      </BrowserRouter>
    );
  }
  
  export default Home;
=======
>>>>>>> f9b0e8c08af7295a39125e91011d59972d927c5c

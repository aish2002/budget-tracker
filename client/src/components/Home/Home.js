import React,{useState} from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter,Route,Redirect } from "react-router-dom";
import SignUp from "../Signup/Signup";
import Signin from "../Signin/Signin";
import Reset from "../Reset/Reset";
import Dashboard from "../Dashboard/Dashboard";
import { UserProvider } from "../../context";

function Home() {
  //not working check
  const [authenticated, setAuthenticated] = useState(false)

    return (
      <UserProvider>
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
              <Signin />
            </Route>
            <Route path='/signup' >
              <SignUp />
            </Route>
            <Route path='/reset' component={Reset}/>
          </Container>
          <Route path='/dashboard' component={Dashboard}/>
        </BrowserRouter>
      </UserProvider>
    );
  }
  
  export default Home;

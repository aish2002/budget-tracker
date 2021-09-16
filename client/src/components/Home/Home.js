import React,{useState} from "react";
import { Container } from "react-bootstrap";
import Switch from "react-bootstrap/esm/Switch";
import { BrowserRouter,Route,Redirect } from "react-router-dom";
//import axios from "axios";
import {Signin,SignUp} from "../Auth/Auth";

function Home() {
  //testing server
  // useEffect(() => {
  //   axios.get('/api').then(res => console.log(res))
  // }, [])
  const [authenticated, setAuthenticated] = useState(false)

    return (
      <BrowserRouter>
        <Container >
          <Switch>
          <Route exact path='/' render={() => {
              return (
                  authenticated ?
                  <Redirect to="/dashboard" /> :
                  <Redirect to="/signin" /> 
              )
          }}/>
          <Route path='/signin' component={Signin}/>
          <Route path='/signup' component={SignUp}/>
          </Switch>
        </Container>
      </BrowserRouter>
    );
  }
  
  export default Home;
import { Row, Col } from "react-bootstrap";
import { React } from "react";
import Leftbar from "../Leftbar/Leftbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <Row>
        <Col lg={3} className="pr-0">
          
          <Leftbar />
        </Col>
        <Col>
            <Switch>
            <Route path="/dashboard" >dash</Route>
            <Route path="/weekly" >weekyl</Route>
            {/* <Route path="/weekly" component={}/>
            <Route path="/monthly" component={}/>
            <Route path="/setup" component={}/> */}
            </Switch>
        </Col>
      </Row>
    </div>
  );
}
export default Dashboard;

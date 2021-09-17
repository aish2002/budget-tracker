import { Row, Col } from "react-bootstrap";
import { React } from "react";
import Leftbar from "../Leftbar/Leftbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <Row className="mr-0"  >
        <Col lg={3} md={4} className="pr-0">
            <Leftbar />
        </Col>
        <Col >
          <Switch>
            <Route path="/dashboard" component={}/>
            <Route path="/weekly" component ={}/>
            <Route path="/monthly" component={}/>
            <Route path="/setup" component={}/>
          </Switch>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;

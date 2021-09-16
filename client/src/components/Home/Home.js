import { Button, Row, Col } from "react-bootstrap";
import { React } from "react";
import Leftbar from "../Leftbar/Leftbar";
import { BrowserRouter, Route } from "react-router-dom";

function Home() {
  return (
    <div>
      <Row className="mr-0"  >
        <Col lg={3} md={4} className="pr-0">
          <Leftbar />
        </Col>
        <Col >
          <BrowserRouter>
            <Route path="/dashboard">Dashboard</Route>
          </BrowserRouter>
          <BrowserRouter>
            <Route path="/weekly">Weekly</Route>
          </BrowserRouter>
          <BrowserRouter>
            <Route path="/monthly">Monthly</Route>
          </BrowserRouter>
        </Col>
      </Row>
    </div>
  );
}

export default Home;

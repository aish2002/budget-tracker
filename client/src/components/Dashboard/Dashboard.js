import { Row, Col } from "react-bootstrap";
import { React } from "react";
import Leftbar from "../Leftbar/Leftbar";
import { Route, Switch } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import Header from "../Header/Header";

const Dashboard = () => {
  const { user } = useUser();
  console.log(user)
  return (
    <div>
      <Row className="mr-3">
        <Col lg={3} className="pr-0">
          <Leftbar />
        </Col>
        <Col>
            <Header/>
            <Switch>
              <Route path="/dashboard" />
              <Route path="/dashboard/weekly" />
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

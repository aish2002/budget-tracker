import { Row, Col } from "react-bootstrap";
import { React} from "react";
import Leftbar from "../Leftbar/Leftbar";
import { Route, Switch } from "react-router-dom";
import SetBudget from "../SetBudget/SetBudget";
function Dashboard() {
  // const user=  useContext(UserContext)
  
  return (
    <div>
      <Row>
        <Col lg={3} className="pr-0">
          <Leftbar />
        </Col>
        <Col>
            <Switch>
              <Route exact path="/dashboard" >dash</Route>
              <Route path="/dashboard/weekly" >weekyl</Route>
              <Route path="/dashboard/setup" > 
                <SetBudget />
              </Route>
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

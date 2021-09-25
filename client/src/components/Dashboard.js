import { Row, Col } from "react-bootstrap";
import { React} from "react";
import Leftbar from "./Leftbar/Leftbar";
import Rightbar from "./Rightbar/Rightbar";
import { Route, Switch } from "react-router-dom";
import SetBudget from "./SetBudget/SetBudget";
import Header from "./Header/Header";
import Activity from "./Activity/Activity";
import Midsection from "./Midsection/Midsection";
import Today from "./Today/Today";
import Monthly from "./Monthly/Monthly";
import Weekly from "./Weekly/Weekly";

const Dashboard = () => {
  return (
    <div>
      <Row className="mr-3">
        <div  className="pr-0">
          <Leftbar />
        </div>
        <Col className="m-4">
            <Switch>
              <Route exact path="/dashboard" >
                <Header/>
                <Midsection/>
              </Route>
              <Route exact path="/dashboard/today" component={Today}/>
              <Route path="/dashboard/weekly" component={Weekly}/>
              <Route path="/dashboard/monthly" component={Monthly}/>
              <Route path="/dashboard/setup" component={SetBudget} /> 
              <Route path="/dashboard/activity" component={Activity} /> 
            </Switch>
          
        </Col>
        <div>
          <Route exact path="/dashboard" component={Rightbar} />
        </div>
      </Row>
     
    </div>
  );
}
export default Dashboard;

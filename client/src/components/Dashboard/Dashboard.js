import { Row, Col } from "react-bootstrap";
import { React} from "react";
import Leftbar from "../Leftbar/Leftbar";
import { Route, Switch } from "react-router-dom";
import SetBudget from "../SetBudget/SetBudget";
import { useUser } from "../hooks/useUser";
import Header from "../Header/Header";
  // const user=  useContext(UserContext)
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
              <Route exact path="/dashboard" />
              {/* <Route path="/dashboard/weekly" /> */}
              <Route path="/dashboard/setup" component={SetBudget} /> 
                
              
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

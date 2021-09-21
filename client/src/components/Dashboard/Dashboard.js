import { Row, Col } from "react-bootstrap";
import { React} from "react";
import Leftbar from "../Leftbar/Leftbar";
import Rightbar from "../Rightbar/Rightbar";
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
        <div  className="pr-0">
          <Leftbar />
        </div>
        <Col className="m-4">
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
        <div>
        <Route exact path="/dashboard" component={Rightbar} />
        
        </div>
      </Row>
    </div>
  );
}
export default Dashboard;

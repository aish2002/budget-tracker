import React,{useState} from "react";
import { Navbar,Nav} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Leftbar.css";

const Leftbar = () => {  
  const [expanded,setExpanded]= useState(false)
  return (
    <Navbar collapseOnSelect className="p-0 m-0 leftnavbar" expand="md" sticky="top" expanded={expanded}>
      
      <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" onClick={() => setExpanded(false)}>
        
        <Nav className="flex-column min-vh-100 sidebar ">
          <Nav.Item className="mb-3">
          <h2 style={{color: "#fff"}}>MoneyFlow</h2>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/dashboard/today">Today</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/dashboard/weekly">This Week</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/dashboard/monthly">Monthly Status</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/dashboard/setup">Set Monthly Budget</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/dashboard/activity">Activity</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Leftbar;

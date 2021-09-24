import React from "react";
import {  ListGroup,Navbar,Nav} from "react-bootstrap";
import { Link } from "react-router-dom";
import { CATEGORIES } from "../../util";
import "./Leftbar.css";

const Leftbar = () => {  
  return (
    <Navbar collapseOnSelect className="p-0 m-0" expand="md" sticky="top">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="flex-column min-vh-100 sidebar ">
          <Nav.Item>
            <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/dashboard/today">Today</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/dashboard/weekly">Weekly Status</Nav.Link>
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

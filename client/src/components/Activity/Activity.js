import React, { useState } from "react";
import { Card, Col, Row, Badge, DropdownButton } from "react-bootstrap";
import { useActivity } from "../../hooks/useActivity";
import moment from "moment";
import { ReactComponent as Sad } from "../../assets/sad.svg";
import { CATEGORIES } from "../../util";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import './Activity.css'

const Activity = () => {
  
  const { filterActivity } = useActivity();
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('')
  const activity = filterActivity(category,date);

  const formatTime = (time) => moment(time).format(`D MMM' YY, HH:mm A`);

  return (
    <Col className="mt-3 ">
      <h1 className="mb-4">Activity</h1>
      <div className="d-flex justify-content-between my-3">
        <h5>
          Filters:{" "}
          {category.length > 0 && <Badge variant="primary" className="p-2">
            <span>{category}</span> <span onClick={() => setCategory('')} className="close">&#215;</span>
          </Badge>}
          {date.length > 0 && <Badge variant="primary" className="p-2">
            {moment(date).format('DD MMM YYYY')} <span onClick={() => setDate('')} className="close">&#215;</span>
          </Badge>}
        </h5>
        <div className="d-flex ">
          <DropdownButton
            menuAlign="right"
            title="Category"
            id="dropdown-menu-align-right"
            className="mx-3"

          >
            {CATEGORIES.map((category) => (
              <DropdownItem key={category} onClick={() => setCategory(category)}>
                {category}
              </DropdownItem>
            ))}
          </DropdownButton>
          <input type="date" min="2021-09-15" value={date} onChange={(e) => setDate(e.target.value)}/>
        </div>
      </div>
      {activity.length === 0 ? (
        <span>
          <Row className="justify-content-center mt-5 pt-5">
            <Sad />
          </Row>
          <Col className="text-center">
            <h5>There is no activity found.</h5>
          </Col>
        </span>
      ) : (
        activity.map((activity) => (
          <Card key={activity._id} className="mb-2">
            <Card.Body className="px-3 py-2">
              <Card.Title className="d-flex justify-content-between">
                <span>{activity.topic}</span>
                <span>
                  {activity.status} {activity.amount}
                </span>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {formatTime(activity.createdAt)}
              </Card.Subtitle>
            </Card.Body>
          </Card>
        ))
      )}
    </Col>
  );
};

export default Activity;

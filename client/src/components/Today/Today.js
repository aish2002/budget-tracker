import React from "react";
import { Card, Col, CardGroup } from "react-bootstrap";
import { useActivity } from "../../hooks/useActivity";
import { VictoryPie } from 'victory';

const Today = () => {
  const { getActivityToday } = useActivity();
  const activity = getActivityToday();

  const sampleData=[
    { x: "Cats", y: 35 },
    { x: "Dogs", y: 40 },
    { x: "Birds", y: 55 }
  ]

  return (
    <Col className="mt-3 ">
      <h1 className="mb-4">Today</h1>
      <CardGroup className="text-center">
        <Card>
          <Card.Body>
            <Card.Title>Expense</Card.Title>
            <Card.Subtitle>120.56</Card.Subtitle>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Income</Card.Title>
            <Card.Subtitle>120.56</Card.Subtitle>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Net</Card.Title>
            <Card.Subtitle>0</Card.Subtitle>
          </Card.Body>
        </Card>
      </CardGroup>
      <hr />
      <VictoryPie
        colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
        data={sampleData}
        />
        <hr/>
      {activity.length === 0 ? (
        <Col>No Activites Today</Col>
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
                {activity.category}
              </Card.Subtitle>
            </Card.Body>
          </Card>
        ))
      )}
    </Col>
  );
};

export default Today;

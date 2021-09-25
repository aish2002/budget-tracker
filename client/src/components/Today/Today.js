import React from "react";
import { Card, Col, CardGroup,Container } from "react-bootstrap";
import { useActivity } from "../../hooks/useActivity";
import moment from "moment";
import { COLORS } from "../../util";
import { Pie } from 'react-chartjs-2';

const Today = () => {
  const { calcExpense, getCategorySummary } = useActivity();
  const { expense, income } = calcExpense('',moment());
  const summary = getCategorySummary(moment())
  const data = {
    labels: summary.map((ele) => ele.name),
    datasets: [
      {
        label: 'Category',
        data: summary.map((ele) => ele.expense),
        backgroundColor: COLORS,
        borderColor: COLORS,
        borderWidth: 1,
      },
    ],
  };
  return (
    <Col className="mt-3 ">
      <h1 className="mb-4 d-flex justify-content-between">
        <span>Today</span>
      </h1>
      <CardGroup className="text-center">
        <Card>
          <Card.Body>
            <Card.Title>Expense</Card.Title>
            <Card.Subtitle>Rs {expense}</Card.Subtitle>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Extra Income</Card.Title>
            <Card.Subtitle>Rs {income}</Card.Subtitle>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Net</Card.Title>
            <Card.Subtitle>Rs {income - expense}</Card.Subtitle>
          </Card.Body>
        </Card>
      </CardGroup>
      <hr />
      <Container fluid className="py-5 px-0">
        <Pie data={data} options={{ maintainAspectRatio: false }} height="450px"/>
      </Container>
    </Col>
  );
};

export default Today;

import React from "react";
import { Card, Col, CardGroup } from "react-bootstrap";
import { useActivity } from "../../hooks/useActivity";
import moment from "moment";
import { VictoryPie, VictoryTooltip } from "victory";
import { COLORS } from "../../util";

const Today = () => {
  const { calcExpense, getActivitySummary } = useActivity();
  const { expense, income } = calcExpense(moment());

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
      <VictoryPie
        colorScale={COLORS}
        data={getActivitySummary(moment())}
        x="name"
        y="amount"
        labels={({ datum }) => `${datum.name} - ${datum.amount} `}
        labelComponent={
          <VictoryTooltip
            style={{ fill: "#fff" }}
            flyoutPadding={10}
            flyoutStyle={{
              stroke: "#9072C2",
              fill: "#9072C2",
            }}
          />
        }
      />
    </Col>
  );
};

export default Today;

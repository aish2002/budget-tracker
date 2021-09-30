import React from "react";
import { Card, Image, Row, Col, CardDeck } from "react-bootstrap";
import { useBudget } from "../../hooks/budget";
import { useActivity } from "../../hooks/useActivity";
import "./Midsection.css";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Piggy from "../../assets/savings.png";
import DonutChart from "react-donut-chart";
import { DONUTCOLOR } from "../../util";

const Midsection = () => {
  const budget = useBudget();
  const { calcExpense, topCategories } = useActivity();
  const { expense, income } = calcExpense("", "month");
  const expenses = topCategories("month");

  const savings = budget.income + income - expense;
  const color =
    savings > budget.savings
      ? "#4bb543"
      : savings === budget.savings
      ? "#ff9933"
      : "#aa160d";
  const message =
    color === "#4bb543"
      ? `You can spend a maximum of Rs ${budget.budget + income - expense}`
      : color === "#aa160d"
      ? `Oops! Looks like you've crossed your budget `
      : `It's time to stop spending!`;

  return (
    <Col>
      
        <CardDeck>
        <Card className="border-0 p-0 mr-0 cardsec">
          <Card className="text-center my-2">
            <Card.Body className="d-flex flex-column justify-content-center">
              <Card.Text>INCOME</Card.Text>
              <h4>Rs {budget.income}</h4>
            </Card.Body>
          </Card>
          <Card className="text-center my-2">
            <Card.Body className="d-flex flex-column justify-content-center">
              <Card.Text>TARGET SAVINGS</Card.Text>
              <h4>Rs {budget.savings}</h4>
            </Card.Body>
          </Card>
        </Card>
        <Card className="border-0 p-0 ml-0 cardsec">
          <Card className="midcard text-center my-1">
            <Card.Body className="py-3">
              <div>TOTAL EXPENSES</div>
              <h4>Rs {expense}</h4>
            </Card.Body>
          </Card>
          <Card className="midcard text-center my-1">
            <Card.Body className="py-3">
              <div>EXTRA INCOME</div>
              <h4>Rs {income}</h4>
            </Card.Body>
          </Card>
          <Card className="midcard text-center my-1">
            <Card.Body className="py-3">
              <div>CURRENT BUDGET</div>
              <h4>Rs {budget.budget + income - expense}</h4>
            </Card.Body>
          </Card>
        </Card>
        </CardDeck>
      
      <Row className="my-4">
        <Col>
          <h5 className="text-center" style={{ color: `${color}` }}>
            {message}
          </h5>
          <div className="d-flex justify-content-center mt-4 ">
            <CircularProgressbarWithChildren
              className="mt-3"
              value={savings}
              maxValue={budget.savings}
              styles={buildStyles({
                strokeLinecap: "butt",
                pathColor: `${color}`,
                pathTransitionDuration: 0.5,
                textColor: "#f88",
                trailColor: "#d6d6d6",
                backgroundColor: "#3e98c7",
              })}
            >
              <Image
                className="savings mt-5 mr-5"
                src={Piggy}
                responsive="true"
              />
            </CircularProgressbarWithChildren>
          </div>
          <div className="text-center mt-4 ml-4 ">
            <div className="mr-4">
              CURRENT SAVINGS <br />
              <h5>Rs {savings}</h5>
            </div>
          </div>
        </Col>
        <Col>
          <h5 className="mb-4">Most Spent Categories</h5>
          {expenses.map((exp, index) => (
            <Card key={index} className="my-3">
              <Card.Body className="p-3 d-flex justify-content-between">
                <DonutChart
                  data={[
                    {
                      value: exp.expense,
                      label: "",
                    },
                    {
                      value: expense - exp.expense,
                      label: "",
                    },
                  ]}
                  height={50}
                  width={50}
                  formatValues={() => ""}
                  startAngle={270}
                  legend={false}
                  colors={[DONUTCOLOR[index], DONUTCOLOR[index + 3]]}
                />
                <Col>
                  <h6>{exp.name}</h6>
                  <h6>{exp.expense}</h6>
                </Col>
                <div className="mt-3">
                  {`${((exp.expense / expense) * 100).toFixed(2)}%`}{" "}
                </div>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Col>
  );
};

export default Midsection;

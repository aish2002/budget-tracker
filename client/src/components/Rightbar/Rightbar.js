import React from "react";
import { Card, Col, Button, Container, CardGroup } from "react-bootstrap";
import DonutChart from "react-donut-chart";
import { useBudget } from "../../hooks/budget";
import { useActivity } from "../../hooks/useActivity";

const Rightbar = () => {
  const colr = [
    "#ff0000",
    "#005266",
    "#993300",
    "#ffe6f9",
    "#b3f0ff",
    "#ffccb3",
  ];
  const budget = useBudget();
  const { calcExpense,topCategories } = useActivity();
  const { expense } = calcExpense("", "month");
  const expenses = topCategories("month");

  return (
    <Container> 
        <Button
        variant="secondary"
        className="mt-5 p-4 pr-5 pl-5 ml-5 setbudget"
        href="/dashboard/setup">
        SetUp Monthly Budget
        </Button>
        <h5 className="my-3">Data </h5>
        <CardGroup>
          <Card className='mr-2'>
            <Card.Body>
                <Card.Title>INCOME</Card.Title>
                <Card.Subtitle>Rs {budget.income}</Card.Subtitle>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body >
                <Card.Title>TARGET <br /> SAVINGS</Card.Title>
                <Card.Subtitle>Rs {budget.savings}</Card.Subtitle>
            </Card.Body>
          </Card>
        </CardGroup>
        <h5 className="my-3">Most Spent Categories</h5>
        {expenses.map((exp, index) => (
            <Card style={{ width: "24rem" }} key={index} className="my-2">
              <Card.Body className="p-3 d-flex justify-content-between">
                <DonutChart
                    data={[
                    {
                        value: exp.expense,
                        label: '',
                    },
                    {
                        value: expense - exp.expense,
                        label: '',
                    },
                    ]}
                    height={50}
                    width={50}
                    formatValues={() => ""}
                    startAngle={270}
                    legend={false}
                    colors={[colr[index], colr[index + 3]]}
                />
                <Col>
                <h6>
                    {exp.name}
                </h6>
                <h6>{exp.expense}</h6>
                </Col>
                <div className="mt-3">
                    {`${((exp.expense / expense) * 100).toFixed(2)}%`}{" "}
                </div>
              </Card.Body>
            </Card>
        ))}
      
    </Container>
  );
};

export default Rightbar;

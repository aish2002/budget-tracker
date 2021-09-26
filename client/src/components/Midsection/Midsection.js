import React from "react";
import { Card, CardGroup,Image } from "react-bootstrap";
import { useBudget } from "../../hooks/budget";
import { useActivity } from "../../hooks/useActivity";
import "./Midsection.css";
import { CircularProgressbarWithChildren,buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Piggy from "../../assets/savings.png"

const Midsection = () => {
  const budget = useBudget();
  const { calcExpense} = useActivity();
  const {expense,income} = calcExpense('','month');
  const percentage=66
  const savings=budget.income+income-expense;
  const color =savings>budget.savings?"green":savings===budget.savings?"orange":"red";
  const message=
     color==="green"?`You can spend a maximum of Rs ${budget.budget+income-expense}`:
     color==="red"?`Oops! Looks like you've crossed your budget `:
     `It's time to stop spending!`

  return (
    <>
    <CardGroup className="mt-4">
      
      <Card className="m-4 midcard text-center">
        <Card.Body>
          <div className="my-4">TOTAL EXPENSES</div> <h5>Rs {expense}</h5>
        </Card.Body>
      </Card>
      <Card className="m-4 midcard text-center">
        <Card.Body>
          <div className="my-4">EXTRA INCOME</div><h5> Rs {income} </h5>
        </Card.Body>
      </Card>
      <Card className="m-4 midcard text-center">
        <Card.Body>
          <div className="my-4">CURRENT BUDGET</div> <h5> Rs {budget.budget+income-expense}</h5>
        </Card.Body>
      </Card>
    </CardGroup>
    <h5 className="text-center"style={{color:`${color}`}}>{message}</h5>

    <div className="d-flex justify-content-center mt-4 ">
    <CircularProgressbarWithChildren className="mt-3"
  value={savings}
  maxValue={budget.income+budget.budget+income-expense}
  styles={buildStyles({
    strokeLinecap: 'butt',
    pathColor: `${color}`,
    pathTransitionDuration: 0.5,
    textColor: '#f88',
    trailColor: '#d6d6d6',
    backgroundColor: '#3e98c7',
  })}
><Image className="savings mt-5 mr-5" src={Piggy}  responsive/></CircularProgressbarWithChildren>

</div>
<div className="text-center mt-4 ml-4 ">
  <div className="mr-4">CURRENT SAVINGS <br/><h5>Rs {savings}</h5></div> 
</div>
  </>
  );
};

export default Midsection;
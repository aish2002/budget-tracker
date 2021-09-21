import React, { useState, useEffect } from "react";
import { Form, Button,Alert, Card } from "react-bootstrap";
import axios from "axios";
import { useBudget } from "../../hooks/budget";

function SetBudget() {
  const id ="614473139a35ae5e56466c60"
  const data = useBudget(id);
  
  const [budgets,setBudgets]=useState(data)
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    console.log(data)
    console.log(budgets)
    setBudgets({
      ...budgets,
      [e.target.name]: parseFloat(e.target.value)
    });

  };
  const handleSetBudget = (e) => {
    e.preventDefault();
    console.log(budgets.income-budgets.savings)
    setBudgets({
      ...budgets,
      budget: budgets.income - budgets.savings
    });
    console.log(budgets.budget)

    axios
      .post("/api/setbudget", budgets)
      .then((res) => {
        
        setMessage(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      
      <Form
        className="mt-5  w-50 w-responsive  mx-3  "
        onSubmit={handleSetBudget}
        
      >
        <h1 className="font_xl my-5 mx-2 ">Set Your Budget for this Month </h1>
        <Form.Label> Income </Form.Label>
        <Form.Control
          placeholder={budgets.income}
          name="income"
          onChange={handleChange}
          required
        />
        <br />
        <Form.Label> Target Savings </Form.Label>
        <Form.Control
          placeholder={budgets.savings}
          name="savings"
          onChange={handleChange}
          required
        />

        <Button variant="primary" type="submit" block className="mt-5">
          Set Budget
        </Button>        
      </Form>
      <Card className="w-fit-content mt-5">
          <Card.Body>BUDGET FOR THE MONTH  {budgets.budget} </Card.Body>
        </Card>
      {message && <Alert variant="success"  className="mt-5" style={{width:"fit-content"}}>
      
        <p>
          {message}
        </p>
      </Alert>}
    </>
  );
}

export default SetBudget;

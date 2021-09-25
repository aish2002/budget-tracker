import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import axios from "axios";
import { useBudget } from "../../hooks/budget";
import { useUser } from "../../hooks/useUser";

function SetBudget() {
  const {user} =useUser()
  const data = useBudget();
  const [budgets, setBudgets] = useState({
    userid: data.userid,
    income: 0.0,
    savings: 0.0,
  });
  
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    console.log(e.target.value)
    setBudgets({
      ...budgets,userid:user.id,
      [e.target.name]: parseFloat(e.target.value),
    });
  };
  const handleSetBudget = (e) => {
    e.preventDefault();
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
        className="mt-5 mx-3  "
        onSubmit={handleSetBudget}
      >
        <h1 className="font_xl my-5 mx-2 ">Set Your Budget for this Month </h1>
        <Form.Label> Income </Form.Label>
        <Form.Control
          placeholder={data.income}
          name="income"
          onChange={handleChange}
          required
        />
        <br />
        <Form.Label> Target Savings </Form.Label>
        <Form.Control
          placeholder={data.savings}
          name="savings"
          onChange={handleChange}
          required
        />

        <Button variant="primary" type="submit" block className="mt-5" >
          Set Budget
        </Button>
      </Form>
      
      {message && (
        <Alert
          variant="success"
          className="mt-5"
          style={{ width: "fit-content" }}
        >
          <p>{message}</p>
        </Alert>
      )}
    </>
  );
}

export default SetBudget;

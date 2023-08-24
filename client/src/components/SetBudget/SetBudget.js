import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import axios from "axios";
import { useBudget } from "../../hooks/budget";
import { useUser } from "../../hooks/useUser";
import "./SetBudget.css";

function SetBudget() {
  const { user } = useUser();
  const data = useBudget();
  const [budgets, setBudgets] = useState({
    userid: data.userid,
    income: 0.0,
    savings: 0.0,
  });

  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    console.log(e.target.value);
    setBudgets({
      ...budgets,
      userid: user.id,
      [e.target.name]: parseFloat(e.target.value),
    });
  };
  const handleSetBudget = (e) => {
    e.preventDefault();
    axios
      .post("https://budgetrack.onrender.com/api/setbudget", budgets)
      .then((res) => {
        setMessage(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
        <h2 className=" my-5 mx-2 text-center ">Set Your Budget for this Month </h2>
     
      <div className='d-flex justify-content-center'>
      <Form className="mt-5 mx-3 setform"  onSubmit={handleSetBudget}>
        <Form.Label className="setuplabel"> Income </Form.Label>
        <Form.Control size="lg"
          placeholder={data.income}
          name="income"
          onChange={handleChange}
          required
        />

        <br />
        <Form.Label className="setuplabel"> Target Savings </Form.Label>
        <Form.Control size="lg"
          placeholder={data.savings}
          name="savings"
          onChange={handleChange}
          required
        />
        <div className="d-flex justify-content-center">
          <Button variant="primary" type="submit" className="mt-5 setup">
            Set Budget
          </Button>
        </div>
      </Form>
      </div>
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

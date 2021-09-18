import React from 'react'
import { Form } from 'react-bootstrap';


function SetBudget({data}){

    const[budget,setBudget]=useState({
      "income": data.income || 0.00,
      "savings": data.savings || 0.00,
      "budget":data.budget || 0.00,
    })

    const handleChange=(e)=>{
        setBudget({
          ...budget,[e.target.name]:parseFloat(e.target.value), [budget.budget]:budget.income-budget.savings
        })
    }
    return (    
            <Form className="mt-4" onSubmit={handleSetBudget}>
              <Form.Label> INCOME </Form.Label>
              <Form.Control
                
                placeholder="Income"
                name="income"
                value ={budget.income}
                onChange={handleChange}
                required
              />
              <br />
              <Form.Label> Target Savings </Form.Label>
              <Form.Control
                placeholder="Target Savings"
                name="savings"
                value ={budget.savings}
                onChange={handleChange}
                required
              />
              
              <Button variant="primary" type="submit" block>
                Track My Expenses
              </Button>
            </Form>
          
      );
}

export default SetBudget;
import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import { useBudget } from "../hooks/budget";
import { useActivity } from "../hooks/useActivity";
import { useUser } from "../hooks/useUser";
import "./Midsection.css";

export const Midsection = () => {
  const { user } = useUser();
  const budget = useBudget();
  const expense = useActivity();

  return (
    <CardGroup className="mt-4">
      <Card className="m-4 midcard text-center">
        <Card.Body>
          <div className="mb-4">MONTHLY BUDGET</div> Rs {budget.budget}
        </Card.Body>
      </Card>
      <Card className="m-4 midcard text-center">
        <Card.Body>
          <div className="mb-4">TOTAL EXPENSES</div> Rs {budget.budget}
        </Card.Body>
      </Card>
    </CardGroup>
  );
};

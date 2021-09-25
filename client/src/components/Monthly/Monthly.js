import React from "react";
import { Container } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import { useActivity } from "../../hooks/useActivity";
import moment from "moment";

const Monthly = () => {
   const { getMonthSummary } =  useActivity();
   const summary = getMonthSummary('',moment())
    
   const data = {
    labels: summary.map(ele => ele.day),
    datasets: [
      {
        label: "Expense",
        data: summary.map(ele => ele.expense),
        fill: false,
        backgroundColor: "#333333",
        borderColor: "#333333",
        pointHoverBackgroundColor: "#082D39",
        tension: 0.1,
        borderWidth: 3,
      },
      {
        label: "Income",
        data: summary.map(ele => ele.income),
        fill: false,
        backgroundColor: "#4287f5",
        borderColor: "#4287f5",
        pointHoverBackgroundColor: "#4287f5",
        tension: 0.1,
        borderWidth: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, 
    plugins: {
      tooltip: {
        backgroundColor: "#fff",
        displayColors: true,
        titleColor: "#082D39",
        bodyColor: "#082D39",
        padding: 12,
      },
    },
  };

   return (
    <div>
      <h1>Monthly Status</h1>
      <Container fluid className="py-5 px-0">
        <Line  data={data} options={options} />
      </Container>
    </div>
  );
};

export default Monthly;

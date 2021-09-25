import React from "react";
import { Container } from "react-bootstrap";
import { Line,Bar } from "react-chartjs-2";
import { useActivity } from "../../hooks/useActivity";

const Weekly = () => {
    const { getWeekSummary } =  useActivity();
    const summary = getWeekSummary('')
     
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
      <h1>Weekly Status</h1>
      <Container fluid className="py-5 px-0">
        <Bar  data={data} options={options} height="500px"/>
      </Container>
    </div>
  );
};

export default Weekly;

import React,{useState} from "react";
import { Container,Col,Form} from "react-bootstrap";
import { Line } from "react-chartjs-2";
import { useActivity } from "../../hooks/useActivity";
import moment from "moment";
import { CATEGORIES, OPTIONS } from "../../util";

const Monthly = () => {
   const { getMonthSummary } =  useActivity();
   const [category, setCategory] = useState('');
   const summary = getMonthSummary(category,moment())

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

   return (
    <div>
      <div className="d-flex justify-content-between">
        <Col><h1>Monthly Status</h1></Col>
        <Col>
        <Form.Control as="select" onChange={(e) => setCategory(e.target.value)}>
            {CATEGORIES.map((category) => (
              <option key={category} onClick={() => setCategory(category)}>
                {category}
              </option>
            ))}
        </Form.Control>
        </Col>
        </div>
      <Container fluid className="py-5 px-0">
        <Line  data={data} options={OPTIONS} height="500px"/>
      </Container>
    </div>
  );
};

export default Monthly;

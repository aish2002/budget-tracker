import moment from "moment";
import React,{useState} from "react";
import { Container,Col,Form} from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import { useActivity } from "../../hooks/useActivity";
import { CATEGORIES, OPTIONS } from "../../util";

const Weekly = () => {
    const { getWeekSummary } =  useActivity();
     const [category, setCategory] = useState('')
     const summary = getWeekSummary(category)
   
    const data = {
     labels: summary.map(ele => moment(ele.day).format('DD MMM YY')),
     datasets: [
       {
         label: "Expense",
         data: summary.map(ele => ele.expense),
         fill: false,
         backgroundColor: "#2b223a",
         borderColor: "#2b223a",
         pointHoverBackgroundColor: "#ffffff",
         tension: 0.1,
         borderWidth: 3,
       },
       {
         label: "Income",
         data: summary.map(ele => ele.income),
         fill: false,
         backgroundColor: "#8267af",
         borderColor: "#8267af",
         pointHoverBackgroundColor: "#ffffff",
         tension: 0.1,
         borderWidth: 3,
       },
     ],
   };
 
  return (
    <div>
      <div className="d-flex justify-content-between">
        <Col><h2>This Week</h2></Col>
        <Col>
        <Form.Control as="select" onChange={(e) => setCategory(e.target.value)}>
            <option value=''>All</option>
            {CATEGORIES.map((category) => (
              <option key={category}>
                {category}
              </option>
            ))}
        </Form.Control>
        </Col>
        </div>
      <Container fluid className="py-5 px-0">
        <Bar  data={data} options={OPTIONS} height="500px"/>
      </Container>
    </div>
  );
};

export default Weekly;

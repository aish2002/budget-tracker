import React from 'react';

import {Card, Row, Col ,Button,Container} from "react-bootstrap";
import DonutChart from 'react-donut-chart';
 
const Rightbar=() => {
    let expenses=[{category: 'Food', expense:300},
                  {category: 'Transport', expense:80},
                  {category: 'Studies', expense:100},
                  {category: 'Other', expense:20}];
    expenses=expenses.slice(0,3);
    const colr=["#ff0000","#005266","#993300","#ffe6f9","#b3f0ff","#ffccb3"];
    const tot=500;

    const sortByExpense = (a,b) => {
        if(a.expense > b.expense)
            return -1;
        else if(a.expense === b.expense)
            return 0;
        else return 1;
    }

        return (
            <>
            <Container className="float-right m-3" style={{ width: '25rem' }}>
            <div >
            <Row className="ml-2" >
                <Button variant="secondary"  className="mt-5 p-4 pr-5 pl-5 ml-5">
                    SetUp Monthly Budget
                </Button>
            </Row>
            <Row>
                <h5 className="mt-4">Monthly overview</h5>
            </Row>
            <Row className=" ">
                <Card className="p-2 m-3 pr-4 pl-4 ml-2">
                    <Card.Body className="">
                        <div>EXPENSE</div>
                        <div className="mt-4"><h5>$120.56</h5></div>
                    </Card.Body>
                </Card>
                <Card className="p-2 m-3 pr-4 pl-4">
                    <Card.Body className="">
                        <div>INCOME</div>
                        <div className="mt-4"><h5>$120.56</h5></div>
                    </Card.Body>
                </Card>
            </Row>
            <Row>
            <h5 className="mt-3 mb-3">Expenses by Category</h5>
            </Row>
                {expenses.map((exp,index) => ( 
                <Row className="mt-2">
                    <Card style={{ width: '24rem' }}>
                        <Card.Body className="p-3">
                            <Row  className="" >
                                <Col className=""><DonutChart
                                        data={[{
                                            value: exp.expense, 
                                        },{
                                            value:tot- exp.expense,   
                                        },]}
                                        height={50}
                                        width={50}
                                        formatValues={(values, total) => ""}
                                        startAngle={270}
                                        legend={false}
                                        colors={[colr[index],colr[index+3]]} />
                                </Col>
                                <Col xs={6} className="p-0">
                                    <h6>{exp.category}<br/></h6>
                                    <h6>{exp.expense}</h6>
                                </Col>
                                <Col className="mt-3">{`${(exp.expense / tot * 100).toFixed(2)}%`} </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Row>
                ))}
            </div>
            </Container>
            </>
        );
}

export default Rightbar;
import React from 'react';
import { Card,Col,Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useActivity } from '../../hooks/useActivity';
import moment from "moment";
import { ReactComponent as Sad} from '../../assets/sad.svg';
 
const Category=() => {
    const { category } = useParams();
    const { getActivityByCategory } = useActivity();
    const activity = getActivityByCategory(category)
    
    const formatTime = (time) => 
        moment(time).format(`D MMM' YY, HH:mm A`)

    return (
        <Col className="mt-3 ">
            <h1 className="mb-4">{category}</h1>
            {activity.length === 0 ?
                <span>
                    <Row className="justify-content-center">   
                        <Sad/>
                    </Row>
                    <Col className="text-center">
                    <h5>There is no activity found.</h5>
                    </Col>
                </span>
            : activity.map(activity => 
                <Card key={activity._id} className="mb-2">
                    <Card.Body className="px-3 py-2">
                        <Card.Title className="d-flex justify-content-between">
                            <span>{activity.topic}</span>
                            <span>{activity.status} {activity.amount}</span>
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{formatTime(activity.createdAt)}</Card.Subtitle>
                    </Card.Body>
                </Card>
            )}
        </Col>
    );
}

export default Category;
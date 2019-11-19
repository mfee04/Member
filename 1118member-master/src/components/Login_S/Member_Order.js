import React, { Component } from 'react';
import {
    ListGroup,
    Container,
    Accordion,
    Button,
    Form,
    Card,
    Row,
    Col
} from 'react-bootstrap';
import MemberList from './MemberList';
import Member_account from './Member_Account'
import Navigation_Navber from '../Navigation_Navber/Navigation_Navber'
import Footer from '../Navigation_Navber/Footer'

class Member_Order extends Component {
    render() {
        return (
            <>

        
                    <Col lg={9}  >
                            <br />
                            <h1>訂單</h1>
                            <hr />
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                    訂單編號:00001    </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        訂單內容
                                    <Button type="submit">取消訂單</Button>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                    訂單編號:00002    </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        訂單內容
                                    <Button type="submit">取消訂單</Button>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Col>
             
            </>
        );
    }
}

export default Member_Order; 
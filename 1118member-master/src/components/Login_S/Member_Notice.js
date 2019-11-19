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

import Navigation_Navber from '../../components/Navigation_Navber/Navigation_Navber'
import Footer from '../../components/Navigation_Navber/Footer'

class Member_Notice extends Component {
    render() {
        return (
            <>
          

                    <Col lg={9} >
                    <br />
                            <h1>活動資訊</h1>
                            <hr />
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                    活動快訊    </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        活動內容
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                    系統公告    </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        公告內容
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Col>
        
            </>
        );
    }
}

export default Member_Notice;
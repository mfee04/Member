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
import MemberList from '../Login_S/MemberList';
import Member_Card from '../Login_V/Member_Card'
import Navigation_Navber from '../../components/Navigation_Navber/Navigation_Navber'
import Footer from '../../components/Navigation_Navber/Footer'


class Member_Order extends Component {
    render() {
        return (
            <>
            
                                <Col lg={12}  >
                                        <br />
                                        <h1>優惠卷</h1>
                                        <hr />
                                        </Col>
              
                <Row >
                <Member_Card/>
                <Member_Card/>
                <Member_Card/>
                <Member_Card/>
                   </Row>
                   
                    
             
            </>
        );
    }
}

export default Member_Order; 
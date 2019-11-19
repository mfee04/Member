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
import Navigation_Navber from '../../components/Navigation_Navber/Navigation_Navber'
import Footer from '../../components/Navigation_Navber/Footer'



class Member_Order extends Component {
    render() {
        return (
           <>
                                <Col lg={9}  >
                                        <br />
                                        <h1>會員等級:一般會員</h1>
                                        <hr />
                                    
                                    <Card  style={{ width: '100%','background-image': 'linear-gradient(90deg,#f6dcb9,#eda894)'}}>
            <Card.Body>
            <Row>
                    <Col >
              <Card.Text className="text-center" style={{'border-right':'1px solid #FFF'}}>
               <h5>可使用紅利</h5>    
                <p style={{'color':'red'}} >7點</p>
              </Card.Text>
              </Col>
              <Col lg={6}  >
              <Card.Text className="text-center" >
               <h5>已使用紅利</h5>    
                <p>0點</p>
              </Card.Text>
              </Col>
                </Row>
           
            </Card.Body>
          </Card>
                                </Col>
                        </>
        );
    }
}

export default Member_Order; 
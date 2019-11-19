import React, { Component } from 'react';
import {
    ListGroup,
    Container,
    Accordion,
    Button,
    Form,
    Card,
    Row,
    Col,
    Table
} from 'react-bootstrap';
import MemberList from '../Login_S/MemberList';
import Navigation_Navber from '../Navigation_Navber/Navigation_Navber'
import Footer from '../Navigation_Navber/Footer'



class Member_Share extends Component {
   
    render() {
        return (
            <>
           
                                <Col lg={9}  >
                                        <br />
                                        <h1>訂閱的文章</h1>
                                        <hr />
                                 
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                            主題   
                                            </Accordion.Toggle>
                                          
                                                <Card.Body>
                                                <Table striped bordered hover>
  <thead>
    <tr>
      <th></th>
      <th>標題 </th>
      <th>分區</th>
      <th>最後回應時間</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>紅酒的文化</td>
      <td>文章分享</td>
      <td>2019-01-01</td>
    </tr>
    <tr>
      <td>2</td>
      <td>酒杯的挑選</td>
      <td>酒具介紹</td>
      <td>2019-01-01</td>
    </tr>
    <tr>
    <td>3</td>
      <td>品酒三步驟</td>
      <td>文章分享</td>
      <td>2019-01-01</td>
    </tr>
  </tbody>
</Table>
                                                </Card.Body>
                                            
                                        </Card>
                                     
                                    
                                </Col>
                         
                        </>
        );
    }
}

export default Member_Share; 
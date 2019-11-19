import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom"
import {
  ListGroup,
  Container,
  Accordion,
  Button,
  Form,
  Card,
  Row,
  Col,
  Table,
  Nav,
  Tab,
  TabContainer,
  Tabs

} from 'react-bootstrap';
import Member_Account from '../Login_S/Member_Account'
import MemberList from '../Login_S/MemberList';
import Navigation_Navber from '../Navigation_Navber/Navigation_Navber'
import Footer from '../Navigation_Navber/Footer'
import Member_Order from '../Login_S/Member_Order';
import Member_Information2 from '../Login_S/Member_Information2';
import Member_Events from './Member_Events'
import Member_Notice from '../Login_S/Member_Notice'
import Member_Coupon from './Member_Coupon'
import Member_Point from './Member_Point'
import Member_Share2 from './Member_Share2'


class Member_Share extends Component {
  render() {
    return (
      <>
        {/* <h1>現在時間是{this.state.time}</h1> */}
        <Navigation_Navber />
        <Container>
          <Row>
            {/* <MemberList /> */}

            <Tab.Container  id="left-tabs-example" defaultActiveKey="first">

              <Col sm={3} style={{ 'margin-bottom': '13rem' }}>
                <Member_Account />
                <Nav variant="pills" className="flex-column ">
                  <Nav.Item >
                    <Nav.Link eventKey="first">
                      個人資料
          </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">
                      我的訂單
          </Nav.Link></Nav.Item>
          <Nav.Item>
          <Nav.Link eventKey="3">
                       公告通知<span className="badge badge-pill badge-danger " >4</span>
          </Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link eventKey="4">
          我的優惠
          </Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link eventKey="5">
          會員紅利   
          </Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link eventKey="6">
          文章
          </Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link eventKey="7">
          活動<span className="badge badge-pill badge-danger " style={{}}>1</span>
          </Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link  href="/" >
       登出
          </Nav.Link>
          </Nav.Item>
                  
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>

                  <Tab.Pane eventKey="first">
                    <Member_Information2 />
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Member_Order />
                  </Tab.Pane>
                  <Tab.Pane eventKey="3">
                    <Member_Notice />
                  </Tab.Pane>
                  <Tab.Pane eventKey="4">
                    <Member_Coupon />
                  </Tab.Pane>
                  <Tab.Pane eventKey="5">
                    <Member_Point />
                  </Tab.Pane>
                  <Tab.Pane eventKey="6">
                  <Member_Share2/>
                  </Tab.Pane>
                  <Tab.Pane eventKey="7">
                    <Member_Events />
                  </Tab.Pane>
                  <Tab.Pane eventKey="8">
                 
                  </Tab.Pane>

                </Tab.Content>
              </Col>

            </Tab.Container>



          </Row>
        </Container>

        <Footer />
      </>
    );
  }
}

export default Member_Share; 
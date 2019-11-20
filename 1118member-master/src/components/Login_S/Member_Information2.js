import React, { Component } from 'react';
import {
    Container,
    Button,
    Form,
    Row,
    Col
} from 'react-bootstrap';

import MemberList from './MemberList';

import Navigation_Navber from '../Navigation_Navber/Navigation_Navber'
import Footer from '../Navigation_Navber/Footer'

class Member_Information extends Component {
    render() {
        return (
          <>
                        <Col lg={9} >
                            <br />
                            <h1>基本資料</h1>
                            <hr />
                            
                            {/* 電子信箱 */}
                            <Form.Group as={Row} controlId="formHorizontalEmail">
                                <Form.Label column sm={2}>
                                    Email
                            </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="email" placeholder="Email" />
                                </Col>
                            </Form.Group>

                            {/* 密碼 */}
                            <Form.Group as={Row} controlId="formHorizontalPassword">
                                <Form.Label column sm={2}>
                                    Password
                            </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="password" placeholder="Password" />
                                </Col>
                            </Form.Group>

                            {/* 姓名 */}
                            <Form.Group as={Row} controlId="">
                                <Form.Label column sm={2}>
                                    姓名
                            </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="" placeholder="name" />
                                </Col>
                            </Form.Group>

                            {/* 性別 */}
                            {/* <fieldset>
                                <Form.Group as={Row}>
                                    <Form.Label as="legend" column sm={2}>
                                        性別
                                </Form.Label>
                                    <Col sm={10}>
                                        <Form.Check
                                            type="radio"
                                            label="男性"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios1"
                                        />
                                        <Form.Check
                                            type="radio"
                                            label="女性"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios2"
                                        />

                                    </Col>
                                </Form.Group>
                            </fieldset> */}

                            {/* 身分證字號 */}
                            <Form.Group as={Row} controlId="formGridAddress1">
                                <Form.Label column sm={2}>
                                    身分證字號
                             </Form.Label>
                                <Col sm={10}>
                                    <Form.Control placeholder="A123456789" />
                                </Col>
                            </Form.Group>

                            {/* 出生日期 maybe use datepicker  */}
                            <Form.Group as={Row} controlId="formGridAddress1">
                                <Form.Label column sm={2}>
                                    出生年月日
                             </Form.Label>
                                <Col sm={10}>
                                    <Form.Control placeholder="2019-09-09" />
                                </Col>
                            </Form.Group>

                            {/* 行動電話 */}
                            <Form.Group as={Row} controlId="formGridAddress1">
                                <Form.Label column sm={2}>
                                    行動電話
                            </Form.Label>
                                <Col sm={10}>
                                    <Form.Control placeholder="0999999999" />
                                </Col>
                            </Form.Group>

                            {/* 地址 */}
                            <Form.Group as={Row} controlId="formGridAddress1">
                                <Form.Label column sm={2}>
                                    地址
    </Form.Label>
                                <Col sm={10}>
                                    <Form.Control placeholder="台北市中山區龍江路99巷99號" />
                                </Col>
                            </Form.Group>
                            <br />
                            <hr />

                            {/* 送出-清除 */}
                            <Form.Group as={Row}>
                                <Col sm={{ span: 4, offset: 2 }}>
                                    <Button type="submit" style={{ 'margin-right': 20 }}>修改</Button>
                                    
                                </Col>

                            </Form.Group>
                        </Col>
               
                </>
        );
    }
}

export default Member_Information;
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import {
    Container,
    Button,
    Form,
    Row,
    Col
} from 'react-bootstrap';
import Navigation_Navber from '../../components/Navigation_Navber/Navigation_Navber'
import Footer from '../../components/Navigation_Navber/Footer'

class Member_Register extends React.Component {
    constructor(props) {
        super(props)
        // 這個狀態只是決定要不要重新導向
        this.state = {
            users: [],
            error: null,
            redirectToReferrer: false,
            username: '',
            password: '',
            name:'',
            id_card: '',
            email: '',
            mobile: '',
            birthday: '',
            address: '',
        }
    }

    postAddMember = () => {
        // const url = 'http://localhost:5555/users'
        const url = 'http://localhost:8000/users'
        this.requestToServer(
            url,
            'post',
            {
                name: this.state.name,
                username: this.state.username,
                password: this.state.password,
                id_card: this.state.id_card,
                email: this.state.email,
                mobile: this.state.mobile,
                birthday: this.state.birthday,
                address: this.state.address,
            },
            this.signup
        )
    }

    requestToServer = (url, post, data = {}, callback) => {
        // GET方法不有body，先設定出樣版物件
        const requestTemplate = new Request(url, {
            method: post,
            headers: new Headers({
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }),
        })

        let req = requestTemplate

        // 如果不是GET再加上body
        if (post !== 'GET')
            req = new Request(requestTemplate, { body: JSON.stringify(data) })

        fetch(req)
            .then(response => {
                // 直接轉換JSON格式為物件、字串、數字…
                return response.json()
            })
            .then(jsonObject => {
                // jsonObject會是一個JavaScript物件

                console.log(jsonObject)
            })
            .catch(error => {
                // Error
                this.setState({ result: error })
                console.log('錯誤訊息', error)
            })
    }

    signup = () => {
        if (!this.state.username) {
            alert('帳號為必填！')
            return
        }

        if (!this.state.password) {
            alert('密碼為必填！')
            return
        }
        console.log(this.state)
        console.log(typeof this.state.users)

        // 因為node express呈現的資料格式是users包users內的資料,故需要多包一層users ex: this.state.users.user
        const userFindDataIndex = this.state.users.findIndex(
            user => user.username === this.state.username
        )
        console.log(userFindDataIndex)

        if (userFindDataIndex !== -1) {
            alert('已註冊的帳號！')
            return
        }

        // if (
        //   this.state.users.users[userFindDataIndex].password !== this.state.password
        // ) {
        //   alert('密碼錯誤！')
        //   return
        // }

        this.props.authenticate(() => {
            this.setState({ redirectToReferrer: true })
        })
    }

    // 可控元件通用
    handleChange = event => {
        this.setState({
            // 物件屬性由計算得來
            [event.target.name]: event.target.value,
        })
    }
    render() {

        let { from } = this.props.location.state || { from: { pathname: '/' } }
        let { redirectToReferrer } = this.state

        // 作重新導向，回到上一頁(如果有記錄的話)，或是首頁(如果沒記錄的話)
        if (redirectToReferrer) return <Redirect to={from} />

        return (
            <>
                <Navigation_Navber />
                <div>
                    <Container>
                        <br />
                        <h1>註冊</h1>
                        <hr />
                        {/* 電子信箱 */}
                        <Form.Group as={Row} controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>
                                Email
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    type="email"
                                    placeholder="Email"
                                    value={this.state.email}
                                    name="email"
                                    onChange={this.handleChange}
                                />
                            </Col>
                        </Form.Group>

                        {/* 密碼 */}
                        <Form.Group as={Row} controlId="formHorizontalPassword">
                            <Form.Label column sm={2}>
                                Password
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    value={this.state.password}
                                    name="password"
                                    onChange={this.handleChange}
                                />
                            </Col>
                        </Form.Group>

                        {/* 姓名 */}
                        <Form.Group as={Row} controlId="">
                            <Form.Label column sm={2}>
                                姓名
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    type="text"
                                    placeholder="name"
                                    value={this.state.name}
                                    name="name"
                                    onChange={this.handleChange}
                                />
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
                                        value={this.state.m_sex}
                                        onChange={this.handleChange}
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="女性"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios2"
                                        value={this.state.m_sex}
                                        onChange={this.handleChange}
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
                                <Form.Control
                                    type="text"
                                    placeholder="A123456789"
                                    name="id_card"
                                    value={this.state.id_card}
                                    onChange={this.handleChange}
                                />
                            </Col>
                        </Form.Group>

                        {/* 出生日期 maybe use datepicker  */}
                        <Form.Group as={Row} controlId="formGridAddress1">
                            <Form.Label column sm={2}>
                                出生年月日
                             </Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    type="text"
                                    placeholder="2019-09-09"
                                    name="birthday"
                                    value={this.state.birthday}
                                    onChange={this.handleChange}
                                />
                            </Col>
                        </Form.Group>

                        {/* 行動電話 */}
                        <Form.Group as={Row} controlId="formGridAddress1">
                            <Form.Label column sm={2}>
                                行動電話
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    type="text"
                                    placeholder="0999999999"
                                    value={this.state.mobile}
                                    name="mobile"
                                    onChange={this.handleChange}
                                />
                            </Col>
                        </Form.Group>

                        {/* 地址 */}
                        <Form.Group as={Row} controlId="formGridAddress1">
                            <Form.Label column sm={2}>
                                地址
    </Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    type="text"
                                    name="address"
                                    placeholder="台北市中山區龍江路99巷99號"
                                    value={this.state.address}
                                    onChange={this.handleChange}
                                />
                            </Col>
                        </Form.Group>
                        <br />
                        <hr />

                        {/* 送出-清除 */}
                        <Form.Group as={Row}>
                            <Col sm={{ span: 4, offset: 2 }}>
                                <Button
                                    type="submit"
                                    style={{ 'margin-right': 20 }}
                                    onClick={this.postAddMember}
                                >送出</Button>
                                <Button type="submit2">重填</Button>
                            </Col>

                        </Form.Group>



                    </Container>
                </div>
                <Footer />
            </>
        );
    }
}

export default Member_Register;
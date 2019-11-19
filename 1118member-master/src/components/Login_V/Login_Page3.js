import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom"

//Bootstrap 標籤
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../../style/Login_V/Login_V.css'

class Login_Page extends React.Component {
    componentDidMount() {

    }
    constructor() {
        super()
    }

    // a = (props) => () => {

    // }

    render() {
        return (
            
            <>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
            <div class="warn">
                
                <div class="login">
                <Link to="/"><div class="close" >X</div></Link>
                <h4 >登入</h4>
                
                </div>
                
                <div id="login-detail" className="login-tab login-title " >
                    
                    <form className="form-signin" >

                        <div className="form-label-group" >
                        {/* <FontAwesome
                            name='user-circle'
                            style={{ fontSize: "1rem", "margin-right": "1rem"}}
                        />   */}
                         <input type="tel" placeholder="帳號" required="required" autofocus="autofocus"
                                className="line-style inputCell"  />
                        </div>
                        <div class="form-label-group" >
                        {/* <FontAwesome
                            name='key'
                            style={{ fontSize: "1rem" , "margin-right": "1rem" }}
                        />  */}
                        <input
                                type="password" placeholder="密碼" required="required" class="line-style inputPassword"
                                 /></div>
                        <div className="centered" >
                                <Link to="Member_Information"> <button>登入</button></Link></div>
                        <div className="social-login" >

                            <div className="deco" >使用其他帳號登入</div>
                            <button className="btn fb" >
                                <span className="social-icon fb" >fb</span></button>
                            <button className="btn line" ><span className="social-icon line"
                                    >line</span>
                            </button>
                            
                        </div>
                        <div className="signup-link" ><a >還沒帳號？請註冊</a></div>
                        <Link to="Member_Register"> 註冊</Link>
                        {/* <Link to="./Member_Information3"> 註冊</Link> */}
                        
                        <div className="centered" >註冊即代表同意
                        
                            <a href="/Home" target="_blank" className="blue-link" >使用條款</a>
                            跟<a href="/Home" target="_blank" className="blue-link" >隱私權政策</a></div>
                    </form>

                </div>

            </div>
         
                </>
            
        )
    }
}
export default Login_Page




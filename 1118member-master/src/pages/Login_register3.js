import React from 'react'
// import { Link } from 'react-router-dom'
// import PathNow from '../components/PathNow'
import Carousel from '../components/Home/Carousel'
// import Container_News from '../components/Home/Container_News'
import Login_Page from '../components/Login_V/Login_Page'
import Footer from '../components/Navigation_Navber/Footer'
// Container_News
// import Choosen from "../Chosen"

  // 進行登入
  authenticate1 = callback => {
    //this.setState({ isAuth: true }, () => setTimeout(callback, 300))
    props.authenticate()
}

const Home = (props) => {
    console.log(props)
    return (
        <>
            <Carousel />
            <Login_Page
                authenticate1={this.authenticate1}
                isAuth={props.isAuth}
                {...props} />
            <Footer />

        </>

    )
}


export default Home
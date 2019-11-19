import React from 'react'
// import { Link } from 'react-router-dom'
// import PathNow from '../components/PathNow'
import Carousel from '../components/Home/Carousel'
// import Container_News from '../components/Home/Container_News'
import Login_Page from '../components/Login_V/Login_Page'
import Footer from '../components/Navigation_Navber/Footer'
// Container_News
// import Choosen from "../Chosen"
const Home = () => {
    return (
        <>
            <Carousel />
            <Login_Page />
            <Footer />
        </>
    )
}


export default Home
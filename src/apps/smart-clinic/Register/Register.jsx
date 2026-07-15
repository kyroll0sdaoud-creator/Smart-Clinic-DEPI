import React from 'react'
import Reguster_Navbar from './Register_Navbar'
import Register_Main from './Register_Main'
import Register_Footer from './Register_Footer'
// import Style from "./R_Navbar.css"

export default function Register() {
    return (
        <div  className="register-page">
            <Reguster_Navbar/>
            <Register_Main/>
            <Register_Footer/>
        </div>
    )
}

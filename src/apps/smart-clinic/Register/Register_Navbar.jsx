import React from "react";
import { Link } from "react-router-dom";
import "./R_Navbar.css";

export default function Register_Navbar() {
  return (
    <div className="register-navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light Small shadow" dir="ltr">
        <div className="container d-flex justify-content-around align-items-center">
          <div className="navbar-brand m-2">عيادة الشفاء</div>

          <div className="collapse navbar-collapse justify-content-center" id="navbar-content">
            <div className="navbar-nav">
              <Link className="nav-link" to="/">الرئيسية</Link>
              <Link className="nav-link" to="/">خدماتنا</Link>
              <Link className="nav-link" to="/">عن العيادة</Link>
              <Link className="nav-link" to="/">اتصل بنا</Link>
            </div>
          </div>

          <Link to="/login" className="btn btn-primary">
            تسجيل الدخول
          </Link>
        </div>
      </nav>
    </div>
  );
}
// src/components/Sidebar.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { NAV_ITEMS } from "../data";

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/");
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <h2>عيادة الشفاء</h2>
        <p>نظام إدارة العيادة</p>
      </div>

      <nav className="sidebar-nav">
        {NAV_ITEMS.map((item, idx) =>
          item.label === "الصفحة الرئيسية" ? (
            <Link to="/" key={item.label} className="nav-item">
              <i className={`fas ${item.icon}`}></i>
              <span>{item.label}</span>
            </Link>
          ) : (
            <a href="#" key={item.label} className={`nav-item${idx === 0 ? " active" : ""}`}>
              <i className={`fas ${item.icon}`}></i>
              <span>{item.label}</span>
            </a>
          )
        )}
      </nav>

      <div className="sidebar-footer">
        <div className="footer-links footer-links-single">
          <a href="#" onClick={handleLogout}>
            <i className="fas fa-sign-out-alt"></i> تسجيل الخروج
          </a>
        </div>
      </div>
    </aside>
  );
}

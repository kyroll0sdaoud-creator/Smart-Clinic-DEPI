// src/components/Header.jsx
import React, { useMemo } from "react";
import { DAYS, MONTHS } from "../data";

export default function Header() {
  const todayLabel = useMemo(() => {
    const today = new Date();
    const dayName = DAYS[today.getDay()];
    const day = today.getDate();
    const month = MONTHS[today.getMonth()];
    const year = today.getFullYear();
    return `إليك ملخص حالة العيادة اليوم - ${dayName} ${day} ${month} ${year}`;
  }, []);

  return (
    <header className="header">
      <div className="header-title">
        <h1>لوحة تحكم موظف الاستقبال</h1>
        <div className="date-badge">{todayLabel}</div>
      </div>
      <div className="header-actions">
        <div className="notification-icon">
          <i className="far fa-bell"></i>
        </div>
        <div className="user-profile">
          <div className="user-avatar">م</div>
          <div className="user-info">
            <p className="user-name">موسى محمد</p>
            <p className="user-role">موظف استقبال</p>
          </div>
        </div>
      </div>
    </header>
  );
}

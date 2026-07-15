// src/components/AppointmentsCard.jsx
import React, { useState } from "react";
import { APPOINTMENTS } from "../data";

export default function AppointmentsCard() {
  const [activeTab, setActiveTab] = useState("day");

  return (
    <div className="card appointments-card">
      <div className="card-header-with-tabs">
        <h3>
          <i className="far fa-calendar-check"></i> مدير الحجوزات العام
        </h3>
        <div className="tabs-container">
          <span
            className={`tab${activeTab === "day" ? " active" : ""}`}
            onClick={() => setActiveTab("day")}
          >
            اليوم
          </span>
          <span
            className={`tab${activeTab === "week" ? " active" : ""}`}
            onClick={() => setActiveTab("week")}
          >
            الأسبوع
          </span>
        </div>
      </div>
      <div className="appointment-list">
        {APPOINTMENTS.map((appt) => (
          <div className="appointment-item" key={appt.id}>
            <div className="appointment-info">
              <p className="appointment-patient">{appt.patient}</p>
              <p className="appointment-doctor">{appt.doctor}</p>
            </div>
            <div className="appointment-meta">
              <span className="time-tag">{appt.time}</span>
              <span className="badge badge-confirmed">مؤكد</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

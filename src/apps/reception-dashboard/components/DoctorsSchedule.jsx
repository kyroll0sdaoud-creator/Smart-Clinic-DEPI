// src/components/DoctorsSchedule.jsx
import React, { useState } from "react";
import { DOCTOR_TABS, SCHEDULE_ROWS } from "../data";

export default function DoctorsSchedule() {
  const [activeDoctor, setActiveDoctor] = useState(0);

  return (
    <div className="card schedule-card schedule-card-full">
      <div className="card-header-with-date">
        <h3>
          <i className="far fa-calendar-alt"></i> جدول الأطباء
        </h3>
      </div>

      <div className="doctor-tabs">
        {DOCTOR_TABS.map((name, idx) => (
          <span
            key={name}
            className={`doctor-tab${idx === activeDoctor ? " active" : ""}`}
            onClick={() => setActiveDoctor(idx)}
          >
            {name}
          </span>
        ))}
      </div>

      {/* جدول مبسّط بدل الشبكة القديمة بالخانات الفارغة */}
      <table className="schedule-table">
        <thead>
          <tr>
            <th>الوقت</th>
            <th>المريض</th>
          </tr>
        </thead>
        <tbody>
          {SCHEDULE_ROWS.map((row) => (
            <tr key={row.time}>
              <td className="schedule-time">{row.time}</td>
              <td>{row.patient}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="clinic-note">* عيادة 3 - {DOCTOR_TABS[activeDoctor]}</p>
    </div>
  );
}

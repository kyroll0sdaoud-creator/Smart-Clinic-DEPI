// src/App.jsx
import React from "react";
import "./styles.css";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import AppointmentsCard from "./components/AppointmentsCard";
import PatientForm from "./components/PatientForm";
import DoctorsSchedule from "./components/DoctorsSchedule";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div dir="rtl" lang="ar">
      <link
        href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />

      <div className="dashboard-container">
        <Sidebar />

        <main className="main-content">
          <Header />

          <div className="content-grid">
            <div className="left-column">
              <AppointmentsCard />
            </div>

            <div className="right-column">
              <PatientForm />
            </div>

            <DoctorsSchedule />
          </div>

          <Footer />
        </main>
      </div>
    </div>
  );
}

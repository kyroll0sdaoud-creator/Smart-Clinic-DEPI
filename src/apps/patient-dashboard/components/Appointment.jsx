import "./Appointment.css";

function Appointment() {
  const appointment = {
    doctorName: "د. محمد أحمد",
    doctorSpecialty: "استشاري أمراض القلب",
    appointmentDate: "15 يوليو 2026",
    appointmentTime: "10:30 صباحاً",
    visitType: "كشف",
  };

  return (
    <div className="appointment-card" id="section-appointments">
      <span className="appointment-badge">
        الموعد القادم
      </span>

      <h4>{appointment.doctorName}</h4>

      <p className="doctor-specialty">
        {appointment.doctorSpecialty}
      </p>

      <div className="appointment-info">
        <div className="appointment-item">
          <i className="fa-regular fa-calendar"></i>
          <span>{appointment.appointmentDate}</span>
        </div>

        <div className="appointment-item">
          <i className="fa-regular fa-clock"></i>
          <span>{appointment.appointmentTime}</span>
        </div>

        <div className="appointment-item">
          <i className="fa-solid fa-stethoscope"></i>
          <span>{appointment.visitType}</span>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
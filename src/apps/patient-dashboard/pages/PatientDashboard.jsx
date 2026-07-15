import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import PatientInfo from "../components/PatientInfo";
import Appointment from "../components/Appointment";
import Diagnosis from "../components/Diagnosis";
import Report from "../components/Report";

function PatientDashboard() {
  return (
    <div className="dashboard-container">
      <Sidebar />

      <main className="main-content">
        <Header />

        <PatientInfo />

        <Appointment />

        <Diagnosis />

        <div
  style={{
    position: "absolute",
    left: "-9999px",
    top: 0,
  }}
>
  <Report
    patient={{
      patientName: "اسم المريض",
      patientId: "P001",
      patientAge: 25,

      doctorName: "د. محمد أحمد",
      doctorSpecialty: "استشاري أمراض القلب",

      appointmentDate: "15 يوليو 2026",
      appointmentTime: "10:30 صباحاً",
      visitType: "كشف",

      diagnosis: "ارتفاع ضغط الدم",

      medications: "كونكور 5mg - مرة يومياً",

      dietPlan: "تقليل الأملاح والإكثار من شرب المياه",
    }}
  />
</div>

      </main>
    </div>
  );
}

export default PatientDashboard;
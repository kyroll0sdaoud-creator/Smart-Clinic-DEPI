import "./Report.css";

function Report({ patient }) {
  const today = new Date().toLocaleDateString("ar-EG");

  return (
    <div id="medical-report" className="report-container">

      <div className="report-header">
        <h1>🏥 عيادة الشفاء</h1>
        <h2>التقرير الطبي</h2>
        <p>تاريخ الإصدار: {today}</p>
      </div>

      <div className="report-section">
        <h3>بيانات المريض</h3>

        <div className="report-row">
          <span>اسم المريض</span>
          <span>{patient.patientName}</span>
        </div>

        <div className="report-row">
          <span>رقم المريض</span>
          <span>{patient.patientId}</span>
        </div>

        <div className="report-row">
          <span>العمر</span>
          <span>{patient.patientAge} سنة</span>
        </div>
      </div>

      <div className="report-section">
        <h3>بيانات الطبيب</h3>

        <div className="report-row">
          <span>اسم الطبيب</span>
          <span>{patient.doctorName}</span>
        </div>

        <div className="report-row">
          <span>التخصص</span>
          <span>{patient.doctorSpecialty}</span>
        </div>

        <div className="report-row">
          <span>نوع الزيارة</span>
          <span>{patient.visitType}</span>
        </div>
      </div>

      <div className="report-section">
        <h3>التشخيص</h3>
        <p>{patient.diagnosis}</p>
      </div>

      <div className="report-section">
        <h3>الأدوية</h3>
        <p>{patient.medications}</p>
      </div>

      <div className="report-section">
        <h3>النظام الغذائي</h3>
        <p>{patient.dietPlan}</p>
      </div>

      <div className="report-footer">
        <p>توقيع الطبيب</p>
        <div className="signature-line"></div>
      </div>

    </div>
  );
}

export default Report;
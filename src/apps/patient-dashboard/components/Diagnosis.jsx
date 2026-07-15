import "./Diagnosis.css";

function Diagnosis() {
  const diagnosisData = {
    diagnosis: "ارتفاع ضغط الدم.",
    medications: "كونكور 5mg - مرة يومياً.",
    dietPlan: "تقليل الأملاح والإكثار من شرب المياه.",
  };

  return (
    <div className="diagnosis-card" id="section-diagnosis">

      <h3 className="diagnosis-title">
        التشخيص
      </h3>

      <div className="diagnosis-item">
        <h6>التشخيص</h6>
        <p>{diagnosisData.diagnosis}</p>
      </div>

      <div className="diagnosis-item">
        <h6>الأدوية والعلاجات</h6>
        <p>{diagnosisData.medications}</p>
      </div>

      <div className="diagnosis-item">
        <h6>النظام الغذائي</h6>
        <p>{diagnosisData.dietPlan}</p>
      </div>

    </div>
  );
}

export default Diagnosis;
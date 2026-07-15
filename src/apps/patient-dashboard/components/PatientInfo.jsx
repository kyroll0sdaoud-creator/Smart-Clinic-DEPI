import "./PatientInfo.css";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

function PatientInfo() {
  const patient = {
    patientName: "اسم المريض",
    patientId: "P001",
    patientAge: 25,
  };

 const generateReport = async () => {
  const report = document.getElementById("medical-report");

  if (!report) {
    alert("لم يتم العثور على التقرير.");
    return;
  }

  const canvas = await html2canvas(report, {
    scale: 2,
  });

  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF("p", "mm", "a4");

  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = (canvas.height * pageWidth) / canvas.width;

  pdf.addImage(imgData, "PNG", 0, 0, pageWidth, pageHeight);

  pdf.save("التقرير_الطبي.pdf");
};

  return (
    <div className="card-box d-flex flex-column align-items-center text-center gap-3">

      <div className="patient-avatar">
        👨
      </div>

      <div>
        <h6 className="fw-bold mb-1">
          {patient.patientName}
        </h6>

        <small className="text-secondary">
          رقم المريض : {patient.patientId}
        </small>
      </div>

      <div className="d-flex gap-2 w-100">
        <div className="badge-box">
          <span className="lbl">العمر</span>
          <span className="val">
            {patient.patientAge} سنة
          </span>
        </div>
      </div>

      <div className="w-100">
        <p className="emergency-text">
          للطوارئ فقط
        </p>

        <div className="d-flex gap-2">

          <a
            href="https://wa.me/201507321566"
            target="_blank"
            rel="noreferrer"
            className="btn-light-custom text-decoration-none text-center"
          >
            <i className="fa-brands fa-whatsapp me-1"></i>
            تواصل مع التمريض
          </a>

          <button
            className="btn-light-custom"
            onClick={generateReport}
          >
            <i className="fa-solid fa-file-lines me-1"></i>
            طلب تقرير
          </button>

        </div>
      </div>

    </div>
  );
}

export default PatientInfo;
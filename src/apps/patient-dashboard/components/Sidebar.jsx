import { Link, useNavigate } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const navigate = useNavigate();

  const handleBookAppointment = (e) => {
    e.preventDefault();
    navigate("/#booking");
  };

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="sidebar">
      <div className="sidebar-profile text-center mb-4">
   <div className="profile-icon mb-2">
  🧑
</div>

        <h6 className="text-white fw-bold mb-0">
          مرحباً بك
        </h6>

        <small className="text-white-50">
          لوحة التحكم الطبية
        </small>
      </div>

      <ul className="nav flex-column mb-auto">

        <li className="nav-item mb-1">
          <a className="nav-link active" href="#section-dashboard">
            <i className="fa-solid fa-table-cells-large"></i>
            {" "}
            لوحة التحكم
          </a>
        </li>

        <li className="nav-item mb-1">
          <Link className="nav-link" to="/">
            <i className="fa-solid fa-house"></i>
            {" "}
            الصفحة الرئيسية
          </Link>
        </li>

        <li className="nav-item mb-1">
          <a className="nav-link" href="#section-appointments">
            <i className="fa-solid fa-calendar-days"></i>
            {" "}
            المواعيد
          </a>
        </li>

        <li className="nav-item mb-1">
          <a className="nav-link" href="#section-diagnosis">
            <i className="fa-solid fa-stethoscope"></i>
            {" "}
            التشخيص
          </a>
        </li>

      </ul>

      <div className="mt-auto d-flex flex-column gap-2">

        <button className="btn-book" onClick={handleBookAppointment}>
          <i className="fa-solid fa-plus me-2"></i>
          حجز موعد جديد
        </button>

        {/* تم حذف الدعم الفني حسب المطلوب */}

        <a href="#" className="sidebar-link logout" onClick={handleLogout}>
          <i className="fa-solid fa-right-from-bracket"></i>
          {" "}
          تسجيل الخروج
        </a>

      </div>
    </div>
  );
}

export default Sidebar;
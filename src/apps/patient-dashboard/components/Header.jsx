import "./Header.css";

function Header() {
  return (
    <div className="topbar text-center">
      <h5 className="fw-bold mb-0">لوحة تحكم المريض</h5>
      <small className="text-secondary">
        مرحباً بك، نتمنى لك دوام الصحة والعافية.
      </small>
    </div>
  );
}

export default Header;
import  { useState } from "react";
import "./R_Main.css";
import { Link,useNavigate } from "react-router-dom";
export default function Register_Main() {
  const [Form_Data, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    typeOfUser: "",
    password: "",
    check_password: "",
  });
  const navigate=useNavigate();
  // const[success,setSuccess]=useState(false);
  // Validation (Form)
  function validateName(name) {
    return /^([a-zA-Z]{5,10})(\s)*$/.test(name);
  }
  function validateEmail(email) {
    return /^\w+@[a-zA-Z]+\.(com|org|eg)$/.test(email);
  }
  function validatePhone(phone) {
    return /^(010|011|012|015)+[0-9]{8}$/.test(phone);
  }
  function validatePassword(password) {
    return /^(?=.*[^A-Z]*[A-Z][^A-Z]*?)(?=.*[a-z]{1,})(?=.*\d{1,})(.).{6,}$/g.test(
      password,
    );
  }
  function validatePassword_correct(password, confirm_password) {
    return password === confirm_password;
  }

  // related by form (send data to json)
  async function handleSubmit(e) {
    e.preventDefault();

    if (
      validateName(Form_Data.name) &&
      validateEmail(Form_Data.email) &&
      validatePhone(Form_Data.phone) &&
      Form_Data.typeOfUser !== "" &&
      validatePassword(Form_Data.password) &&
      validatePassword_correct(Form_Data.password, Form_Data.check_password)
    ) 
    {
      const response = await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Form_Data),
      });
      const data = await response.json();

      console.log(data);
      alert("تم إنشاء الحساب بنجاح");
      setTimeout(()=>{navigate("/");},1000);
      setFormData({
        name: "",
        email: "",
        phone: "",
        typeOfUser: "",
        password: "",
        check_password: "",
      });

    
    } 
    else {
      alert("تأكد من صحة البيانات");
    }
  }
  // related by form (send data to json)

  // end validation
  return (
    <div>
      <div id="main-div" className="container row mx-auto ">
        <div id="half-left" className="col-12 col-md-6">
          <div id="text-div">
            <h1>انضم إلى مجتمعنا الطبي المتكامل</h1>
            <p>
              نحن هنا لنقدم لك رعاية صحية تتسم بالدقة والاهتمام الإنساني. ابدأ
              رحلتك الصحية معنا اليوم بإنشاء حسابك الشخصي
            </p>
            <div id="icons">
              <div id="d-i-1" className="d-flex align-items-center mb-2">
                <p className="mb-0">خصوصية بياناتك هي أولويتنا القصوى</p>
              </div>
              <div id="d-i-2" className="d-flex align-items-center">
                <p className="mb-0">حجز مواعيد فورية مع نخبة الأطباء</p>
              </div>
            </div>
          </div>
        </div>

        <div id="half-right" className="col-12 col-md-6 p-4 p-md-5">
          <h3>إنشاء حساب جديد</h3>
          <p>يرجى إدخال بياناتك بدقة لتتمكن من الوصول لخدماتنا</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                الاسم الكامل
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="أدخل اسمك ثلاثي"
                value={Form_Data.name}
                onChange={(e) => {
                  setFormData({ ...Form_Data, name: e.target.value });
                }}
              />
              {!validateName(Form_Data.name) && Form_Data.name !== "" && (
                <small className="text-danger">At least 5 letters</small>
              )}
            </div>

            <div className="mb-3 row">
              <div className="col-12 col-sm-6 mb-2 mb-sm-0">
                <label htmlFor="email" className="form-label">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="example@mail.com"
                  value={Form_Data.email}
                  onChange={(e) => {
                    setFormData({ ...Form_Data, email: e.target.value });
                  }}
                />
                {!validateEmail(Form_Data.email) && Form_Data.email !== "" && (
                  <small className="text-danger">Error</small>
                )}
              </div>
              <div className="col-12 col-sm-6">
                <label htmlFor="phone" className="form-label">
                  رقم الجوال
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  value={Form_Data.phone}
                  onChange={(e) => {
                    setFormData({ ...Form_Data, phone: e.target.value });
                  }}
                />
                {!validatePhone(Form_Data.phone) && Form_Data.phone !== "" && (
                  <small className="text-danger">Must be number</small>
                )}
              </div>
            </div>

            {/* نوع المستخدم */}
            <div id="user-type" className="mb-3">
              <label className="form-label d-block">نوع المستخدم</label>
              <div
                className="btn-group w-100"
                role="group"
                aria-label="User types"
              >
                <button
                  type="button"
                  className={`btn m-1 ${Form_Data.typeOfUser === "مريض" ? "btn-primary " : "btn-outline-primary"}`}
                  onClick={() => {
                    setFormData({ ...Form_Data, typeOfUser: "مريض" });
                  }}
                >
                  مريض
                </button>
                <button
                  type="button"
                  className={`btn m-1 ${Form_Data.typeOfUser === "طبيب" ? "btn-primary " : "btn-outline-primary"}`}
                  onClick={() => {
                    setFormData({ ...Form_Data, typeOfUser: "طبيب" });
                  }}
                >
                  طبيب
                </button>
                <button
                  type="button"
                  className={`btn m-1 ${Form_Data.typeOfUser === "إستقبال" ? "btn-primary " : "btn-outline-primary"}`}
                  onClick={() => {
                    setFormData({ ...Form_Data, typeOfUser: "إستقبال" });
                  }}
                >
                  إستقبال
                </button>
              </div>
            </div>

            <div className="mb-3 row">
              <div className="col-12 col-sm-6 mb-2 mb-sm-0">
                <label htmlFor="pass" className="form-label">
                  كلمة المرور
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="pass"
                  value={Form_Data.password}
                  onChange={(e) => {
                    setFormData({ ...Form_Data, password: e.target.value });
                  }}
                />
                {!validatePassword(Form_Data.password) &&
                  Form_Data.password !== "" && (
                    <small className="text-danger">
                      at least 6 digit from 1 capital L and at least 1 small L
                      and at least 1 digit and at least 1 spacial char
                    </small>
                  )}
              </div>
              <div className="col-12 col-sm-6">
                <label htmlFor="check-pass" className="form-label">
                  تأكيد كلمة المرور
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="check-pass"
                  value={Form_Data.check_password}
                  onChange={(e) => {
                    setFormData({
                      ...Form_Data,
                      check_password: e.target.value,
                    });
                  }}
                />
                {!validatePassword_correct(
                  Form_Data.password,
                  Form_Data.check_password,
                ) &&
                  Form_Data.check_password !== "" && (
                    <small className="text-danger">No match</small>
                  )}
              </div>
            </div>

            <button
              id="submit"
              type="submit"
              className="btn btn-primary w-100 mb-4"
            >
              إنشاء حساب جديد
            </button>
            {/* {success && (} */}
          </form>
          <p className="mt-3 text-center">
            لديك حساب بالفعل؟{" "}
            <Link to="/login" className="text-decoration-none fw-bold">
              تسجيل الدخول
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

import { Link,useNavigate } from "react-router-dom";
import loginImage from "../assets/images/login.png";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { loginSchema } from "../schemas/loginSchema";
import { loginApi } from "../apis/loginApi";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  //new
  const navigate=useNavigate();
  //new
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

 async function handleLogin(formData) {
  try {
    const user = await loginApi(formData);
    //new
    if (user.typeOfUser === "مريض") {navigate("/patient");} 
    else if (user.typeOfUser === "طبيب") {navigate("/doctor");} 
    else if (user.typeOfUser === "موظف الاستقبال") {navigate("/reception");
    //new
}

    console.log(user);

    alert("تم تسجيل الدخول بنجاح");

  } catch (error) {
    alert("البريد الإلكتروني أو كلمة المرور غير صحيحة");
    console.log(error);
  }
}
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top" id="navbar">
        <div className="container-fluid px-5">
          <Link className="navbar-brand" to="/">
            عيادة الشفاء
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <i className="fa-solid fa-bars-staggered"></i>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link p-2 p-lg-3"
                  aria-current="page"
                  to="/#hero"
                >
                  الرئسيه
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link p-2 p-lg-3"
                  aria-current="page"
                  to="/#services"
                >
                  خدمتنا
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link p-2 p-lg-3"
                  aria-current="page"
                  to="/#users"
                >
                  المستخدمين
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link p-2 p-lg-3"
                  aria-current="page"
                  to="/#success"
                >
                  قصص نجاح مرضانا
                </Link>
              </li>
            </ul>

            {/* صفحة "حساب جديد" من مسؤولية عضو آخر في الفريق */}
            <Link
              to="/register"
              className="btn btn-outline-primary px-4 me-3 rounded-3 fw-bold"
              id="nav-btn2"
            >
              حساب جديد
            </Link>
          </div>
        </div>
      </nav>

      <section className="loginpage" id="login">
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
          <div className="row border rounded-4 p-4 bg-white shadow box-area">
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <div className="image mb-3">
                <img className="img-fluid rounded-4" src={loginImage} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="text">
                <h1 className="fw-bold" style={{ color: "#003f87" }}>
                  مرحباً بك مجدداً
                </h1>
                <p className="text-muted">تسجيل الدخول للمتابعة</p>
              </div>
              <form onSubmit={handleSubmit(handleLogin)}>
                <div className="input mb-3">
                  <label htmlFor="email" className="mb-2">
                    البريد الإلكتروني
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="example@clinic.com"
                    className="form-control form-control-lg bg-light fs-6"
                    {...register("email")}
                  />

                  <small className="text-danger">{errors.email?.message}</small>
                </div>
                <div className="input mb-3">
                  <label htmlFor="password" className="mb-2">
                    كلمة المرور
                  </label>

                  <div className="position-relative">

  <input
    id="password"
    type={showPassword ? "text" : "password"}
    className="form-control form-control-lg bg-light fs-6"
    placeholder="Password"
    {...register("password")}
  />

  <i
    className={`fa-solid ${
      showPassword ? "fa-eye-slash" : "fa-eye"
    }`}
    onClick={() => setShowPassword(!showPassword)}
    style={{
      position: "absolute",
      top: "50%",
      left: "15px",
      transform: "translateY(-50%)",
      cursor: "pointer",
      color: "#777",
    }}
  ></i>

</div>

<small className="text-danger">
  {errors.password?.message}
</small>

                  <small className="text-danger">
                    {errors.password?.message}
                  </small>
                </div>
                <div className="input mb-5 d-flex justify-content-between">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="formcheck"
                    />
                    <label
                      htmlFor="formcheck"
                      className="form-check-label text-secondary"
                    >
                      <small>تذكرني على هذا الجهاز</small>
                    </label>
                  </div>
                  <div className="forgot">
                    <small>
                      <a href="#" className="fw-bold">
                        نسيت كلمة المرور؟{" "}
                      </a>
                    </small>
                  </div>
                </div>
                <div className="input mb-3">
                  <button
                    type="submit"
                    className="btn btn-lg btn-primary w-100"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                        ></span>
                        جاري تسجيل الدخول...
                      </>
                    ) : (
                      <>
                        <i className="fa-solid fa-arrow-right-to-bracket"></i>{" "}
                        دخول
                      </>
                    )}
                  </button>
                </div>
                <div className="d-flex justify-content-center">
                  <p>
                    ليس لديك حساب؟{" "}
                    <Link to="/register" className="fw-bold">
                      أنشئ حساباً جديداً
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="loginfooter" id="footer">
        <div className="container p-4 text-center text-white">
          <i
            className="fa-solid fa-heart-pulse display-3 pb-4"
            style={{ color: "rgb(29, 98, 216)" }}
          ></i>
          <h3 className="mb-5 fw-bold">عيادة الشفاء</h3>
          <p>© 2026 عيادة الشفاء. جميع الحقوق محفوظة. مرخص من وزارة الصحة.</p>
        </div>
      </section>
    </>
  );
}

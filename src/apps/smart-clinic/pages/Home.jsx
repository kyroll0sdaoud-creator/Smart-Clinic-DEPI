import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import Hero from "../components/Hero.jsx";
import Booking from "../components/Booking.jsx";
import UsersSection from "../components/UsersSection.jsx";
import Services from "../components/Services.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Awards from "../components/Awards.jsx";
import DoctorsSection from "../components/DoctorsSection";

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const target = document.querySelector(hash);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top" id="navbar">
        <div className="container-fluid px-0 px-5">
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
                <a className="nav-link p-2 p-lg-3" aria-current="page" href="#hero">
                  الرئسيه
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link p-2 p-lg-3" aria-current="page" href="#services">
                  خدمتنا
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link p-2 p-lg-3" aria-current="page" href="#users">
                  المستخدمين
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link p-2 p-lg-3" aria-current="page" href="#success">
                  قصص نجاح مرضانا
                </a>
              </li>
            </ul>

            <Link to="/login" className="btn btn-primary px-4 rounded-3 fw-bold" id="nav-btn1">
              تسجيل الدخول
            </Link>
            {/* صفحة "حساب جديد" من مسؤولية عضو آخر في الفريق */}
            <Link to="/register" className="btn btn-outline-primary px-4 me-3 rounded-3 fw-bold" id="nav-btn2">
              حساب جديد
            </Link>
          </div>
        </div>
      </nav>

      <Hero />
      <Booking />
      <UsersSection />
      <Services />
      <DoctorsSection />
      <Testimonials />
      <Awards />

      <section className="footer pt-5 pb-2 text-white text-center text-md-end">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="info">
                <h3 className="mb-4 fw-bold">عيادة الشفاء</h3>
                <p className="mb-5 lh-lg">
                  نحن هنا لنقدم لك أفضل تجربة رعاية صحية ممكنة باستخدام العلم
                  والتعاطف.
                </p>
                <div className="cooyright">
                  صُمم بواسطة <span>React Family</span>
                  <div className="pt-1 fw-bold">2026 &copy;</div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-2">
              <div className="links">
                <h5 className="text-white">روابط سريعة</h5>
                <ul className="list-unstyled lh-lg pe-2 mt-3">
                  <li>
                    <Link
                      className="text-white fw-bold link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                      to="/"
                    >
                      الرئسيه
                    </Link>
                  </li>
                  <li>
                    <a
                      className="text-white fw-bold link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                      href="#services"
                    >
                      خدماتنا
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white fw-bold link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                      href="#users"
                    >
                      المستخدمين
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white fw-bold link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                      href="#success"
                    >
                      قصص نجاح مرضانا
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-6 col-lg-2">
              <div className="links">
                <h5 className="text-white fw-bold">العنوان</h5>
                <ul className="list-unstyled lh-lg pe-2 mt-3">
                  <li>
                    القاهره، الزمالك- بجوار محطه مترو صفاء حجازي
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      <i className="fa-solid fa-map-pin text-light"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="content us">
                <h5 className="fw-bold">تواصل معنا</h5>
                <p className="lh-lg mt-3">
                  تواصل معنا عبر البريد الإلكتروني أو الهاتف. نحن بانتظار
                  مكالمتك أو رسالتك.
                </p>
                <p>
                  <a className="text-white" href="http://" target="_blank" rel="noopener noreferrer">
                    110122324 +20
                  </a>
                </p>
                <a
                  className="btn btn-primary w-100 rounded-pill"
                  style={{ letterSpacing: "1px" }}
                  href="#"
                  role="button"
                >
                  info@alshifaclinic@gmail.com
                </a>
                <ul className="d-flex mt-5 list-unstyled gap-3 align-items-center">
                  <li>
                    <a className="d-block text-light" href="#">
                      <i className="fa-brands fa-facebook rounded-circle p-2 display-6"></i>
                    </a>
                  </li>
                  <li>
                    <a className="d-block text-light" href="#">
                      <i className="fa-brands fa-linkedin linkedin rounded-circle p-2 display-6"></i>
                    </a>
                  </li>
                  <li>
                    <a className="d-block text-light" href="#">
                      <i className="fa-brands fa-youtube youtube rounded-circle p-2 display-6"></i>
                    </a>
                  </li>
                  <li>
                    <a className="d-block text-light" href="">
                      <i className="fa-brands fa-whatsapp rounded-circle p-2 display-6"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}



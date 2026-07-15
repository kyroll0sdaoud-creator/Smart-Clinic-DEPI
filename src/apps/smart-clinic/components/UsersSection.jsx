import { Link } from "react-router-dom";

 
export default function UsersSection() {
  return (
    <section className="landing" id="users">
      <div className="container">
        <div className="d-flex justify-content-center align-items-center">
          <h1 className="m-5 fw-bold">بوابة المستخدمين</h1>
        </div>
        <div className="row align-items-center">
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="card text-center p-5 mb-5">
              <div className="icon mb-3 display-3">
                <i
                  className="fa-solid fa-user-injured"
                  style={{ color: "rgb(10, 89, 224)" }}
                ></i>
              </div>
              <h3 className="fw-bold mb-4">مريض</h3>
              <p className="text-muted fw-bold">
                حجز المواعيد، عرض النتائج الطبية، والتواصل مع أطبائك.
              </p>
              <div className="text-center mt-3 fw-bold">
                {/* صفحة المريض من مسؤولية عضو آخر في الفريق */}
                <Link
                  className="icon-link icon-link-hover fw-bold mt-3"
                  to="/login"
                  state={{role:"patient"}}
                  style={{ textDecoration: "none", fontSize: "20px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="bi arrow"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                  >
                    <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                  </svg>
                  دخول المريض
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-4">
            <div className="card text-center p-5 mb-5">
              <div className="icon mb-3 display-3">
                <i
                  className="fa-solid fa-user-doctor"
                  style={{ color: "rgb(10, 89, 224)" }}
                ></i>
              </div>
              <h3 className="fw-bold mb-4">طبيب</h3>
              <p className="text-muted fw-bold">
                إدارة المواعيد، السجلات الطبية، والوصفات الإلكترونية.
              </p>
              <div className="text-center mt-3 fw-bold">
                {/* صفحة الطبيب من مسؤولية عضو آخر في الفريق */}
                <Link
                  className="icon-link icon-link-hover fw-bold mt-3"
                  to="/login"
                  state={{role:"doctor"}}
                  style={{ textDecoration: "none", fontSize: "20px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="bi arrow"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                  >
                    <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                  </svg>
                  دخول الطبيب
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-4">
            <div className="card text-center p-5 mb-5">
              <div className="icon mb-3 display-3">
                <i
                  className="fa-solid fa-user-nurse"
                  style={{ color: "rgb(10, 89, 224)" }}
                ></i>
              </div>
              <h3 className="fw-bold mb-4">موظف الاستقبال</h3>
              <p className="text-muted fw-bold">
                تنظيم تدفق المرضى، إدارة الفواتير، والدعم الإداري.
              </p>
              <div className="text-center mt-3 fw-bold">
                <Link
                  className="icon-link icon-link-hover fw-bold mt-3"
                  to="/login"
                  state={{role:"reception"}}
                  style={{ textDecoration: "none", fontSize: "20px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="bi arrow"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                  >
                    <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                  </svg>
                  دخول الموظف
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


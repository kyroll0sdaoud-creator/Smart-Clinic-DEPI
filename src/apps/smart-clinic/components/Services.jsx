import servi2 from "../assets/images/servi2.jpg";
import servi11 from "../assets/images/servi11.png";
import servi4 from "../assets/images/servi4.png";
import servi3 from "../assets/images/servi3.jpg";

export default function Services() {
  return (
    <section className="services text-center" id="services">
      <div className="container">
        <div className="text-center pt-5" id="services-text">
          <h3 className="fw-bold border-bottom pb-2">خدماتنا المتميزة</h3>
          <h2 className="fw-bold mb-5">رعاية طبية شاملة بمعايير عالمية</h2>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-3 mb-3">
            <div className="card h-100" id="card-bg">
              <img src={servi2} className="card-img-top img-fluid" alt="..." />
              <div className="card-body">
                <h4 className="card-title fw-bold">الفحوصات الشاملة</h4>
                <blockquote>
                  نستخدم أحدث أجهزة التصوير والتحليل المخبري لتقديم أدق
                  النتائج في وقت قياسي.
                </blockquote>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 mb-3">
            <div className="card h-100" id="card-bg">
              <img src={servi11} className="card-img-top img-fluid" alt="" />
              <div className="card-body">
                <h5 className="card-title fw-bold">التشخيص الدقيق</h5>
                <blockquote>
                  فريقنا من الاستشاريين يعمل بتكامل للوصول إلى أدق تشخيص لحالتك
                  الصحية.
                </blockquote>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 mb-3">
            <div className="card h-100" id="card-bg">
              <img src={servi4} className="card-img-top img-fluid" alt="..." />
              <div className="card-body">
                <h5 className="card-title fw-bold">المتابعة المستمرة</h5>
                <p className="card-text">
                  لا تنتهي علاقتنا بك بمجرد الخروج، بل نتابع تطورك الصحي دورياً
                  لضمان التعافي التام.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 mb-3">
            <div className="card h-100" id="card-bg">
              <img src={servi3} className="card-img-top img-fluid" alt="..." />
              <div className="card-body">
                <h5 className="card-title fw-bold">الاستشارات عن بعد</h5>
                <p className="card-text">
                  تواصل مع طبيبك من منزلك بأعلى معايير الخصوصية والجودة
                  التقنية عبر بوابتنا الذكية.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



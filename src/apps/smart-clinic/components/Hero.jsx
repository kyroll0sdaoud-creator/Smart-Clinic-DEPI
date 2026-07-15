import heroImage from "../assets/images/2.png";


export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container pt-5">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 text-center text-lg-end pe-lg-4">
            <h1 className="fw-bold mb-3 me-lg-0">
              رعايتكم هي <br />
              <span id="span"> أولويتنا القصوى </span>
            </h1>

            <p className="text-muted mb-4 mx-auto mx-lg-0">
              نقدم في عيادة الشفاء تجربة طبية فريدة تجمع بين الدقة السريرية
              وحفاوة الاستقبال، لنضمن لك ولعائلتك حياة صحية مديدة بأحدث
              التقنيات العالمية.
            </p>

            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
              <a
                className="btn btn-success p-3 d-flex align-items-center justify-content-center gap-2 fw-bold rounded-3"
                id="hero-btn1"
                href="#booking"
              >
                احجز موعدك الآن
                <i className="fa-solid fa-stethoscope"></i>
              </a>

              <a
                className="btn btn-success p-3 d-flex align-items-center justify-content-center fw-bold rounded-3"
                id="hero-btn2"
                href="#success"
              >
                قصص نجاح مرضانا
                <i className="fa-solid fa-user-injured"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-6 text-center mt-4 mt-lg-0">
            <img src={heroImage} className="img-fluid rounded-5 mb-5" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}


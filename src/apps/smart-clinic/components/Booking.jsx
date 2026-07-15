export default function Booking() {
  return (
    <section id="booking" className="py-5 bg-body-tertiary">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">احجز موعدك الآن</h2>
          <p className="text-muted">
            تواصل معنا أو قم بتحويل رسوم الحجز لتأكيد موعدك.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {/* رقم العيادة */}
          <div className="col-lg-5">
            <div className="card shadow border-0 rounded-4 h-100">
              <div className="card-body text-center p-5">
                <i className="fa-solid fa-phone-volume display-3 text-primary mb-3"></i>

                <h4 className="fw-bold">رقم العيادة</h4>

                <p className="text-muted">
                  يمكنك التواصل معنا مباشرة لحجز موعد أو الاستفسار.
                </p>

                <h3 className="fw-bold text-success my-4">01012345678</h3>

                <a href="tel:+201012345678" className="btn btn-primary rounded-pill px-5">
                  <i className="fa-solid fa-phone me-2"></i>
                  اتصل الآن
                </a>
              </div>
            </div>
          </div>

          {/* الدفع */}
          <div className="col-lg-5">
            <div className="card shadow border-0 rounded-4 h-100">
              <div className="card-body text-center p-5">
                <i className="fa-solid fa-money-bill-transfer display-3 text-success mb-3"></i>

                <h4 className="fw-bold">تأكيد الحجز</h4>

                <p className="text-muted mb-4">
                  يمكنك تحويل رسوم الحجز بإحدى الطرق التالية.
                </p>

                <div className="alert alert-light border rounded-3">
                  <h6 className="fw-bold text-primary mb-2">
                    <i className="fa-solid fa-building-columns me-2"></i>
                    Instapay
                  </h6>

                  <p className="fs-5 fw-bold mb-4">clinic@instapay</p>

                  <h6 className="fw-bold text-success mb-2">
                    <i className="fa-solid fa-wallet me-2"></i>
                    المحفظة الإلكترونية
                  </h6>

                  <p className="fs-5 fw-bold mb-0">01012345678</p>

                  <a
                    href="https://wa.me/201012345678"
                    className="btn btn-success rounded-pill px-5 mt-3"
                  >
                    <i className="fa-brands fa-whatsapp me-2"></i>
                    إرسال إيصال الدفع
                  </a>

                  <div className="form-text mt-3">
                    بعد التحويل، يرجى إرسال صورة الإيصال عبر واتساب لتأكيد
                    الحجز.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



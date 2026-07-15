import { useEffect, useState } from "react";
import axios from "axios";

export default function DoctorsSection() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getDoctors() {
    try {
      const response = await axios.get(
        "https://6a555b69e49d9eb2cc55b47f.mockapi.io/api1/doctors"
      );

      setDoctors(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getDoctors();
  }, []);

  return (
    <section className="py-5 doctors-section">
      <div className="container">
        <div className="text-center mb-5">
          <i
            className="fa-solid fa-user-doctor display-4 mb-3"
            style={{ color: "#0d6efd" }}
          ></i>

          <h2 className="fw-bold">فريق الأطباء</h2>

          <p className="text-muted">
            نخبة من أفضل الأطباء في مختلف التخصصات الطبية.
          </p>
        </div>

        <div className="row g-4">
          {loading ? (
            <div className="col-12 text-center py-5">
              <div
                className="spinner-border text-primary"
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            doctors.map((doctor) => (
              <div className="col-md-6 col-lg-3" key={doctor.id}>
                <div className="card border-0 shadow-sm h-100 doctor-card">
                  <img
                    src={doctor.image}
                    className="card-img-top doctor-image"
                    alt={doctor.name}
                  />

                  <div className="card-body text-center">
                    <h5 className="fw-bold">{doctor.name}</h5>

                    <p className="text-muted">
                      {doctor.specialty}
                    </p>

                   
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
import axios from "axios";
import { useEffect, useState } from "react";

export default function Testimonials() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getReviews() {
    try {
      const response = await axios.get(
        "https://6a555b69e49d9eb2cc55b47f.mockapi.io/api1/reviews"
      );

      console.log(response.data);
      setReviews(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <section className="story" id="success">
      <div className="container">
        <div className="text-center pt-5">
          <i
            className="fa-solid fa-heart-pulse display-3 pb-4"
            style={{ color: "rgb(29, 210, 216)" }}
          ></i>

          <h2 className="fw-bold pb-2">قصص نجاح مرضانا</h2>

          <p className="mb-5 text-muted fw-bold">
            نعتز بثقة آلاف المراجعين الذين اختاروا الشفاء لتكون رفيقهم في رحلة التعافي
          </p>
        </div>

        <div className="row">
          {loading ? (
            <div className="col-12 text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            reviews.map((review) => (
              <div className="col-md-6 mb-4" key={review.id}>
                <div className="card mb-4">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="rounded-circle me-3"
                        id="profile-pic"
                      />

                      <div>
                        <h5>{review.name}</h5>
                        <small className="text-muted">{review.service}</small>
                      </div>
                    </div>

                    <blockquote
                      className="card-text fw-bold text-muted"
                      style={{ lineHeight: "30px" }}
                    >
                      "{review.review}"
                    </blockquote>

                    <div>
                      {[...Array(review.rating)].map((_, index) => (
                        <i
                          key={index}
                          className="fa-solid fa-star"
                          style={{ color: "rgb(135,255,5)" }}
                        ></i>
                      ))}
                    </div>
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
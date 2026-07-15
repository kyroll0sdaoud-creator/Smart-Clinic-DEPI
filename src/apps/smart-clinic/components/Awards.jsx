import verifiedUser from "../assets/images/verified_user_70dp_E3E3E3_FILL0_wght500_GRAD200_opsz48.png";
import selfImprovement from "../assets/images/self_improvement_70dp_E3E3E3_FILL0_wght400_GRAD0_opsz48.png";
import personalInjury from "../assets/images/personal_injury_70dp_E3E3E3_FILL0_wght400_GRAD0_opsz48.png";
import patientList from "../assets/images/patient_list_70dp_E3E3E3_FILL0_wght400_GRAD0_opsz48.png";
import personHeart from "../assets/images/person_heart_70dp_E3E3E3_FILL0_wght400_GRAD0_opsz48.png";
import biotech from "../assets/images/biotech_70dp_E3E3E3_FILL0_wght400_GRAD0_opsz48.png";

export default function Awards() {
  return (
    <section className="Awards pt-2 pb-2 text-center" style={{ backgroundColor: "rgb(88, 185, 135)" }}>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-4 col-lg-2 mt-1 mb-1">
            <img src={verifiedUser} alt="" />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-2 mt-1 mb-1">
            <img src={selfImprovement} alt="" />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-2 mt-1 mb-1">
            <img src={personalInjury} alt="" />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-2 mt-1 mb-1">
            <img src={patientList} alt="" />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-2 mt-1 mb-1">
            <img src={personHeart} alt="" />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-2 mt-1 mb-1">
            <img src={biotech} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}


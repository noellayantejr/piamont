import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./PreschoolRequirements.css";

function PreschoolRequirements(props) {
  useEffect(() => {
    document.title = "Piamont School - Elementary Requirements";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="header-section preschool-header-section">
        <p className="title preschool-title">Preschool Requirements</p>

        <button
          className="inquire-btn animate"
          onClick={() =>
            window.open("https://www.facebook.com/PiamontSchool", "_blank")
          }
        >
          Inquire Now
          <img
            src={require("../../assets/images/enroll.png")}
            className="inquire-icon-image"
          />
        </button>
      </div>

      <div className="requirements-container">
        <p className="section-title preschool-section-title">
          Age REQUIREMENT by October of the school year:
        </p>
        <div className="requirements-header-section">
          <div className="requirements-header-text">
            <p><b>Nursery :</b> 2 years and 11 months to 3 years old</p>
            <p><b>Prekindergarten :</b> 4 years old to 4 years and 11 months old</p>
            <p><b>Kindergarten :</b> 5 years old and above</p>
          </div>
        </div>
      </div>

      <div className="requirements-container">
        <p className="section-title preschool-section-title">1. Photocopies</p>
        <div className="requirements-header-section">
          <div className="requirements-header-text">
            <p>
              ●&nbsp;&nbsp;Birth Certificate issued by Philippine Statistics Authority
              (PSA)
            </p>
            <p>●&nbsp;&nbsp;Baptismal Certificate</p>
            <p>
              ●&nbsp;&nbsp;Philippine passport for pupils who are Filipinos by blood but
              with foreign citizenship
            </p>
            <p>
              ●&nbsp;&nbsp;A certificate of recognition as a Filipino citizen issued by the
              Bureau of Immigration and Deportation (BID) for pupils who are
              natural born Filipinos but with foreign citizenship
            </p>
          </div>
        </div>
      </div>

      <div className="requirements-container">
        <p className="section-title preschool-section-title">
          2. Other requirements for preschoolers and elementary transferees.
        </p>
        <div className="requirements-header-section">
          <div className="requirements-header-text">
            <p>
              ●&nbsp;&nbsp;Accomplished 2 personal data sheets issued by PiaMont
              Registrar’s Office
            </p>
            <p>●&nbsp;&nbsp;Certificate of Good Moral Character</p>
            <p>●&nbsp;&nbsp;Photocopy of previous school’s Permit to Operate</p>
            <p>●&nbsp;&nbsp;2 pcs 1 X 1 ID pictures</p>
            <p>●&nbsp;&nbsp;Original Report Card / Form 138 / SF9</p>
            <p>
              ●&nbsp;&nbsp;Original Transcript of Record / Form 137 / SF10 with Learner’s
              Reference Number (LRN)
            </p>
          </div>
        </div>

        <div
          className="requirements-header-section"
          style={{ marginBottom: "50px" }}
        >
          <div className="requirements-header-text">
            <p>
              Acceptance of transferees from the other schools will depend on
              the slots available. The school reserves the right to accept a new
              pupil to take on the place of an old pupil after the official
              enrolment period.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

PreschoolRequirements.propTypes = {
  window: PropTypes.func,
};

export default PreschoolRequirements;

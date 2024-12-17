import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./Requirements.css";

function Requirements(props) {

  useEffect(() => {
    document.title = "Piamont School - Requirements";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="header-section">
        <p className="title">Admission Requirements</p>
      </div>
      
      <div className="container">
        <p className="section-title">Age REQUIREMENT by October of the school year:</p>
        <div className="requirements-header-section">
          <div className="requirements-header-text">
            <p>Nursery</p>
            <p>Prekindergarten</p>
            <p>Kindergarten</p>
            <p>Grade 1</p>
          </div>

          <div className="requirements-header-text">
            <p>: 2 years and 11 months to 3 years old</p>
            <p>: 4 years old to 4 years  and 11 months old</p>
            <p>: 5 years old and above</p>
            <p>: 6 years old (with Kindergarten Completion)</p>
          </div>
        </div>
      </div>

      <div className="container">
        <p className="section-title">1. Photocopies</p>
        <div className="requirements-header-section">
          <div className="requirements-header-text">
            <p>● Certificate of Completion for Kindergarten (for Grade 1 entrants)</p>
            <p>● Birth Certificate issued by Philippine Statistics Authority (PSA)</p>
            <p>● Baptismal Certificate</p>
            <p>● Philippine passport for pupils who are Filipinos by blood but with foreign citizenship</p>
            <p>● A certificate of recognition as a Filipino citizen issued by the Bureau of Immigration and Deportation (BID) for pupils who are natural born Filipinos but with foreign citizenship</p>
          </div>
        </div>
      </div>

      <div className="container">
        <p className="section-title">2. Other requirements for preschoolers and elementary transferees.</p>
        <div className="requirements-header-section">
          <div className="requirements-header-text">
            <p>● Accomplished 2 personal data sheets issued by PiaMont Registrar’s Office</p>
            <p>● Certificate of Good Moral Character</p>
            <p>● Photocopy of previous school’s Permit to Operate</p>
            <p>● 2 pcs 1 X 1 ID pictures</p>
            <p>● Original Report Card / Form 138 / SF9</p>
            <p>● Original Transcript of Record / Form 137 / SF10 with Learner’s Reference Number (LRN)</p>
          </div>
        </div>

        <div className="requirements-header-section">
          <div className="requirements-header-text">
            <p>Acceptance of transferees from the other schools will depend on the slots available. The school reserves the right to accept a new pupil to take on the place of an old pupil after the official enrolment period.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

Requirements.propTypes = {
  window: PropTypes.func,
};

export default Requirements;

import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./Careers.css";

function Careers(props) {
  useEffect(() => {
    document.title = "Piamont School - Careers";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="header-section careers-header-section">
        <p className="title careers-title">Careers</p>
      </div>

      <div className="careers-container" style={{ minHeight: "500px" }}>
        <p className="careers-section-title">
          Expression of Interest - Primary Teachers
        </p>
        <div className="careers-header-text">
          <p>
            We are currently seeking expressions of interest for primary
            teachers. Applications, including a cover letter and resume, should
            be emailed to
            <a
              style={{
                color: "#ab3b40",
                fontWeight: "bold",
                cursor: "pointer",
              }}
              onClick={() =>
                (window.location.href = "mailto:admin@piamont.com")
              }
            >
              {" admin@piamont.com"}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

Careers.propTypes = {
  window: PropTypes.func,
};

export default Careers;

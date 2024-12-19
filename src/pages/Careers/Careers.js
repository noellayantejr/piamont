import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./Careers.css";

function Careers(props) {
  useEffect(() => {
    document.title = "Piamont School - careers";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="header-section">
        <p className="title">Careers</p>
      </div>

      <div className="careers-container" style={{ minHeight: "500px" }}>
        <p className="section-title">
          Expression of Interest - Primary Teachers
        </p>
        <div className="careers-header-section">
          <div className="careers-header-text">
            <p>
              We are currently seeking expressions of interest for primary
              teachers. Applications, including a cover letter and resume,
              should be emailed to
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
                {' admin@piamont.com'}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

Careers.propTypes = {
  window: PropTypes.func,
};

export default Careers;

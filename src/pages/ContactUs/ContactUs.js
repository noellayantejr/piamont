import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./ContactUs.css";

function ContactUs(props) {
  useEffect(() => {
    document.title = "Piamont School - Requirements";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="header-section">
        <p className="title">Contact Us</p>
      </div>

      <div className="requirements-container">
        <p className="section-title">
          Contact Piamont School - We're Here to Help
        </p>
        <div className="requirements-header-section" style={{ marginLeft: 0 }}>
          <div className="requirements-header-text">
            <p
              className="connect-with-facebook animate"
              onClick={() =>
                window.open("https://www.facebook.com/PiamontSchool", "_blank")
              }
            >
              Connect with us in facebook
              <img
                src={require("../../assets/images/facebook-square.png")}
                width={"35px"}
                height={"35px"}
                style={{ marginLeft: "10px" }}
              />
            </p>
            <p className="animate">
              <b>Contact Number:</b> +63918-935-5-105
            </p>
            <p className="animate">
              <b>Email:</b>{" "}
              <span
                onClick={() =>
                  (window.location.href = "mailto:admin@piamont.com")
                }
              >
                admin@piamont.com
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="requirements-container">
        <p className="section-title">
          Preschool Department
          <img
            src={require("../../assets/images/location.png")}
            width={"40px"}
            height={"40px"}
            style={{ marginLeft: "10px" }}
          />
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.2527230843316!2d123.73202377676694!3d13.146452454143171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a103d89c2b5f3f%3A0x73c4f44c89d038ad!2s6th%20St%2C%20Legazpi%20City%2C%20Albay!5e0!3m2!1sen!2sph!4v1734602058129!5m2!1sen!2sph"
              width="100%"
              height="450"
              allowfullscreen=""
              style={{border: 0, marginTop: '30px'}}
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </p>
      </div>

      <div className="requirements-container">
        <p className="section-title">
          Elementary Department{" "}
          <img
            src={require("../../assets/images/location.png")}
            width={"40px"}
            height={"40px"}
            style={{ marginLeft: "10px" }}
          />
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.23921869306!2d123.70930157466834!3d13.14730508718442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a103fe8928ea19%3A0x2313f911f5f9dcc7!2sAlcala%20Street%2C%20Daraga%2C%20Albay!5e0!3m2!1sen!2sph!4v1734602276091!5m2!1sen!2sph"
              width="100%"
              height="450"
              style={{border: 0, marginTop: '30px', marginBottom: '100px'}}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </p>
      </div>
    </div>
  );
}

ContactUs.propTypes = {
  window: PropTypes.func,
};

export default ContactUs;

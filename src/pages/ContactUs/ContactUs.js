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
      <div className="header-section contact-us-header-section">
        <p className="title contact-us-title">Contact Us</p>
      </div>

      <div className="requirements-container">
        <p className="section-title careers-section-title">
          Contact Piamont School - We're Here to Help
        </p>
        <div className="requirements-header-section" style={{ marginLeft: 0 }}>
          <div className="contact-us-header-text">
            <p
              className="connect-with-facebook animate-contact-us"
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
            <p className="animate-contact-us">
              <b>Contact Number:</b> +63918-935-5-105
            </p>
            <p className="animate-contact-us">
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
        <div className="section-title careers-section-title-location">
          Preschool Department
          <img
            src={require("../../assets/images/location.png")}
            className="location-icon-image"
          />
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.233966225541!2d123.71164499999998!3d13.147636700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a103fe8fe818b3%3A0x4a69d454fbc05282!2sPiamont%20SCIENCE%20ORIENTED%20SCHOOL%20for%20KIDS!5e0!3m2!1sen!2sph!4v1734602545312!5m2!1sen!2sph"
              width="100%"
              height="450"
              style={{ border: 0, marginTop: "30px" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="requirements-container">
        <div className="section-title careers-section-title-location">
          Elementary Department
          <img
            src={require("../../assets/images/location.png")}
            className="location-icon-image"
          />
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31084.290445741815!2d123.6664019743164!3d13.128535200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a105ccfafe4555%3A0x9badc1ca2d020c02!2sPiamont%20Elementary%20School!5e0!3m2!1sen!2sph!4v1734602630042!5m2!1sen!2sph"
              width="100%"
              height="450"
              style={{ border: 0, marginTop: "30px", marginBottom: "50px" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

ContactUs.propTypes = {
  window: PropTypes.func,
};

export default ContactUs;

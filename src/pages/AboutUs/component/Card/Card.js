import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

function Card({ name, position, details, imageUrl, child }) {
  return (
    <div className="card" style={child ? {marginLeft: '20px'} : {}}>
      <div>
        <img
          src={imageUrl}
          width={'250px'}
          height={"250px"}
          style={{
            borderRadius: '800px',
            objectFit: 'cover',
            objectPosition: 'top'
          }}
        />
      </div>
      <p className="person-name">{name}</p>
      <p className="person-position">{position}</p>

      <div className="card-content">{details}</div>
    </div>
  );
}

Card.propTypes = {
  window: PropTypes.func,
};

export default Card;

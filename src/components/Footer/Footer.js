import React from 'react';
import "./Footer.css";

function Footer() {
  return (
    <div className='footer-container'>
      <div className='card-container'>
        <div className='footer-logo-container'>
          <div className='logo-section'>
            <img 
              src={require('../../assets/images/logo.png')}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain'
              }}
            />
            <img 
              src={require('../../assets/images/lasso-logo.png')}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain'
              }}
            />
          </div>
          <p className='school-title'>PiaMont Penafrancia Science Oriented School Foundation Inc.</p>
          <p className='footer-address'>P-6, Brgy. Peñafrancia Daraga, Albay, Philippines 4501 (Elementary Department)</p>
          <p className='footer-address'>Alcala Street, Brgy. Kimantong, Daraga, Albay, Philippines 4501 (Preschool Department)</p>
        </div>

        <div className='footer-section social-section'>
          <p className='card-title'>Social</p>
          
          <div className="social-btn" onClick={() => window.open("https://www.facebook.com/PiamontSchool", "_blank")}>
            <img
              src={require("../../assets/images/facebook.png")}
              width={"20px"}
              height={"20px"}
              alt="Facebook"
            />
          </div>
        </div>

        <div className='footer-section'>
          <p className='card-title'>Contact</p>

          <p className='footer-text'>{'(+63) 918-935-5-105'}</p>
          <p className='footer-text'>{'(052) 2018048'}</p>
          <p className='footer-text'>admin@piamont.com</p>
        </div>

        <div className='footer-section'>
          <p className='card-title'>General</p>

          <p className='footer-text'>Terms and Condition</p>
          <p className='footer-text'>Data Privacy</p>
        </div>
      </div>
            
      <div className='copy-right-section'>
        © Piamont. All Rights Reserved 2024
      </div>
    </div>
  );
}

export default Footer;

import React from 'react';
import "./Footer.css";

function Footer() {
  return (
    <div className='footer-container'>
      <div className='card-container'>
        <div>
          <div style={{width: 100}}>
            <img 
              src={require('../../assets/images/logo.png')}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain'
              }}
            />
          </div>
          <p className='school-title'>Piamont School</p>
          <p>P-6, Brgy. Peñafrancia Daraga, Albay, Philippines 4501 (Elementary Department)</p>
          <p>Alcala Street, Brgy. Kimantong, Daraga, Albay, Philippines 4501 (Preschool Department)</p>
        </div>

        <div className='card' style={{marginLeft: '50px'}}>
          <p className='card-title'>Social</p>
          
          <p>+63918-935-5-105</p>
          <p>0522018048</p>
        </div>

        <div className='card'>
          <p className='card-title'>Contact</p>

          <p>+63918-935-5-105</p>
          <p>0522018048</p>
          <p>admin@piamont.com</p>
        </div>

        <div className='card'>
          <p className='card-title'>General</p>

          <p>Terms and Condition</p>
          <p>Data Privacy</p>
        </div>
      </div>
            
      <div className='copy-right-section'>
        © Piamont School. All Rights Reserved 2024
      </div>
    </div>
  );
}

export default Footer;

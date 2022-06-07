import React from 'react';
import '../App.css';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>

      <p id='availableNow'>Available now for Android</p>
      <a href="https://play.google.com/store/apps/details?id=com.test.a5050_lottery" target="_blank">
        <img id='getItOnGooglePlay' src='./images/getItOnGooglePlay.png' alt='Get it on Google Play' />
      </a>


      <a id='about' href="./About"><u>About</u></a>
      {/* <a id='ContactUs'><u>Contact Us</u></a> */}

      <br/>
      <br/>
      <p id='finePrint1'>Some fine print stuff here, etc., etc.</p>
      <p id='finePrint2'>While using this site, you agree to have read out terms os use and privacy policy</p>

    </div>
  );
}

export default Footer;

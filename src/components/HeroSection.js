import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='my-container'>

      <img id='quickTixLogoLong' src='./images/QuickTixLogoLong.png' alt='QuickTix Logo' />
      
      <p id="aboutText">Powerful raffle and 50/50 management software</p>

      <p>Available now for Android</p>
      <a href="https://play.google.com/store/apps/details?id=com.test.a5050_lottery" target="_blank">
        <img id='getItOnGooglePlay' src='./images/getItOnGooglePlay.png' alt='Get it on Google Play' />
      </a>

    </div>
  );
}

export default HeroSection;

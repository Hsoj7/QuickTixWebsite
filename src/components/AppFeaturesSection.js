import React from 'react';
import '../App.css';
import './AppFeaturesSection.css';

const AppFeaturesSection = (props) => {

  return (
    <div className='appFeatures-container' style={{background: props.data.background}}>   

      {/* <img id='screenShot' style='float:left;' src={props.data.source} alt={props.data.alt} />
      <p id='description' style='float: right;'>Features here </p> */}

      <img id='screenShot' class="responsive" src={props.data.source} alt={props.data.alt} />
      <p id='description' style={{color: props.data.textColor}}>{props.data.text}</p>
            
    </div>
  );
}

export default AppFeaturesSection;
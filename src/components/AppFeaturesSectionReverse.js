import React from 'react';
import '../App.css';
import './AppFeaturesSectionReverse.css';

const AppFeaturesSectionReverse = (props) => {

  return (
    <div className='appFeaturesReverse-container' style={{background: props.data.background}}>   

      {/* <img id='screenShot' style='float:left;' src={props.data.source} alt={props.data.alt} />
      <p id='description' style='float: right;'>Features here </p> */}

      <p id='description' style={{color: props.data.textColor}}>{props.data.text}</p>
      <img id='screenShot' src={props.data.source} alt={props.data.alt} />

    </div>
  );
}

export default AppFeaturesSectionReverse;
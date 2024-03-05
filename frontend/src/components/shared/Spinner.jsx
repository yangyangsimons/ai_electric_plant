import React from 'react';
import spinner from "../../assets/loader.gif";
function Spinner() {
  return <div className='spinnerDiv'>
      <img src={spinner} alt="Loading...." />
  </div>;
}

export default Spinner;

import React from "react";
import './number.css'

const NumberButton = (props) => {
  {console.log(props)}
  return (
    <div className="number-container">
      {/* Display a button element rendering the data being passed down from the parent container on props */
      <button className="number-button">{props.button} </button>
      }
    </div>
  );
};

export default NumberButton;

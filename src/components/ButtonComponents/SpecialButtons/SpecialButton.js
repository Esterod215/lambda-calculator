import React from "react";
import './special.css'

const SpecialButton = (props) => {
  return (
    <>
      <button className="special-buttons">{props.specialChar}</button>
    </>
  );
};
export default SpecialButton;

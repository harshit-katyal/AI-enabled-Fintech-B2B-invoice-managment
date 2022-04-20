import React from "react";
import abc from '../images/hrc3.png'
import img2 from '../images/abc.svg'
import img3 from '../images/logo.svg.svg'

const Headlogo = () => {
  const image1 = img2;
  const image2 = img3;

  return (
    <div style={{ padding: "30px 15px" }} className="logo-hrc">
      <img
        style={{ display: "flex", height: "40px", float: "left" }}
        src={image1}
      />
      <img style={{ display: "inline-block", height: "50px",float: "center",marginRight: '15.4vw' }} src={image2} />
      </div>
  );
};

export default Headlogo;
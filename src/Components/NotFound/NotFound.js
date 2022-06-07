import React from "react";
import Image from "../../Image/404 page not found.png";
import CLink from "../Custom/CLink";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div>
      <img className="absolute" src={Image} alt="" />
      <CLink to={"/home"}>
        <button className="relative button button1 button2 position">
          Go Back Home
        </button>
      </CLink>
    </div>
  );
};

export default NotFound;

import React from "react";
import { Link } from "react-router-dom";
import CLink from "../Custom/CLink";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-around p-8 mx-auto font-sans xl:text-xl xl:w-2/3">
        <Link
          className="pr-56 no-underline text-[#D82E2F] font-sans font-semibold text-3xl uppercase"
          to="/"
        >
          Skytech <span className="text-[#03203C]">Prism</span>
        </Link>
        <CLink to={"/"}></CLink>
        <CLink to={"/home"}>HOME</CLink>
        <CLink to={"/reviews"}>REVIEWS</CLink>
        <CLink to={"/dashboard"}>DASHBOARD</CLink>
        <CLink to={"/blogs"}>BLOGS</CLink>
        <CLink to={"/login"}>LOGIN</CLink>

        <CLink to={"/*"}></CLink>
      </div>
    </div>
  );
};

export default Navbar;

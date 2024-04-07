import React from "react";
import error404 from "../assets/404.svg";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="p-5">
      <button className="rounded p-2 font-bold text-center border hover:bg-black hover:text-white">
        <Link to="/">Go to Home</Link>
      </button>
      <img src={error404} className="h-96 w-96 mx-auto" alt="page not found" />
    </div>
  );
};

export default NotFound;

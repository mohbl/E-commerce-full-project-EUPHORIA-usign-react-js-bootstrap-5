import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import logo from "../assets/Logo (9).svg";
import iconSearch from "../assets/Icon.svg";


const AuthNavbar = () => {
  return (
    <div className="nvovo bg-light">
        <div className="row">
          <div className="col-xl-2 col-md-3 col-6">
            <a href="#">
              <img src={logo} alt="logo" className="logo" />
            </a>
          </div>
          <div className="col-xl-3 col-md-3 col-6">
            <div className="search-bar">
              <input type="text" placeholder="Search" className="rounded-3" />
              <img src={iconSearch} alt="" className="search-icon" />
            </div>
          </div>
          <div className="col-xl-3 d-xl-block d-none ">
            <div className="language-selector">
              <select>
                <option value="en">English (United States)</option>
                <option value="fr">French</option>
                <option value="es">Arabic</option>
              </select>
            </div>
          </div>
          <div className="butt col-xl-4 col-md-6 ">
            <button type="button" className="btn1 rounded-2 text-white">Login</button>
            <button type="button" className="btn2 rounded-2">Sign up</button>
          </div>
          
        </div>
    </div>
  );
};

export default AuthNavbar;

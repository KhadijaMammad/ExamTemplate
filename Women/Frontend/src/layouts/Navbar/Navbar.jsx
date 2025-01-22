import React from "react";
import "./navbar.css";
import LogoImage from "../../assets/images/logo.png";
import {NavLink} from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <header>
        <div className="container">
          <div className="header">
            <div className="first-section">
              <div className="left">
                <span className="telephone">+12312-3-1209</span>
                <span className="email">SUPPORT@COLORLIB.COM</span>
              </div>
              <div className="right">
                <button className="basket">
                  <i class="fa-solid fa-cart-shopping"></i>
                  <sup className="basket-count">0</sup>
                </button>
                <button className="favorite">
                  <i class="fa-solid fa-heart"></i>
                  <sup className="fav-count">0</sup>
                </button>
                <button className="login">LOGIN</button>
              </div>
            </div>
            <div className="second-section">
              <div className="navbar">
                <div className="logo">
                  <img src={LogoImage} />
                </div>
                <div className="lists">
                  <ul>
                    <NavLink to={"./card"} className="list">
                      HOME
                    </NavLink>
                    <NavLink className="list">CATEGORY</NavLink>
                    <NavLink className="list">MEN</NavLink>
                    <NavLink className="list">WOMEN</NavLink>
                    <NavLink className="list">LATEST</NavLink>
                    <NavLink className="list">PAGES</NavLink>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

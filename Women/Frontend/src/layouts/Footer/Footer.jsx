import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <>
      <div className="container">
        <div className="footer-section">
          <div className="footer-first">
            <div className="first">
              <h3 className="footer-heading">About Us</h3>
              <p className="footer-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore dolore magna aliqua.
              </p>
            </div>
            <div className="second">
              <h3 className="footer-heading">Newsletter</h3>
              <p style={{lineHeight: "2.8rem"}} className="footer-text">
                Stay update with our latest
              </p>
              <input
                type="email"
                placeholder="Enter email.."
                className="email-input"
              />
              <i class="fa-solid fa-arrow-right arrow"></i>
            </div>
            <div className="third">
              <h3 className="footer-heading">Follow us</h3>
              <p style={{lineHeight: "2.9rem"}} className="footer-text">
                Let us be social
              </p>
              <div className="footer-icons">
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-solid fa-globe"></i>
                <i class="fa-brands fa-behance"></i>
              </div>
            </div>
          </div>
          <div className="footer-madein">
            <p className="madein">
              Copyright ©2025 All rights reserved | This template is made with
              <i class="fa-regular fa-heart" style={{color: "red"}}></i> by
              <span style={{color: "red"}}>Colorlib</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import {Link} from "react-router-dom";
import './header.css'

export default function Header() {
  return (
    <>
      <div className="container">
        <div className="add-navbar">
          <div className="add-lists">
            <div className="add-left">
              <div className="add-logo">
                <h3>Add page</h3>
              </div>
            </div>
            <div className="add-right">
              <ul>
                <Link to={'./table'} className="add-list">Table</Link>
                <Link className="add-list">Form</Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

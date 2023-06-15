"use client";
import React, { useState } from "react";

export function Navbar() {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <header className="header">
        <nav>
          <a href="/">
            <img src="/images/uplift-logo.png" alt="" id="header_logo" />
          </a>

          <div className="nav-links-group">
            <a href="" className="nav-courses nav-link">
              Courses
            </a>
            <a href="" className="nav-blog nav-link">
              Blog
            </a>
            <a href="" className="nav-about nav-link">
              About
            </a>
            <a href="" className="nav-contact nav-link">
              Contact
            </a>
          </div>

          <div className="nav-cta">
            <button className="nav-sign-in">Sign In</button>
            <button className="nav-contact-us">Contact Us</button>
          </div>

          <input
            className="menu-btn"
            type="checkbox"
            id="menu-btn"
            onClick={() => {
              setClicked((current) => !current);
            }}
          />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
        </nav>

        <div id="header_menu" className={clicked ? "menu-open" : "hide"}>
          <a href="" className="nav-courses">
            Courses
          </a>
          <a href="" className="nav-blog">
            Blog
          </a>
          <a href="" className="nav-about">
            About
          </a>
          <a href="" className="nav-contact">
            Contact
          </a>
          <button className="nav-sign-in" id="modal-sign">
            Sign In
          </button>
          <button className="nav-contact-us">Contact Us</button>
        </div>
      </header>
    </>
  );
}

import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbartop.css";

export default class Navbartop extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbarRow">
          GOOGLE BOOKS &nbsp; &nbsp; &nbsp;
          <div className="navbarleft">
            <Link
              to="/"
              className={
                window.location.pathname === "/" ||
                window.location.pathname === "/home"
                  ? "nav-link active"
                  : "nav-link"
              }
              style={{ color: "bisque" }}
            >
              Search &nbsp; &nbsp; &nbsp;
            </Link>
          </div>
          <div className="navbarright">
            <Link
              to="/portfolio"
              className={
                window.location.pathname === "/Portfolio"
                  ? "nav-link active"
                  : "nav-link"
              }
              style={{ color: "bisque" }}
            >
              Saved
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

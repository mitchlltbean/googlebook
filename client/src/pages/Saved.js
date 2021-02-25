import React, { Component } from "react";
import Navbartop from "../components/Navbartop";
import Save from "../components/Save";

export default class Saved extends Component {
  render() {
    return (
      <div>
        <Navbartop />
        <Save />
      </div>
    );
  }
}

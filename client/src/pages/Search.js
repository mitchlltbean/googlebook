import React, { Component } from "react";
import Navbartop from "../components/Navbartop";
import Header from "../components/Header";
import Results from "../components/Results";

export default class Search extends Component {
  render() {
    return (
      <div>
        <div>
          <Navbartop />
          <Header />
          <br></br>
        </div>
        <Results />
      </div>
    );
  }
}

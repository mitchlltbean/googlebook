import React, { Component } from "react";

import "./save.css";

export default class Save extends Component {
  render() {
    return (
      <div>
        <div className="headRes">
          <h1 style={{ textAlign: "center" }}>(React) GOOGLE BOOKS</h1>
          <h2 style={{ textAlign: "center" }}>Saved Books</h2>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className="head">
          <div>Hello</div>
          {/* TODO:Create a sumbit input to delete this book to DB to save */}
          <form onSubmit={this.onSubmit}>
            <input
              name="save"
              type="submit"
              value="Delete"
              style={{ width: "70px", height: "30px" }}
            ></input>
            {/* TODO:Create button that will take them too google books of book */}
            <input
              name="save"
              type="submit"
              value="View"
              style={{ width: "70px", height: "30px" }}
            ></input>
          </form>
        </div>
      </div>
    );
  }
}

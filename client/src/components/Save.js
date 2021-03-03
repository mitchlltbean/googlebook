import React, { Component } from "react";
import axios from "axios";
import "./save.css";

export default class Save extends Component {
  constructor() {
    super();
    this.state = {
      bookData: [],
    };
  }

  //TODO:create axios call to database with the component did mount function to populate state for books to be .map() on load
  // componentDidMount() {
  //   // debugger
  //   axios({
  //     method: "GET",
  //     url: "to Database",
  //     withCredentials: true,
  //   })
  //     .then((response) => {
  //       console.log(response.data);
  //       this.setState(bookData);
  //     })
  //     .catch((error) => {
  //       console.log("error", error);
  //     });
  // }

  //TODO:create axios call to database to delete the book entry based on its ID, then another call to the dabatabse to refresh the state with the books that a currently in the database.
  // onDelete = (e) => {
  //   e.preventDefault();
  //   console.log("hello");

  //   axios
  //     .post(url + "/", { searchTerm })
  //     .then((result) => {
  //       console.log(result.data.items, "!!!!!!!");
  //       console.log(bookData, "@@@@@@@@@@");
  //     })
  //     .catch((err) => {
  //       console.log(err, "!!!!!!!!");
  //     });
  // };

  //TODO: get this handlesubmit to function on click event to deal with deleting
  handleDeleteSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
  };

  //TODO: get this handlesubmit to function on click event to deal with deleting
  handleDeleteSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
  };

  //TODO: handle submit for button click to redirect view to google books
  handleView = (e) => {
    e.preventDefault();
    console.log("hello");
  };

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
          {/* //TODO: Get books from database to polulate here using the same .map method as used in header component */}
          <div>Book Here</div>
          {/* TODO:Create a sumbit input to delete this book to DB also handle submit attached to controll button*/}
          <form onSubmit={this.onSubmit}>
            <input
              name="save"
              type="submit"
              value="Delete"
              style={{ width: "70px", height: "30px" }}
            ></input>
            {/* TODO:Create button that will take them too google books of the current selected book*/}
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

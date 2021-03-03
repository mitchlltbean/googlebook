import React, { Component } from "react";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import axios from "axios";
import url from "../utils/localhost";
import "./Header.css";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
      bookData: [],
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
    // get our form data out of state
    const { searchTerm } = this.state;

    axios
      .post(url + "/", { searchTerm })
      .then((result) => {
        console.log(result.data.items, "!!!!!!!");
        const bookData = result.data.items;
        this.setState({ bookData: bookData });
        console.log(bookData, "@@@@@@@@@@");
      })
      .catch((err) => {
        console.log(err, "!!!!!!!!");
      });
  };

  //TODO: handle submit for button click to redirect view to google books
  handleView = (e) => {
    e.preventDefault();
    console.log("hello");
  };

  //TODO: Create a handle function for saving a book to the DB with axios put
  // onSavesubmit = (e) => {
  //   e.preventDefault();
  //   console.log("hello");

  //   axios
  //     .put()
  //     .then(function (response) {
  //       // console.log(response.data, "!!!!!!!!!!");
  //       res.json(response);
  //     })
  //     .catch((err) => {
  //       console.log(err, "!!!!!!!!");
  //       res.status(500).json(err);
  //     });
  // };

  render() {
    const { searchTerm } = this.state;

    return (
      <div className="headDiv">
        <div className="head">
          <Row>
            <Col>
              <h1 style={{ textAlign: "center" }}>(React) GOOGLE BOOKS</h1>
              <h2 style={{ textAlign: "center" }}>Search and Save Books</h2>
            </Col>
          </Row>
          <div>
            <form onSubmit={this.onSubmit}>
              <br></br>
              <h2 className="">Book Search</h2>

              <label>
                Book:
                <input
                  type="text"
                  name="searchTerm"
                  value={searchTerm}
                  onChange={this.onChange}
                  style={{ width: "100%" }}
                />
              </label>
              <input type="submit" value="Submit" />
            </form>
          </div>
          <div className="headRes">
            Search a Book
            <div className="results">
              {this.state.bookData.map((book) => (
                <ul className="ul">
                  {book.volumeInfo.imageLinks ? (
                    <img
                      src={book.volumeInfo.imageLinks.thumbnail}
                      style={{ width: "75px" }}
                    ></img>
                  ) : (
                    <p>no img</p>
                  )}

                  <li>Title:{book.volumeInfo.title}</li>
                  <li>
                    Authors:
                    {book.volumeInfo.authors ? (
                      book.volumeInfo.authors.map((author) => (
                        <span>{author}</span>
                      ))
                    ) : (
                      <p>no author</p>
                    )}
                  </li>
                  <li>Description:{book.volumeInfo.description}</li>
                  {/* TODO:Create a sumbit input to send this book to DB to save with onClick event*/}
                  <form onSubmit={this.onSubmit}>
                    <input
                      name="save"
                      type="submit"
                      value="save"
                      style={{ width: "70px", height: "30px" }}
                    ></input>
                    {/* TODO:Create button that will take them too google books of book with onClick event*/}
                    <input
                      name="save"
                      type="submit"
                      value="view"
                      style={{ width: "70px", height: "30px" }}
                    ></input>
                  </form>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

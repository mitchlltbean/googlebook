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
            hello
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
                  <li
                    dangerouslySetInnerHTML={{
                      __html: book.searchInfo.textSnippet,
                    }}
                  ></li>
                  <form>
                    <input
                      name="save"
                      type="submit"
                      value="Submit"
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

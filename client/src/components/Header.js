import React, { Component } from "react";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";

import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="headDiv">
        <Container className="head">
          <Row>
            <Col>
              <h1 style={{ textAlign: "center" }}>(React) GOOGLE BOOKS</h1>
              <h2 style={{ textAlign: "center" }}>Search and Save Books</h2>
            </Col>
          </Row>
          <form>
            <br></br>
            <h2 className="">Book Search</h2>
            <label>
              Book:
              <input type="text" name="name" style={{ width: "100%" }} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </Container>
      </div>
    );
  }
}

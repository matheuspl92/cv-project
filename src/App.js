import React from "react";
import { Component } from "react";
import { Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Header />
        </Row>
        <Row>
          <Content />
        </Row>
        <Row>
          <Footer />
        </Row>
      </Container>
    )
  }
}

export default App;

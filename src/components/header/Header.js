import React from "react";
import { Component } from "react";
import { Container } from "react-bootstrap";
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <Container id="header">
                <h1 id="header-title">CV Maker App</h1>
            </Container>
        )
    }
}
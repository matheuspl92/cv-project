import React from "react";
import { Component } from "react";
import { Container } from "react-bootstrap";
import './Footer.css';

export default class Footer extends Component {
    render() {
        return (
            <Container id='footer'>
                <p>Made by <a href="https://github.com/matheuspl92/weather-app" rel="noopener noreferrer" target="_blank">matheuspl92</a></p>
            </Container>
        )
    }
}
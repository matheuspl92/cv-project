import React from "react";
import { Container } from "react-bootstrap";
import './Footer.css';

const Footer = () => {

    return (
        <Container id='footer'>
            <p>Made by <a href="https://github.com/matheuspl92/weather-app" rel="noopener noreferrer" target="_blank">matheuspl92</a></p>
        </Container>
    );
};

export default Footer;
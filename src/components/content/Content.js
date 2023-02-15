import React from "react";
import { Component } from "react";
import { Container } from "react-bootstrap";
import Form from "../form/Form";

export default class Content extends Component {
    render() {
        return (
            <Container>
                <Form />
            </Container>
        )
    }
}
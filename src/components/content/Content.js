import React from "react";
import { Component } from "react";
import { Container } from "react-bootstrap";
import './Content.css';
import Form from "../form/Form";

export default class Content extends Component {
    constructor() {
        super();

        this.state = { formClass: 'visible' }

        this.handleCreate = this.handleCreate.bind(this);
    };

    handleCreate() {
        this.setState({ formClass: 'hidden' });
    };

    render() {

        return (
            <Container>
                <div className={this.state.formClass}>
                    <Form handleCreate={this.handleCreate} />
                </div>

            </Container>
        )
    }
}
import React from "react";
import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import './Content.css';
import Form from "../form/Form";
import Curriculum from "../curriculum/Curriculum";

export default class Content extends Component {
    constructor() {
        super();

        this.state = { formClass: 'visible', curriculumClass: 'hidden' }

        this.handleCreate = this.handleCreate.bind(this);
    };

    handleCreate(formData) {
        this.setState({ formClass: 'hidden', curriculumClass: 'visible', formData: formData});
    };

    render() {

        return (
            <Container>
                <Row className="position-relative">
                    <Col>
                        <Form className={this.state.formClass} handleCreate={this.handleCreate} />
                    </Col>
                    <Col className="position-absolute">
                        <Curriculum className={this.state.curriculumClass} data={this.state.formData} />
                    </Col>
                </Row>
            </Container>
        )
    }
}
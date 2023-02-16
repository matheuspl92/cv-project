import React from "react";
import { Component } from "react";
import { Container, Row } from "react-bootstrap";
import './Curriculum.js';

export default class Curriculum extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Container className={this.props.className}>
            </Container>
        );
    }
}
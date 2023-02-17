import React from "react";
import { Component } from "react";
import { Button } from "react-bootstrap";
import './Curriculum.css';

export default class Curriculum extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { data } = this.props;
        return (
            <div id='curriculum'>
                <div id="c-header">
                    <h1>{data.personal.name}</h1>
                </div>
                <div id="c-sidebar">
                    <p className="sidebar-text">Address: {data.personal.address}</p>
                    <p className="sidebar-text">Date of Birth: {data.personal.birthDate}</p>
                    <p className="sidebar-text">Email: {data.personal.email}</p>
                    <p className="sidebar-text">Phone Number: {data.personal.phone}</p>
                </div>
                <div id="c-body">
                    <div id="edu-info" className="body-info">
                        <h3>Educational Info</h3>
                        <p className="edu-text">Institution: {data.educational.institution}</p>
                        <p className="edu-text">Title of Study: {data.educational.studyTitle}</p>
                        <p className="edu-text">Date of Study: {data.educational.studyDate}</p>
                    </div>
                    <div id="job-info" className="body-info">
                        <h3>Job Info</h3>
                        <p className="job-text">Company: {data.job.company}</p>
                        <p className="job-text">Job Title: {data.job.jobTitle}</p>
                        <p className="job-text">Started Job: {data.job.startedJobDate}</p>
                        <p className="job-text">Ended Job: {data.job.endedJobDate}</p>
                        <p className="job-text">Job Description: {data.job.jobDescription}</p>
                    </div>
                </div>
                <div id="button-panel">
                    <Button size='lg' onClick={this.props.handleEdit}>Edit Curriculum</Button>
                </div>
            </div>
        );
    }
}
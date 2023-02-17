import React from "react";
import { Component } from "react";
import { Button } from "react-bootstrap";

export default class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            personal: {
                name: '',
                address: '',
                birthDate: '',
                email: '',
                phone: '',
            },
            educational: {
                institution: '',
                studyTitle: '',
                studyDate: '',
            },
            job: {
                company: '',
                jobTitle: '',
                startedJobDate: '',
                endedJobDate: '',
                jobDescription: '',
            }
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, fieldset, prop) {
        this.setState((prevState) => {
            prevState[fieldset][prop] = event.target.value;
            return prevState;
        });
    }

    render() {
        const { name, address, birthDate, email, phone } = this.state.personal;
        const { institution, studyTitle, studyDate } = this.state.educational;
        const { company, jobTitle, startedJobDate, endedJobDate, jobDescription } = this.state.educational;
        return (
            <form className={this.props.className} onSubmit={(event) => {
                event.preventDefault();
                this.props.handleCreate(this.state);
                }}>
                    
                <fieldset>
                    <legend>Personal Info</legend>
                    <label>
                        Name:
                        <input type='text' required value={name} onChange={(event) => {
                            this.handleChange(event, 'personal', 'name');
                        }}/>
                    </label>
                    <label>
                        Address:
                        <input type='text' required value={address} onChange={(event) => {
                            this.handleChange(event, 'personal', 'address');
                        }}/>
                    </label>
                    <label>
                        Date of Birth:
                        <input type='date' required value={birthDate} onChange={(event) => {
                            this.handleChange(event, 'personal', 'birthDate');
                        }}/>
                    </label>
                    <label>
                        Email:
                        <input type='email' required value={email} onChange={(event) => {
                            this.handleChange(event, 'personal', 'email');
                        }}/>
                    </label>
                    <label>
                        Phone Number:
                        <input type='tel' required value={phone} onChange={(event) => {
                            this.handleChange(event, 'personal', 'phone');
                        }}/>
                    </label>
                </fieldset>
                <fieldset>
                    <legend>Educational Info</legend>
                    <label>
                        Institution Name:
                        <input type='text' required value={institution} onChange={(event) => {
                            this.handleChange(event, 'educational', 'institution');
                        }}/>
                    </label>
                    <label>
                        Title of Study:
                        <input type='text' required value={studyTitle} onChange={(event) => {
                            this.handleChange(event, 'educational', 'studyTitle');
                        }}/>
                    </label>
                    <label>
                        Date of Study:
                        <input type='date' required value={studyDate} onChange={(event) => {
                            this.handleChange(event, 'educational', 'studyDate');
                        }}/>
                    </label>
                </fieldset>
                <fieldset>
                    <legend>Professional Info</legend>
                    <label>
                        Company Name:
                        <input type='text' required value={company} onChange={(event) => {
                            this.handleChange(event, 'job', 'company');
                        }}/>
                    </label>
                    <label>
                        Job Title:
                        <input type='text' required value={jobTitle} onChange={(event) => {
                            this.handleChange(event, 'job', 'jobTitle');
                        }}/>
                    </label>
                    <label>
                        Started Job:
                        <input type='date' required value={startedJobDate} onChange={(event) => {
                            this.handleChange(event, 'job', 'startedJobDate');
                        }}/>
                    </label>
                    <label>
                        Ended Job:
                        <input type='date' required value={endedJobDate} onChange={(event) => {
                            this.handleChange(event, 'job', 'endedJobDate');
                        }}/>
                    </label>
                    <label>
                        Job Description:
                        <textarea required value={jobDescription} onChange={(event) => {
                            this.handleChange(event, 'job', 'jobDescription');
                        }}/>
                    </label>
                </fieldset>
                <Button size="lg" type="submit">Create CV</Button>
            </form>
        );
    }
}
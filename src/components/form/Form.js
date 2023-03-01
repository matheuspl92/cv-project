import React, { useState } from "react";
import { Button } from "react-bootstrap";
import './Form.css';

const Form = (props) => {
    const [data, setData] = useState({
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
    });

    const handleChange = (event, fieldset, prop) => {
        const newData = {...data};
        newData[fieldset][prop] = event.target.value;
        setData(newData);
    };

    const { name, address, birthDate, email, phone } = data.personal;
    const { institution, studyTitle, studyDate } = data.educational;
    const { company, jobTitle, startedJobDate, endedJobDate, jobDescription } = data.educational;

    return (

        <form className={props.className} onSubmit={(event) => {
            event.preventDefault();
            props.handleCreate(data);
        }}>

            <fieldset>
                <legend>Personal Info</legend>
                <div className="label-group">
                    <label>
                        Name:
                        <input type='text' required value={name} onChange={(event) => {
                            handleChange(event, 'personal', 'name');
                        }} />
                    </label>
                    <label>
                        Address:
                        <input type='text' required value={address} onChange={(event) => {
                            handleChange(event, 'personal', 'address');
                        }} />
                    </label>
                    <label>
                        Date of Birth:
                        <input type='date' required value={birthDate} onChange={(event) => {
                            handleChange(event, 'personal', 'birthDate');
                        }} />
                    </label>
                    <label>
                        Email:
                        <input type='email' required value={email} onChange={(event) => {
                            handleChange(event, 'personal', 'email');
                        }} />
                    </label>
                    <label>
                        Phone Number:
                        <input type='tel' required value={phone} onChange={(event) => {
                            handleChange(event, 'personal', 'phone');
                        }} />
                    </label>
                </div>
            </fieldset>
            <fieldset>
                <legend>Educational Info</legend>
                <div className="label-group">
                    <label>
                        Institution Name:
                        <input type='text' required value={institution} onChange={(event) => {
                            handleChange(event, 'educational', 'institution');
                        }} />
                    </label>
                    <label>
                        Title of Study:
                        <input type='text' required value={studyTitle} onChange={(event) => {
                            handleChange(event, 'educational', 'studyTitle');
                        }} />
                    </label>
                    <label>
                        Date of Study:
                        <input type='date' required value={studyDate} onChange={(event) => {
                            handleChange(event, 'educational', 'studyDate');
                        }} />
                    </label>
                </div>
            </fieldset>
            <fieldset>
                <legend>Professional Info</legend>
                <div className="label-group">
                    <label>
                        Company Name:
                        <input type='text' required value={company} onChange={(event) => {
                            handleChange(event, 'job', 'company');
                        }} />
                    </label>
                    <label>
                        Job Title:
                        <input type='text' required value={jobTitle} onChange={(event) => {
                            handleChange(event, 'job', 'jobTitle');
                        }} />
                    </label>
                    <label>
                        Started Job:
                        <input type='date' required value={startedJobDate} onChange={(event) => {
                            handleChange(event, 'job', 'startedJobDate');
                        }} />
                    </label>
                    <label>
                        Ended Job:
                        <input type='date' required value={endedJobDate} onChange={(event) => {
                            handleChange(event, 'job', 'endedJobDate');
                        }} />
                    </label>
                    <label>
                        Job Description:
                        <textarea required value={jobDescription} onChange={(event) => {
                            handleChange(event, 'job', 'jobDescription');
                        }} />
                    </label>
                </div>
            </fieldset>
            <Button size="lg" type="submit">Create CV</Button>
        </form>
    );
};

export default Form;
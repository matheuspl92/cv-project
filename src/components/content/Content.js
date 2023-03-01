import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import './Content.css';
import Form from "../form/Form";
import Curriculum from "../curriculum/Curriculum";

const Content = () => {

    const [data, setData] = useState({
        formClass: 'visible',
        curriculumClass: 'hidden',
        formData: {
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
    });

    const handleCreate = (formData) => {
        setData({ formClass: 'hidden', curriculumClass: 'visible', formData: formData });
    };

    const handleEdit = () => {
        setData({ formClass: 'visible', curriculumClass: 'hidden', formData: data.formData});
    };

    return (

        <Container>
            <Row className="position-relative">
                <Col>
                    <Form className={data.formClass} handleCreate={handleCreate} />
                </Col>
                <Col className={"position-absolute " + data.curriculumClass}>
                    <Curriculum data={data.formData} handleEdit={handleEdit} />
                </Col>
            </Row>
        </Container>

    );
};

export default Content;
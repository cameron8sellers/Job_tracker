import React, { useState } from "react"
import { Form, Col, Button, Card } from "react-bootstrap"

export default function CompaniesForm(){
    const [companies, setCompanies] = useState([
        // {
        //     companyName: "Google",
        //     jobPosition: "Software Engineer",
        //     applied: false
        // },
        // {
        //     companyName: "Amazon",
        //     jobPosition: "Software Engineer",
        //     applied: false
        // }
    ])
    const [value, setValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        addCompany(value)
        setValue("")
    }

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const addCompany = company => {
        const newCompany = [...companies, company]
        setCompanies(newCompany)
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Row>
                    <Col>
                        <Form.Control
                            type="text"
                            // value={value}
                            addCompany={addCompany}
                            onChange={handleChange}
                            placeholder="Company Name" 
                        />
                    </Col>
                    <Col>
                        <Form.Control
                            type="text"
                            // value={value}
                            addCompany={addCompany}
                            onChange={handleChange}
                            placeholder="Job Position" 
                        />
                    </Col>
                    <Col>
                        <Form.Control type="Submit" value="Submit" />
                    </Col>
                </Form.Row>
            </Form>
            {companies.map((company, index) => {
                return (
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                {company.companyName}
                            </Card.Text>
                            <Card.Text>
                                {company.jobPosition}
                            </Card.Text>
                            <Card.Text>
                                {company.applied}
                            </Card.Text>
                            <i className="fas fa-plus"></i>
                        </Card.Body>
                    </Card>
                )
            })}
        </>
    )
}
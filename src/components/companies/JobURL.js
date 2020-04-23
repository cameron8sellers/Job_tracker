import React from "react"
import { Form } from "react-bootstrap"

export default function JobURL( {companies, setCompanies} ){
    const handleJobURL = (e) => {
        let newCompanies = { ...companies }
        newCompanies.jobURL = e.target.value
        setCompanies(newCompanies)
    }

    return (
        <>
            <Form.Group>
                <Form.Label>Job URL:</Form.Label>
                <Form.Control
                    type="text"
                    value={companies.jobURL}
                    onChange={handleJobURL}
                />
            </Form.Group>
        </>
    )
}
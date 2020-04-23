import React from "react"
import { Form } from "react-bootstrap"

export default function JobPosition( {companies, setCompanies} ){
    const handleJobPosition = (e) => {
        let newCompanies = { ...companies }
        newCompanies.jobPosition = e.target.value
        setCompanies(newCompanies)
    }

    return (
        <>
        <Form.Group>
            <Form.Label>Job Position:</Form.Label>
            <Form.Control
                type="text"
                value={companies.jobPosition}
                onChange={handleJobPosition}
            />
        </Form.Group>
        </>
    )
}
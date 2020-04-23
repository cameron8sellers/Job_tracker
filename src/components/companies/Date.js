import React from "react"
import { Form } from "react-bootstrap"

export default function Date( {companies, setCompanies} ){
    const handleDate = (e) => {
        let newCompanies = { ...companies }
        newCompanies.date = e.target.value
        setCompanies(newCompanies)
    }

    return (
        <>
            <Form.Group>
                <Form.Label>Date:</Form.Label>
                <Form.Control
                    type="text"
                    value={companies.date}
                    onChange={handleDate}
                />
            </Form.Group>
        </>
    )
}
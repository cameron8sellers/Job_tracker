import React from "react"
import { Form } from "react-bootstrap"

export default function PointOfContact( {companies, setCompanies} ){
    const handlePointOfContact = (e) => {
        let newCompanies = { ...companies }
        newCompanies.pointOfContact = e.target.value
        setCompanies(newCompanies)
    }

    return (
        <>
            <Form.Group>
                <Form.Label>Point of Contact:</Form.Label>
                <Form.Control
                    type="text"
                    value={companies.pointOfContact}
                    onChange={handlePointOfContact}
                />
            </Form.Group>
        </>
    )
}
import React from "react"
import { Form } from "react-bootstrap"

export default function PointOfContact( {companies, setCompanies} ){
    const handlePointOfContact = (e) => {
        let newCompanies = { ...companies }
        newCompanies.pointOfContact = e.target.value
        setCompanies(newCompanies)
    }

    return (
        <Form.Control
            type="text"
            value={companies.pointOfContact}
            onChange={handlePointOfContact}
            placeholder="Point of Contact" 
        />
    )
}
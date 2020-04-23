import React from "react"
import { Form } from "react-bootstrap"

export default function CompanyName( {companies, setCompanies} ){
    const handleCompanyName = (e) => {
        let newCompanies = { ...companies }
        newCompanies.companyName = e.target.value
        setCompanies(newCompanies)
    }

    return (
        <>
            <Form.Group>
                <Form.Label>Company Name:</Form.Label>
                <Form.Control
                    type="text"
                    value={companies.companyName}
                    onChange={handleCompanyName}
                />
            </Form.Group>
        </>
    )
}
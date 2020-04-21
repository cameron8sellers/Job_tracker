import React, { useState, useContext } from "react"
import { Form, Col, Card } from "react-bootstrap"
import {TrackerContext} from "../../App";

export default function CompaniesForm(props){
    const sharedStates = useContext(TrackerContext);
    console.log(sharedStates)
    const [companies, setCompanies] = useState([
        {
            companyName: "",
            jobPosition: "",
            jobURL: "",
            date: "",
            pointOfContact: "",
        }
    ])
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setCompanies(
            {
                companyName: "",
                jobPosition: "",
                jobURL: "",
                date: "",
                pointOfContact: "",
            }
        )
        sharedStates.userProfile.targetCompanies.push(companies)
    }

    const handleCompanyName = (e) => {
        let newCompanies = { ...companies }
        newCompanies.companyName = e.target.value
        setCompanies(newCompanies)
    }

    const handleJobPosition = (e) => {
        let newCompanies = { ...companies }
        newCompanies.jobPosition = e.target.value
        setCompanies(newCompanies)
    }

    const handleJobURL = (e) => {
        let newCompanies = { ...companies }
        newCompanies.jobURL = e.target.value
        setCompanies(newCompanies)
    }

    const handleDate = (e) => {
        let newCompanies = { ...companies }
        newCompanies.date = e.target.value
        setCompanies(newCompanies)
    }

    const handlePointOfContact = (e) => {
        let newCompanies = { ...companies }
        newCompanies.pointOfContact = e.target.value
        setCompanies(newCompanies)
    }

    // const newCompanies = companies.map((company, index) => { 
    //     return ( 
    //             <Card style={{ width: '18rem' }}>
    //                 <Card.Body>
    //                     <Card.Title>Card Title</Card.Title>
    //                     <Card.Text>
    //                         {company.companyName}
    //                     </Card.Text>
    //                     <Card.Text>
    //                         {company.jobPosition}
    //                     </Card.Text>
    //                     <Card.Text>
    //                         {company.jobURL}
    //                     </Card.Text>
    //                     <i className="fas fa-plus"></i>
    //                 </Card.Body>
    //             </Card>
    //         )
    //     })

    return (
        <>
            <Form onSubmit={handleSubmit}>
                {/* <Form.Row> */}
                    {/* <Col> */}
                        <Form.Control
                            type="text"
                            value={companies.companyName}
                            onChange={handleCompanyName}
                            placeholder="Company Name" 
                        />
                    {/* </Col>
                    <Col> */}
                        <Form.Control
                            type="text"
                            value={companies.jobPosition}
                            onChange={handleJobPosition}
                            placeholder="Job Position" 
                        />
                    {/* </Col>
                    <Col> */}
                        <Form.Control
                            type="text"
                            value={companies.jobURL}
                            onChange={handleJobURL}
                            placeholder="Job URL" 
                        />
                    {/* </Col>
                    <Col> */}
                        <Form.Control
                            type="text"
                            value={companies.date}
                            onChange={handleDate}
                            placeholder="Date Submitted" 
                        />
                    {/* </Col>
                    <Col> */}
                        <Form.Control
                            type="text"
                            value={companies.date}
                            onChange={handleDate}
                            placeholder="Date Submitted" 
                        />
                    {/* </Col>
                    <Col> */}
                        <Form.Control type="Submit" value="Submit" />
                    {/* </Col>
                </Form.Row> */}
            </Form>


            {companies.companyName}

        </>
    )
}
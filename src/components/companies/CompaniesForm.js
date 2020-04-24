import React, { useState, useContext } from "react"
import { Form, Col, Container, Row } from "react-bootstrap"
import { TrackerContext } from "../../App"
import { updateUserProfile } from '../../services/api-helper-userProfile'
import { useMediaQuery } from "react-responsive"
import CompanyName from "./CompanyName"
import JobPosition from "./JobPosition"
import JobURL from "./JobURL"
import Date from "./Date"
import PointOfContact from "./PointOfContact"
import Cards from "./cards"
import "./companies.css"


export default function CompaniesForm(){
    const isDesktop = useMediaQuery({query: "(min-width:1020px)"}) 
    const sharedStates = useContext(TrackerContext);
    const [companies, setCompanies] = useState([
        {
            companyName: "",
            jobPosition: "",
            jobURL: "",
            date: "",
            pointOfContact: ""
        }
    ])
    
    const handleSubmit = (e) => {
        e.preventDefault()
        sharedStates.userProfile.targetCompanies.push(companies)
        updateUserProfile(sharedStates.token, sharedStates.userProfile)
        setCompanies(
            {
                companyName: "",
                jobPosition: "",
                jobURL: "",
                date: "",
                pointOfContact: ""
            }
        )
    }

    const handleDelete = (index) => {
        sharedStates.userProfile.targetCompanies.splice(index, 1)
        setCompanies( {...companies} )
        updateUserProfile(sharedStates.token, sharedStates.userProfile)
    }

    return (
        <>
            {
                isDesktop ? 
                    (
                        <Form style={{width: "50%", display: "block", margin: "1% auto"}} className="companies" onSubmit={handleSubmit}>
                            <Form.Row>
                                <Col>
                                    <CompanyName companies={companies} setCompanies={setCompanies} />
                                </Col>
                                <Col>
                                    <JobPosition companies={companies} setCompanies={setCompanies} />
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col>
                                    <JobURL companies={companies} setCompanies={setCompanies} />
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col>
                                    <Date companies={companies} setCompanies={setCompanies} />
                                </Col>
                                <Col>
                                    <PointOfContact companies={companies} setCompanies={setCompanies} />
                                </Col>
                            </Form.Row>
                            <Form.Control className="submit" type="Submit" value="Submit" />
                        </Form>
                    ) : 
                    (
                        <Form className="companies" onSubmit={handleSubmit}>
                            <Form.Row>
                                <Col>
                                    <CompanyName companies={companies} setCompanies={setCompanies} />
                                </Col>
                                <Col>
                                    <JobPosition companies={companies} setCompanies={setCompanies} />
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col>
                                    <JobURL companies={companies} setCompanies={setCompanies} />
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col>
                                    <Date companies={companies} setCompanies={setCompanies} />
                                </Col>
                                <Col>
                                    <PointOfContact companies={companies} setCompanies={setCompanies} />
                                </Col>
                            </Form.Row>
                            <Form.Control className="submit" type="Submit" value="Submit" />
                        </Form>
                    )
            }
                        <Container>
                            <Row>
                                <Cards handleDelete={handleDelete} />
                            </Row>
                        </Container>
        </>
    )
}
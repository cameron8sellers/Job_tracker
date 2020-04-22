import React, { useState, useContext } from "react"
import { Form } from "react-bootstrap"
import { TrackerContext } from "../../App";
import CompanyName from "./CompanyName"
import JobPosition from "./JobPosition"
import JobURL from "./JobURL"
import Date from "./Date"
import PointOfContact from "./PointOfContact"
import Cards from "./cards"


export default function CompaniesForm(){
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
        setCompanies(
            {
                companyName: "",
                jobPosition: "",
                jobURL: "",
                date: "",
                pointOfContact: ""
            }
        )
        sharedStates.userProfile.targetCompanies.push(companies)
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <CompanyName companies={companies} setCompanies={setCompanies} />
                <JobPosition companies={companies} setCompanies={setCompanies} />
                <JobURL companies={companies} setCompanies={setCompanies} />
                <Date companies={companies} setCompanies={setCompanies} />
                <PointOfContact companies={companies} setCompanies={setCompanies} />
                <Form.Control type="Submit" value="Submit" />
            </Form>
            <Cards />
        </>
    )
}
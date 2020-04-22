import React, { useState, useContext } from "react"
import { Form } from "react-bootstrap"
import { TrackerContext } from "../../App"
import { updateUserProfile } from '../../services/api-helper-userProfile'
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
        sharedStates.userProfile.targetCompanies.push(companies)
        updateUserProfile(sharedStates.token, sharedStates.userProfile).then(() => {
            console.log("success")
        })
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
        setCompanies({ ...companies })
        updateUserProfile(sharedStates.token, sharedStates.userProfile).then(() => {
            console.log("success")
        })
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
            <Cards handleDelete={handleDelete} />
        </>
    )
}
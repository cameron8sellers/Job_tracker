import React, { useContext } from "react"
import { Card } from "react-bootstrap"
import { TrackerContext } from "../../App"

export default function Cards(){
    const sharedStates = useContext(TrackerContext)
    return (
        <>
            {
                sharedStates.userProfile.targetCompanies ? 
                ( sharedStates.userProfile.targetCompanies.map((company, index) => { 
                    return ( 
                            <Card key={index} style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>{company.companyName}</Card.Title>
                                    <Card.Text>
                                        Job Position: {company.jobPosition}
                                    </Card.Text>
                                    <Card.Text>
                                        Job Link: {company.jobURL}
                                    </Card.Text>
                                    <Card.Text>
                                        Date Submitted: {company.date}
                                    </Card.Text>
                                    <Card.Text>
                                        Contact: {company.pointOfContact}
                                    </Card.Text>
                                    <i className="fas fa-plus"></i>
                                </Card.Body>
                            </Card>
                        )
                    })
                ) : ""
            }
        </>
    )
}
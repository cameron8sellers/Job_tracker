import React, { useContext } from "react"
import { Card } from "react-bootstrap"
import { TrackerContext } from "../../App"
import Moment from "react-moment"

export default function Cards( {handleDelete} ){
    const sharedStates = useContext(TrackerContext)

    return (
        <>
            {
                sharedStates.userProfile.targetCompanies ? 
                ( sharedStates.userProfile.targetCompanies.map((company, index) => { 
                    return ( 
                            <Card className="companies-card" key={index} style={{ width: '21rem', borderColor: '#41b3a3' }}>
                                <Card.Header style={{ textAlign: "center" }}>{company.companyName}</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <span>Job Position:</span> {company.jobPosition}
                                    </Card.Text>
                                    <Card.Text>
                                    <span>Job Link:</span> <a target="_blank" href={company.jobURL}>{company.jobURL}</a>
                                    </Card.Text>
                                    <Card.Text>
                                        <span>Date Submitted:</span> <Moment format="MM/DD/YYYY">{company.date}</Moment>
                                    </Card.Text>
                                    <Card.Text>
                                        <span>Point of Contact:</span> {company.pointOfContact}
                                    </Card.Text>
                                    <i onClick={handleDelete} className="far fa-minus-square"></i>
                                </Card.Body>
                            </Card>
                        )
                    })
                ) : ""
            }
        </>
    )
}
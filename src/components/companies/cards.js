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
                                        Date Submitted: <Moment format="MM/DD/YYYY">{company.date}</Moment>
                                    </Card.Text>
                                    <Card.Text>
                                        Contact: {company.pointOfContact}
                                    </Card.Text>
                                    <i onClick={handleDelete} class="far fa-minus-square"></i>
                                </Card.Body>
                            </Card>
                        )
                    })
                ) : ""
            }
        </>
    )
}
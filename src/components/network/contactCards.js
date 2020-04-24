import React, { useContext } from "react"
import { Card } from "react-bootstrap"
import { TrackerContext } from "../../App"

export default function ContactCard({handleDelete}){
    const sharedStates = useContext(TrackerContext)
    return (
        <> {
            sharedStates.userProfile.networkingContacts ?
                (sharedStates.userProfile.networkingContacts.map((network, i) => {
                    return (
                            <Card className="contact-card" key = {i} style={{ width: '18rem', borderColor: '#41B3A3', border: "2px" }}>
                            <Card.Header className="contact-name">{network.name}</Card.Header>
                            <Card.Body>
                            <Card.Title><span>Company:</span> {network.employer}</Card.Title>
                            <Card.Text>
                            <span>Email:</span> {network.networksEmail}
                            </Card.Text>
                            <Card.Text>
                            <span>Phone:</span> {network.phone}
                            </Card.Text>
                            <Card.Text>
                            <span>Notes:</span>
                            {network.notes}
                            </Card.Text>
                            <i class="far fa-minus-square" onClick={handleDelete} style={{padding: "0 0 0 225px"}} ></i>
                        </Card.Body>
                        </Card>
                   )
                })
            ) : ""
        }
    </>
)
}
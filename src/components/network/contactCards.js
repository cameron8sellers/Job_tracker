import React, { useContext } from "react"
import { Card } from "react-bootstrap"
import { TrackerContext } from "../../App"

export default function contactCard(){
    const sharedStates = useContext(TrackerContext)
    return (
        <> {
        sharedStates.userProfile.networkingContacts ?
            (sharedStates.userProfile.networkingContacts.map((network, i) => {
                return (
                    <Card key = {i} handleDelete={handleDelete} style={{ width: '18rem', borderColor: '#41B3A3' }}>
                        <Card.Header>{network.name}</Card.Header>
                        <Card.Body>
                        <Card.Title>{network.employer}</Card.Title>
                        <Card.Text>
                        {network.networkEmail}
                        </Card.Text>
                        <Card.Text>
                        {network.phone}
                        </Card.Text>
                        <Card.Text>
                        Notes:
                        {network.notes}
                        </Card.Text>
                        <i class="far fa-minus-square"></i>
                    </Card.Body>
                    </Card>
             )
            })
        ) : ""
    }
</>
)
}
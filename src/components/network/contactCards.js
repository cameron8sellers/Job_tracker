import React from "react"
import { Card } from "react-bootstrap"


export default function ContactCard(){
    return (
        <>
            <h1>Network Contacts</h1>
            <div>
            <Card  style={{ width: '18rem', borderColor: '#41B3a3' }}>
            <Card.Header>Name</Card.Header>
            <Card.Body>
            <Card.Title>Company</Card.Title>
             <Card.Text>
             Notes: Some quick example text to build on the card title and make up the bulk
             of the card's content.
            </Card.Text>
          </Card.Body>
         </Card>
            </div>
        </>
    )
}
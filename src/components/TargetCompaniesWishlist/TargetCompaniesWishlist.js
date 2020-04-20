import React from "react"
import { Card } from "react-bootstrap"

export default function TargetCompaniesWishlist(){
    return (
        <>
            <h1>Wishlist</h1>
            <div>
                <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <i className="fas fa-plus"></i>
                </Card.Body>
                </Card>
            </div>
        </>
    )
}
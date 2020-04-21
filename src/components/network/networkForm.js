import React, { useState } from "react"
import { Form, Col, Button, Card } from "react-bootstrap"

export default function NetworkForm(){
    const [contacts, setContacts] = useState([
    ])
    const [value, setValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        addCompany(value)
        setValue("")
    }

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const addCompany = contact => {
        const newContact = [...contact, contact]
        setContacts(newContact)
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Row>
                    <Col>
                        <Form.Control
                            type="text"
                            // value={value}
                            addContact={addContact}
                            onChange={handleChange}
                            placeholder="Name" 
                        />
                    </Col>
                    <Col>
                        <Form.Control
                            type="text"
                            // value={value}
                            addContact={addContact}
                            onChange={handleChange}
                            placeholder="email" 
                        />
                    </Col>
                    <Col>
                        <Form.Control type="Submit" value="Submit" />
                    </Col>
                </Form.Row>
            </Form>
            {contacts.map((contact, index) => {
                return (
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                {contact.contactName}
                            </Card.Text>
                            <Card.Text>
                                {contact.email}
                            </Card.Text>
                            <i className="fas fa-plus"></i>
                        </Card.Body>
                    </Card>
                )
            })}
        </>
    )
}








{/*
  import React, { useState, useContext } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export const NetworkForm = () => {

    return (
        <Form>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input type=" contactName" name="name" id="nameInput" placeholder="Enter first and last name" />
          </FormGroup>
          <FormGroup>
            <Label for="contactEmail">Email</Label>
            <Input type="email" name="email" id="emailInput" placeholder="enter email" />
          </FormGroup>
          <FormGroup>
            <Label for="contactPhone">Phone</Label>
            <Input type="phone" name="phone" id="phoneInput" placeholder="enter phone" />
          </FormGroup>
          <FormGroup>
            <Label for="contactCompany">Company</Label>
            <Input type="company" name="company" id="companyInput" placeholder="enter company" />
          </FormGroup>
          <FormGroup>
            <Label for="notesText">Notes:</Label>
            <Input type="textarea" name="text" id="notesText" />
          </FormGroup>
          <Button style={{ backgroundColor: '#c38d9e' }}>Submit</Button>
        </Form>
      )
    };
  */}
    
    
    
    
      
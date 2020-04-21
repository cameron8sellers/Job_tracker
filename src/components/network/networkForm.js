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
    
    
    
    
    
      
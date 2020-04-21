import React, { useState } from "react"
import { Form, Col, Button, Card } from "react-bootstrap"

export default function NetworkForm(props){
  const [networks, setNetwork] = useState({
    name: "",
    email: "",
    phone: "",
    comapny: "",
    notes: ""
  })

  const handleSubmit = (e) => {
      e.preventDefault()
      addNetwork(value)
      setNetwork({
        name: "",
        email: "",
        phone: "",
        comapny: "",
        notes: ""
      })
      sharedStates.userProfile.targetCompanies.push(companies)
  }


  const addNetwork = network => {
    const newNetwork = [...networks, network]
    setNetwork(newNetwork)
}

  const handleNetwork = (e) => {
    let newNetwork ={...networks}
    newNetwork.name =e.target.value
    setNetwork(newNetwork)
  }

  const handleEmail = (e) => {
    let newEmail ={...emails}
    newEmail.email =e.target.value
    setEmail(newEmail)
  }

  const handlePhone = (e) => {
    let newPhone ={...phones}
    newPhone.phone =e.target.value
    setPhone(newPhone)
  }

  const handleCompany = (e) => {
    let newCompany ={...companies}
    newCompany.company =e.target.value
    setCompany(newCompany)
  }

  const handleNote = (e) => {
    let newNote ={...notes}
    newNote.note =e.target.value
    setNote(newNote)
  }

   {/*{Network.map((network, index) => {
    return (
      <Card  style={{ width: '18rem', borderColor: '#41B3a3' }}>
      <Card.Header>{Network.Name}</Card.Header>
      <Card.Body>
      <Card.Title>{Network.Company}</Card.Title>
      <Card.Text>
       {Network.email}
       {network.phone}
      </Card.Text>
       <Card.Text>
       Notes:
      {Network.Notes}
      </Card.Text>
    </Card.Body>
   </Card>
)} */}

  return (
      <>
          <Form onSubmit={handleSubmit}>
              <Form.Row>
                  <Col>
                      <Form.Control
                          type="text"
                          addNetwork={addNetwork}
                          onChange={handleNetwork}
                          placeholder="Name" 
                      />
                  </Col>
                  </Form.Row>
                  <Form.Row>
                  <Col>
                      <Form.Control
                          type="text"
                          addNetwork={addEmail}
                          onChange={handleEmail}
                          placeholder="Email" 
                      />
                  </Col>
                  <Col>
                      <Form.Control
                          type="text"
                          addNetwork={addPhone}
                          onChange={handlePhone}
                          placeholder="Phone" 
                      />
                  </Col>
                  </Form.Row>
                  <Form.Row>
                  <Col>
                      <Form.Control
                          type="text"
                          addNetwork={addCompany}
                          onChange={handleCompany}
                          placeholder="Company" 
                      />
                  </Col>
                  </Form.Row>
                  <Form.Row>
                  <Col>
                      <Form.Control
                          type="text"
                          addNetwork={addNote}
                          onChange={handleNote}
                          placeholder="Notes" 
                      />
                  </Col>
                  </Form.Row>
                  <Form.Row>
                  <Col>
                      <Form.Control type="Submit" value="Add Contact" style={{ backgroundColor: '#c38d9e', width: "10%"}} />
                  </Col>
              </Form.Row>
          </Form>
          </>
  )   
} 
    
      
 
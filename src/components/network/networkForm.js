import React, { useState } from "react"
import { Form, Col, Button, Card } from "react-bootstrap"

export default function NetworkForm(){
  const [networks, setNetwork] = useState({
    name: ""
  })
  const [emails, setEmail] = useState({
    email: ""
  })
  const [phones, setPhone] = useState({
    phone: ""
  })
  const [companies, setCompany] = useState({
    company: ""
  })
  const [notes, setNote] = useState({
    notes: ""
  })
  const [value, setValue] = useState("")

  const handleSubmit = (e) => {
      e.preventDefault()
      addNetwork(value)
      setValue("")
  }

  const addNetwork = network => {
    const newNetwork = [...networks, network]
    setNetwork(newNetwork)
}

  const handleChange = (e) => {
      setValue(e.target.value)
  }

  const handleNetwork = (e) => {
    let newNetwork ={...networks}
    newNetwork.name =e.target.value
    setNetwork(newNetwork)
    e.target.values = ""
  }

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
                          onChange={handleChange}
                          placeholder="Email" 
                      />
                  </Col>
                  <Col>
                      <Form.Control
                          type="text"
                          addNetwork={addPhone}
                          onChange={handleChange}
                          placeholder="Phone" 
                      />
                  </Col>
                  </Form.Row>
                  <Form.Row>
                  <Col>
                      <Form.Control
                          type="text"
                          addNetwork={addCompany}
                          onChange={handleChange}
                          placeholder="Company" 
                      />
                  </Col>
                  </Form.Row>
                  <Form.Row>
                  <Col>
                      <Form.Control
                          type="text"
                          addNetwork={addNote}
                          onChange={handleChange}
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
    
    
      
  {/*Network.map(network, index) => {
    return (
      <Card  style={{ width: '18rem', borderColor: '#41B3a3' }}>
      <Card.Header>name</Card.Header>
      <Card.Body>
      <Card.Title>company</Card.Title>
      <Card.Text>
       email and phone go here
      </Card.Text>
       <Card.Text>
       Notes:
      
      </Card.Text>
    </Card.Body>
   </Card>
    )
)}
</>
    ) */}
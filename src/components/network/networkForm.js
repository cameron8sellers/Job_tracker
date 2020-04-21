import React, { useState } from "react"
import { Form, Col, Button, Card } from "react-bootstrap"

export default function NetworkForm(){
  const [networks, setNetwork] = useState([])
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


  return (
      <>
          <Form onSubmit={handleSubmit}>
              <Form.Row>
                  <Col>
                      <Form.Control
                          type="text"
                          addNetwork={addNetwork}
                          onChange={handleChange}
                          placeholder="Name" 
                      />
                  </Col>
                  </Form.Row>
                  <Form.Row>
                  <Col>
                      <Form.Control
                          type="text"
                          addNetwork={addNetwork}
                          onChange={handleChange}
                          placeholder="Email" 
                      />
                  </Col>
                  <Col>
                      <Form.Control
                          type="text"
                          addNetwork={addNetwork}
                          onChange={handleChange}
                          placeholder="Phone" 
                      />
                  </Col>
                  </Form.Row>
                  <Form.Row>
                  <Col>
                      <Form.Control
                          type="text"
                          addNetwork={addNetwork}
                          onChange={handleChange}
                          placeholder="Company" 
                      />
                  </Col>
                  </Form.Row>
                  <Form.Row>
                  <Col>
                      <Form.Control
                          type="text"
                          addNetwork={addNetwork}
                          onChange={handleChange}
                          placeholder="Notes" 
                      />
                  </Col>
                  </Form.Row>
                  <Form.Row>
                  <Col>
                      <Form.Control type="Submit" value="Submit" style={{ backgroundColor: '#c38d9e', width: "10%"}} />
                  </Col>
              </Form.Row>
          </Form>
          {networks.map((network, index) => {
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
          })}
      </>
  )
}
    
    
      
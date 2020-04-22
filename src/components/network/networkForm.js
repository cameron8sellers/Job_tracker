import React, { useState, useContext } from "react"
import { Form, Col, Button, Card } from "react-bootstrap"
import { TrackerContext } from "../../App"

export default function NetworkForm(props){
  const sharedStates = useContext(TrackerContext);
  console.log(sharedStates)
  const [networks, setNetwork] = useState([{
    name: "",
    email: "",
    phone: "",
    comapny: "",
    notes: ""
  }])

  const handleSubmit = (e) => {
      e.preventDefault()
      setNetwork({
        name: "",
        email: "",
        phone: "",
        comapny: "",
        notes: ""
      })
      sharedStates.userProfile.networkingContacts.push(networks)
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
    let newEmail ={...networks}
    newEmail.email =e.target.value
    setNetwork(newEmail)
  }

  const handlePhone = (e) => {
    let newPhone ={...networks}
    newPhone.phone =e.target.value
    setNetwork(newPhone)
  }

  const handleCompany = (e) => {
    let newCompany ={...networks}
    newCompany.company =e.target.value
    setNetwork(newCompany)
  }

  const handleNote = (e) => {
    let newNote ={...networks}
    newNote.notes =e.target.value
    setNetwork(newNote)
  }

  return (
      <>
          <Form onSubmit={handleSubmit}>
              <Form.Row>
                  <Col>
                      <Form.Control
                          type="text"
                          value={networks.name}
                          onChange={handleNetwork}
                          placeholder="Name" 
                      />
                  </Col>
                  </Form.Row>
                  <Form.Row>
                  <Col>
                      <Form.Control
                          type="text"
                          value={networks.email}
                          onChange={handleEmail}
                          placeholder="Email" 
                      />
                  </Col>
                  <Col>
                      <Form.Control
                          type="text"
                          value={networks.phone}
                          onChange={handlePhone}
                          placeholder="Phone" 
                      />
                  </Col>
                  </Form.Row>
                  <Form.Row>
                  <Col>
                      <Form.Control
                          type="text"
                          value={networks.company}
                          onChange={handleCompany}
                          placeholder="Company" 
                      />
                  </Col>
                  </Form.Row>
                  <Form.Row>
                  <Col>
                      <Form.Control
                          type="text"
                          value={networks.notes}
                          onChange={handleNote}
                          placeholder="Notes" 
                      />
                  </Col>
                  </Form.Row>
                  <Form.Row>
                  <Col>
                      <Form.Control type="Submit" value="Submit" style={{ backgroundColor: '#c38d9e', width: "20%"}} />
                  </Col>
              </Form.Row>
          </Form>
          {
            sharedStates.userProfile.networkingContacts ?
                (sharedStates.userProfile.networkingContacts.map((network, i) => {
                    return (
                        <Card key = {i} style={{ width: '18rem', borderColor: '#41B3A3' }}>
                            <Card.Header>{network.name}</Card.Header>
                            <Card.Body>
                            <Card.Title>{network.company}</Card.Title>
                            <Card.Text>
                            {network.email}

                            {network.phone}
                            </Card.Text>
                            <Card.Text>
                            Notes:
                            {network.notes}
                            </Card.Text>
                        </Card.Body>
                        </Card>
                        )
                    }) 
                ) : " "
            }
      </>
    )  
    } 
import React, { useState, useContext } from "react"
import { Form, Col, Button, Card } from "react-bootstrap"
import { TrackerContext } from "../../App"
import { updateUserProfile } from "../../services/api-helper-userProfile";


export default function NetworkForm(props){
  const sharedStates = useContext(TrackerContext);
  console.log(sharedStates)
  const [networks, setNetwork] = useState([{
    name: "",
    networkEmail: "",
    phone: "",
    employer: "",
    notes: ""
  }])

  const handleSubmit = (e) => {
      e.preventDefault()
      setNetwork({
        name: "",
        networkEmail: "",
        phone: "",
        employer: "",
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
    newEmail.networkEmail =e.target.value
    setNetwork(newEmail)
  }

  const handlePhone = (e) => {
    let newPhone ={...networks}
    newPhone.phone =e.target.value
    setNetwork(newPhone)
  }

  const handleCompany = (e) => {
    let newCompany ={...networks}
    newCompany.employer =e.target.value
    setNetwork(newCompany)
  }

  const handleNote = (e) => {
    let newNote ={...networks}
    newNote.notes =e.target.value
    setNetwork(newNote)
  }

  const handleDelete = (index) => {
    sharedStates.userProfile.networkingContacts.splice(index, 1)
    setNetwork({...networks})
    updateUserProfile(sharedStates.token, sharedStates.userProfile)
  }

  return (
      <>
          <Form className="contact-form" onSubmit={handleSubmit} style={{width: "50%", display: "block", margin: "1% auto"}}>
              <Form.Row className="form-row">
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
                          value={networks.networkEmail}
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
                          value={networks.employer}
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
                      <Form.Control className= "sub-button" type="Submit" value="Submit"/>
                  </Col>
              </Form.Row>
          </Form>
          {
            sharedStates.userProfile.networkingContacts ?
                (sharedStates.userProfile.networkingContacts.map((network, i) => {
                    return (
                        <Card className="contact-card" key = {i} style={{ width: '18rem', borderColor: '#41B3A3', border: "2px" }}>
                            <Card.Header className="contact-name">{network.name}</Card.Header>
                            <Card.Body>
                            <Card.Title><span>Company:</span> {network.employer}</Card.Title>
                            <Card.Text>
                            <span>Email:</span> {network.networkEmail}
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
                ) : " "
            }
      </>
    )  
    } 
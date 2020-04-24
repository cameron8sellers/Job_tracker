import React, { useState, useContext } from "react"
import { Form, Col, Button, Card, Row, Container } from "react-bootstrap"
import { TrackerContext } from "../../App"
import { updateUserProfile } from "../../services/api-helper-userProfile";
import { useMediaQuery } from "react-responsive";
import ContactCard from "./contactCards"

export default function NetworkForm(props){
  const sharedStates = useContext(TrackerContext);
  const isDesktop = useMediaQuery({query: "(min-width:1020px)"});
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


 {/* const addNetwork = network => {
    const newNetwork = [...networks, network]
    setNetwork(newNetwork)
} */}

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
      { isDesktop ?
      (
        
          <Form className="contact-form" onSubmit={handleSubmit} style={{width: "50%", display: "block", margin: "1% auto", zIndex: 1, position: "relative"}}>
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
      ) : (
        <Form className="contact-form" onSubmit={handleSubmit} style={{width: "100%", display: "block", margin: "1% auto", zIndex: 1, position: "relative"}}>
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
                      <Form.Control className= "sub-button" type="Submit" value="Submit" />
                  </Col>
              </Form.Row>
          </Form> 
      )}
       <Container>
            <Row>
            <ContactCard handleDelete={handleDelete} />
            </Row>
          </Container>
      </>
    )  
    } 
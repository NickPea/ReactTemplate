import React, { useState } from "react";
import { Form, Button, Card, Nav } from "react-bootstrap";

function RSVP() {
  const [isHasDietReq, setisHasDietReq] = useState(false);
  const handleChecked = e => setisHasDietReq(e.target.checked);
  const [activeKey, setactiveKey] = useState("attend");
  const handleSelect = e => setactiveKey(e);
  return (
    <>
      <Card>
        <Card.Header className="d-flex font-italic ">
          <h2>RSVP</h2>
          <Nav
            variant="tabs"
            activeKey={activeKey}
            className="ml-auto align-self-end"
            onSelect={handleSelect}>
            <Nav.Item>
              <Nav.Link eventKey="attend">Attend</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="decline">Decline</Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <Form className="d-flex flex-column">
            <Form.Group>
              <Form.Label>Name(s)</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            {activeKey === "attend" ? (
              <Form.Group>
                <Form.Label>Phone Number(s)</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            ) : null}

            <Form.Group>
              <Form.Label>Leave Us A Message...</Form.Label>
              <Form.Control as="textarea" />
            </Form.Group>

            {/* dietary requirments--> */}
            {activeKey === "attend" ? (
              <Form.Group>
                <Form.Check
                  inline
                  onClick={handleChecked}
                  label="Dietary Requirements"
                />
              </Form.Group>
            ) : null}
            {isHasDietReq ? (
              <Form.Group>
                <Form.Control as="textarea" placeholder="What do you need?" />
              </Form.Group>
            ) : null}
            {/* <--dietary requirments */}

            <Button className="ml-auto" type="submit">
              RSVP!
            </Button>

          </Form>
        </Card.Body>
      </Card>
    </>
  );
}

export default RSVP;

//style the card


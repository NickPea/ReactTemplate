import React, { useState } from "react";
import { Form, Button, Card, Nav } from "react-bootstrap";
import { useSpring, animated, config } from "react-spring";

function RSVP() {
  const [isHasDietReq, setisHasDietReq] = useState(false);
  const handleChecked = e => setisHasDietReq(e.target.checked);
  const [activeKey, setactiveKey] = useState("attend");
  const handleSelect = e => {
    setactiveKey(e);
    setisHasDietReq(false);
  }
  const [isViewing, setIsViewing] = useState(false);
  const handleClickOpen = () => setIsViewing(true);
  const handleClickClose = e => {
    setIsViewing(false);
    setisHasDietReq(false);
    e.stopPropagation();
  };
  const [isValidated, setisValidated] = useState(false);
  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity()===false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setisValidated(true);
  }

  //styles
  const closeButton = {
    position: "absolute",
    right: "5px",
    top: "3px",
    fontSize: "0.8rem",
    cursor: "pointer",
    padding: "1px 7px"
  };

  const spring = useSpring({
    config: config.stiff,
    from: {
      transform: "scale(0) translateY(0px)",
      boxShadow: "0px 0px 10px 5px rgb(0,0,0,0.5)",
      zIndex: "0",
      transition: "transform 600ms ease-out"
    },
    to: {
      transform: "scale(1.1) translateY(-100px)",
      boxShadow: "0px 0px 10px 1000px rgb(0,0,0,0.7)",
      zIndex: "999",
      transition: "transform 600ms ease-out"
    }
  });

  return (
    <>
      <animated.div style={isViewing ? spring : null}>
        <Card
          style={{
            boxShadow: "0px 0px 10px 5px rgb(0,0,0,0.5)"
          }}
          onClick={handleClickOpen}>
          <Card.Header
            className="d-flex font-italic"
            style={{ backgroundColor: "blanchedalmond" }}>
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
            {isViewing ? (
              <Button
                variant="light"
                style={closeButton}
                onClick={handleClickClose}>
                &times;
              </Button>
            ) : null}
          </Card.Header>
          <Card.Body>
            <Form 
            noValidate 
            validated={isValidated} 
            onSubmit={handleSubmit}
            className="d-flex flex-column">
              <Form.Group>
                <Form.Label>Name(s)</Form.Label>
                <Form.Control size="sm" type="text" required/>
                <Form.Control.Feedback type='invalid'>
                  Who's this?
                </Form.Control.Feedback>
              </Form.Group>

              {activeKey === "attend" ? (
                <Form.Group>
                  <Form.Label>Phone Number(s)</Form.Label>
                  <Form.Control size="sm" type="text" />
                </Form.Group>
              ) : null}

              <Form.Group>
                <Form.Label>Leave Us A Message...</Form.Label>
                <Form.Control as="textarea" rows="1" />
              </Form.Group>

              {/* special dietary requirments--> */}
              {activeKey === "attend" ? (
                <Form.Group>
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="I have special dietary requirments"
                    onClick={handleChecked}
                  />
                </Form.Group>
              ) : null}
              {activeKey==='attend'&& isHasDietReq ? (
                <Form.Group>
                  <Form.Control
                    as="textarea"
                    rows="2"
                    placeholder="How can we cater to your needs?"
                  />
                </Form.Group>
              ) : null}
              {/* <--special dietary requirments */}

              <Button className="ml-auto" type="submit">
                RSVP!
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </animated.div>
    </>
  );
}

export default RSVP;

//find out how to pick up data from the onSubmit event
//create a toast on submit and possible redirect (welcom tab with the rvsp'd list)
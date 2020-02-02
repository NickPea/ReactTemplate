import React, { useState, useContext } from "react";

import { Form, Button, Card, Nav } from "react-bootstrap";
import { useSpring, animated, config } from "react-spring";

import { OurWeddingContext } from "../context/ourweddingservice";

function RSVP() {
  //toggles diet requirements input on check
  const [isHasDietReq, setisHasDietReq] = useState(false);
  const handleChecked = e => setisHasDietReq(e.target.checked);
  const [activeKey, setactiveKey] = useState("attend");
  const handleSelect = e => {
    setactiveKey(e);
    setisHasDietReq(false);
  };

  //activated a focusing effect when the form card
  //is clicked. Also closebutton is hidden unless
  //this effect is activated
  const [isViewing, setIsViewing] = useState(false);
  const handleClickOpen = () => setIsViewing(true);
  const handleClickClose = e => {
    setIsViewing(false);
    setisHasDietReq(false);
    e.stopPropagation();
  };

  //close button ('x') styles
  const closeButton = {
    position: "absolute",
    right: "5px",
    top: "3px",
    fontSize: "0.8rem",
    cursor: "pointer",
    padding: "1px 7px"
  };

  //on form card click react-spring animation
  const spring = useSpring({
    config: config.stiff,
    from: {
      transform: "scale(0)",
      boxShadow: "0px 0px 10px 5px rgb(0,0,0,0.5)",
      zIndex: "0",
      transition: "transform 600ms ease-out"
    },
    to: {
      transform: "scale(1.1)",
      boxShadow: "0px 0px 10px 1000px rgb(0,0,0,0.7)",
      zIndex: "999",
      transition: "transform 600ms ease-out"
    }
  });

  //page context
  const weddingContext = useContext(OurWeddingContext);

  //handles form submission and activates react-bootstrap
  //validation messages if needed
  const [isValidated, setisValidated] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      setisValidated(true);
    } else {
      console.log(`
        name: ${formData.name}
        phone: ${formData.phone}
        message ${formData.message}
        diet: ${formData.diet}
      `);
      weddingContext.addRsvpd(formData);
      //wipe input data
      setFormData({
        name: "",
        phone: "",
        message: "",
        diet: ""
      });
      weddingContext.changeActiveTab("welcome");
      weddingContext.changeShowToast(true);
      //clear all form state
      //redirect to first tab
    }
  };

  //controlled form elements compoents state
  //and handle function
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
    diet: ""
  }); //end useState

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }; //end  handleChange

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
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Who's this?
                </Form.Control.Feedback>
              </Form.Group>

              {activeKey === "attend" ? (
                <Form.Group>
                  <Form.Label>Phone Number(s)</Form.Label>
                  <Form.Control
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </Form.Group>
              ) : null}

              <Form.Group>
                <Form.Label>Leave Us A Message...</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="1"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
                <Form.Text>
                  Note: This message will be displayed on the welcome page if
                  you are attending.
                </Form.Text>
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
              {activeKey === "attend" && isHasDietReq ? (
                <Form.Group>
                  <Form.Control
                    as="textarea"
                    rows="2"
                    placeholder="How can we cater to your needs?"
                    name="diet"
                    value={formData.diet}
                    onChange={handleChange}
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

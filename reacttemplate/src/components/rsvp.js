import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function RSVP() {
  const [isHasDietReq, setisHasDietReq] = useState(false);

  const handleChecked = e => setisHasDietReq(e.target.checked);

  return (
    <>
      <Form className='d-flex flex-column'>
        <Form.Group>
          <Form.Label>Name(s)</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Phone Number(s)</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Leave Us A Message...</Form.Label>
          <Form.Control as="textarea" />
        </Form.Group>

        {/* dietary requirments */}
        <Form.Group>
          <Form.Check
            inline
            onClick={handleChecked}
            label="Dietary Requirements"
          />
        </Form.Group>
        {isHasDietReq ? (
          <Form.Group>
            <Form.Control as="textarea" placeholder="What do you need?" />
          </Form.Group>
        ) : null}

        <Button className='ml-auto' type="submit">RSVP!</Button>
      </Form>
    </>
  );
}

export default RSVP;

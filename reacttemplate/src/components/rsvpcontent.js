import React from "react";
import { Row, Col } from "react-bootstrap";
import RSVP from "../components/rsvp";

export default function RsvpContent() {
  return (
    <div>
      <h3>Please fill out the form below</h3>
      <p>let us know by June so we can confirm arrangements </p>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <RSVP />
        </Col>
      </Row>
    </div>
  );
}

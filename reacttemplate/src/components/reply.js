import React from "react";
import { Card } from "react-bootstrap";

export default function Reply({ name, phone, message, diet }) {
  return (
    <div>
      <Card>
        <Card.Header style={{ backgroundColor: "blanchedalmond" }}>
          <h5>
            <i>{name}</i>
          </h5>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            {phone ? <p>Phone: {phone}</p> : null}
            {message ? <p>Message: {message}</p> : null}
            {diet ? <p>Diet: {diet}</p> : null}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

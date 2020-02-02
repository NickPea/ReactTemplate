import React from "react";
import { Card } from "react-bootstrap";

export default function Reply({ name, phone, message, diet }) {
  return (
    <div>
      <Card>
        <Card.Header style={{ backgroundColor: "blanchedalmond" }}>
          <h4>
            <u>
              <i>{name}</i>
            </u>
          </h4>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            {message ? (
              <h5 style={{ textAlign: "center" }}>
                <i>"{message}"</i>
              </h5>
            ) : null}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

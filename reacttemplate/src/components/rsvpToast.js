import React from "react";
import { Toast } from "react-bootstrap";

export default function RsvpToast({ name, show, onClose }) {
  return (
    <>
      <Toast
        show={show}
        onClose={onClose}
        style={{
          position: "fixed",
          top: "30px",
          right: "20px",
          zIndex: "99999"
        }}>
        <Toast.Header className="justify-content-end">
          <strong className="mr-auto"> Thanks {name}</strong>
        </Toast.Header>
        <Toast.Body>
          <small>
            We've added you to the list below. Cya on the 19th Sept @ Howard
            Smith Wharves!
            <quote>'Tomo&Nick'</quote>
          </small>
        </Toast.Body>
      </Toast>
    </>
  );
}

import React from "react";
import { Image } from "react-bootstrap";
import WedLocation from "../assets/hsw1.png";

export default function EventDetailsContent() {
  return (
    <div>
      <h3>Howard Smith Wharves</h3>
      <p>Facility: the Greenhouse</p>
      <p>When: 21st September, 2020 @ 3pm</p>
      <p>Where: 5 Boundary St, Brisbane City QLD 4000</p>
      <p>Contacts: Nick (0467 235 640) & Tomo (0412 940 569)</p>

      <Image src={WedLocation} alt="Howard Smith Wharves" thumbnail />
      <p>
        Further Info:{" "}
        <a href="https://howardsmithwharves.com/">howardsmithsharves.com</a>
      </p>
    </div>
  );
}

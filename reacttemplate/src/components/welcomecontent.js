import React, { useContext } from "react";
import { CardColumns } from "react-bootstrap";
import Reply from "../components/reply";
import { OurWeddingContext } from "../context/ourweddingservice";

export default function WelcomeContent() {
  const weddingContext = useContext(OurWeddingContext);

  return (
    <>
      <div>
        <h3>
          This is your <u>official invitation</u> to our 2020 wedding.
        </h3>
        <p>
          Please have a read through, and then let us know if you are attending
          by RSVP-ing.
        </p>
      </div>
      <div>
        <CardColumns>
          {weddingContext.rsvpd.map((value, index) => (
            <Reply
              key={index}
              name={value.name}
              phone={value.phone}
              message={value.message}
              diet={value.diet}
            />
          ))}
        </CardColumns>
      </div>
    </>
  );
}

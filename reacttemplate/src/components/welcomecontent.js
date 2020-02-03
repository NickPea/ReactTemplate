import React, { useContext } from "react";
import { CardColumns, Row, Col } from "react-bootstrap";
import style from "./welcomecontent.module.css";
import Reply from "../components/reply";
import { OurWeddingContext } from "../context/ourweddingservice";

export default function WelcomeContent() {
  const weddingContext = useContext(OurWeddingContext);

  return (
    <>
      <div>
        <h4>And you're officially invited.</h4>
        <p>Please have a read through, add yourself to the wall by RSVPing</p>
      </div>

      <div className={style.rsvpdWall}>
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

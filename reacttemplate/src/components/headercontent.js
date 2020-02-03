import React from "react";
import style from "./headercontent.module.css";
import WedPhoto from "../assets/wed3.jpg";

export default function HeaderContent() {
  return (
    <div>
      <br />
      <div className={style.wedTitle}>
        <h1>
          Nick<span className={style.letterAccent}>&</span>Tomo
        </h1>
        <h5>Wedding Invite</h5>
      </div>
      <img className={style.jumboImage} src={WedPhoto} alt="Us" />
    </div>
  );
}

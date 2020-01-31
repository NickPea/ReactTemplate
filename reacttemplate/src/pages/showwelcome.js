import React from "react";
import style from "./showwelcome.module.css";
import Greeter from "../components/greeter";

function ShowWelcome() {
  return (
    <div className={style.pageWrapper}>
      <Greeter />
    </div>
  );
}

export default ShowWelcome;


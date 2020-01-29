import React from "react";
import Styles from "./backpack.module.css";
import Sidenav from "./bp-sidenav";
import Display from "./bp-display";

//components
import ShowBootstrap from "./showbootstrap";

export default function BackPack() {

  const backPack = [
    { relativePath: "showbootstrap", label: "Strap-O-Rama!", component: ShowBootstrap },
    { relativePath: "showdryland", label: "Dry Land", component: ()=><>Im working!</> },
    { relativePath: "showdepositive", label: "De-Positive", component: ()=><>Im working!</> },
    { relativePath: "showvetcrowd", label: "Vet Crowd", component: ()=><>Im working!</> },
    { relativePath: "showaccountmanager", label: "Component Playground", component: ()=><>Im working!</> }
  ];

  return (
    <>
      <h3>BackPack</h3>
      <div>
        <Sidenav routeList={backPack} />
        <Display routeList={backPack} />
      </div>
    </>
  );
}

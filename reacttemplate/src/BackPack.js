import React from "react";
import Styles from "./backpack.module.css";
import Sidenav from "./sidenav";
import RouteDisplay from "./routedisplay";

//components
import ShowBootstrap from "./showbootstrap";
import Welcome from './showwelcome'

export default function BackPack() {
  const backPack = [
    {
      relativePath: "showwelcome",
      label: "Index",
      component: Welcome
    },
    {
      relativePath: "showbootstrap",
      label: "Strap-O-Rama!",
      component: ShowBootstrap
    },
    {
      relativePath: "showdryland",
      label: "Dry Land",
      component: () => <>Im working!</>
    },
    {
      relativePath: "showdepositive",
      label: "De-Positive",
      component: () => <>Im working!</>
    },
    {
      relativePath: "showvetcrowd",
      label: "Vet Crowd",
      component: () => <>Im working!</>
    },
    {
      relativePath: "showaccountmanager",
      label: "Component Playground & Ant T. WigglesWorth",
      component: () => <>Im working!</>
    },
    {
      relativePath: "showsvgjungle",
      label: "SVG Jungle",
      component: () => <>Im working!</>
    },
  ];

  return (
    <>
      <h3>BackPack</h3>

      <div className={Styles.pageWrapper}>
        <Sidenav className={Styles.pageNav} routeList={backPack} />
        <RouteDisplay routeList={backPack}/>
      </div>
    </>
  );
}

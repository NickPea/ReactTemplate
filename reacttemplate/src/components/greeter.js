import React from "react";
import style from "./greeter.module.css";
import { useSpring, animated, config } from "react-spring";

function Greeter() {

    const spring = useSpring({
        config: config.wobbly,
        from: { opacity: '0', transform: 'perspective(1000px) scale(0.9) translateY(30px)' },
        to: {opacity: '1',    transform: 'perspective(1000px) scale(1.0) translateY(0px)' },      
        delay: 200,
    });

  return (
    <animated.div style={spring}>
      <div className={style.greeterWrapper}>
        <h1>Welcome</h1>
        <h3>Take a look as some of the stuff I can do.</h3>
      </div>
    </animated.div>
  );
}

export default Greeter;

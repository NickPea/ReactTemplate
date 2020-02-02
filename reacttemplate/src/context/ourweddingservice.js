import React, { useState } from "react";

export const OurWeddingContext = React.createContext({
  //default values
  rsvpd: [],
  addRsvpd: () => {}
});

export function OurWeddingService(props) {
  const [rsvpd, setRsvpd] = useState([
    {
      name: "larry",
      phone: "20943",
      message: "with bells on",
      diet: "all good"
    },
    {
      name: "sally",
      phone: "41432",
      message: "yo yo yo",
      diet: "vegan4life"
    }
  ]);

  const addRsvpd = newRsvp => {
    setRsvpd([...rsvpd, newRsvp]);
  };

  const [activeTab, setactiveTab] = useState("welcome");
  const changeActiveTab = tabEventKey => {
    setactiveTab(tabEventKey);
  };

  const [isShowToast, setisShowToast] = useState(false);
  const changeShowToast = change => {
    setisShowToast(change);
  };

  return (
    <>
      <OurWeddingContext.Provider
        value={{
          rsvpd,
          addRsvpd,
          activeTab,
          changeActiveTab,
          isShowToast,
          changeShowToast
        }}>
        {props.children}
      </OurWeddingContext.Provider>
    </>
  );
}

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

  //toast state triggered when RVSP component form is submited
  //and closed with 'x' close button clicked on toast
  const [isShowToast, setisShowToast] = useState(false);
  const changeShowToast = change => {
    setisShowToast(change);
  };

  //toggles diet requirements input on check in RVSP component
  const [isHasDietReq, setisHasDietReq] = useState(false);
  const handleChecked = e => setisHasDietReq(e.target.checked);
  //switches attned and decline tab in RSVP component
  const [activeKey, setactiveKey] = useState("attend");
  const handleSelect = e => {
    setactiveKey(e);
    setisHasDietReq(false);
  };
  //activates a react-spring effect on RSVP component
  //when the component is clicked, and provides a
  //handler for a 'x' close button to remove the effect
  const [isViewing, setIsViewing] = useState(false);
  const handleClickOpen = () => setIsViewing(true);
  const handleClickClose = e => {
    setIsViewing(false);
    setisHasDietReq(false);
    e.stopPropagation();
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
          changeShowToast,
          isViewing,
          handleClickOpen,
          handleClickClose,
          isHasDietReq,
          handleChecked,
          activeKey,
          handleSelect
        }}>
        {props.children}
      </OurWeddingContext.Provider>
    </>
  );
}

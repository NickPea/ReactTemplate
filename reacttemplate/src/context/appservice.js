import React, { createContext } from "react";

export const AppContext = createContext({
    //default values - use for intellisense
    someData: "whoopdee doowhap"
});

function AppService (props) {
  return (
    <AppContext.Provider
      value={{
          //actual values
        someData: "Allo Rodger!"
      }}>
      <div>{props.children}</div>
    </AppContext.Provider>
  );
}

export default AppService;

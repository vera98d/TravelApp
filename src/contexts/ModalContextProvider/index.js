import React, { useState } from "react";

export const ModalContext = React.createContext();

export function ModalContextProvider({ children }) {
  const [displayedComponent, setDisplayedComponent] = useState(null);

  return (
    <ModalContext.Provider
      value={{
        displayedComponent,
        setDisplayedComponent,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

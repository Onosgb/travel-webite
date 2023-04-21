import { createContext, useState } from "react";

const ModalContext = createContext({});

export const ModalState = (children) => {
  const [state, dispatch] = useState({ modalStatus: false });

  return (
    <ModalContext.Provider value={{ state, dispatch }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContext;

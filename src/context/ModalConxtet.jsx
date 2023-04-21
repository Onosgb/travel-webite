import { createContext, useState } from "react";

const ModalContext = createContext({});

export const ModalProvider = ({ children }) => {
  const [state, dispatch] = useState({ modalStatus: false });
  const openModal = () => dispatch({ modalStatus: !state.modalStatus });
  return (
    <ModalContext.Provider value={{ state, dispatch, openModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContext;

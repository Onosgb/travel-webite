import { createContext, useState, useReducer } from "react";

const ModalContext = createContext({});

export const ModalProvider = ({ children }) => {
  const [state, dispatch] = useState({ modalStatus: false });
  const openModal = () => dispatch({ modalStatus: !state.modalStatus });
  useReducer((state) => {}, {
    dispatch,
  });
  return (
    <ModalContext.Provider value={{ state, dispatch, openModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContext;

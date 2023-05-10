import { createContext, useReducer } from "react";

const NavContext = createContext({});

export const NavProvider = ({ children }) => {
  const [state, dispatch] = useReducer(children, false);

  return (
    <NavContext.Provider value={{ state, dispatch }}>
      {children}
    </NavContext.Provider>
  );
};

export default NavContext;

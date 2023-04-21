import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

import ModalContext from "./context/ModalConxtet";

function App() {
  const [state, dispatch] = useState({ modalStatus: false });
  const openModal = () => dispatch({ modalStatus: !state.modalStatus });

  return (
    <>
      <ModalContext.Provider value={{ state, dispatch, openModal }}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </ModalContext.Provider>
    </>
  );
}

export default App;

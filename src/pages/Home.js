import { useState, useContext } from "react";
import Header from "../components/Header";
import Modal from "../components/Modal";
import ModalContext from "../context/ModalConxtet";

const Home = () => {
  const { openModal } = useContext(ModalContext);

  const [data] = useState({
    heading: "We are travel friends",
    paragraph:
      "Come and join us we trave the most famous and beautiful places in the world",
  });
  return (
    <>
      <Header heading={data.heading} paragraph={data.paragraph}>
        <button className="btn-default" onClick={openModal}>
          Get Started
        </button>
      </Header>
      <Modal />
    </>
  );
};

export default Home;

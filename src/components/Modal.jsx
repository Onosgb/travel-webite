import { useContext } from "react";
import ModalContext from "../context/ModalConxtet";

const Modal = () => {
  const { state, openModal } = useContext(ModalContext);

  return state.modalStatus ? (
    <div className="modal" onClick={openModal}>
      <div className="modal__body" onClick={(e) => e.stopPropagation()}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet aut nobis
        voluptates esse accusantium similique quae accusamus officia laborum
        omnis, temporibus sunt architecto commodi incidunt cum hic eveniet
        adipisci velit.
      </div>
    </div>
  ) : (
    ""
  );
};

export default Modal;

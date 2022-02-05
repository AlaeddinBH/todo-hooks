import React, { useState } from "react";
import { TiEdit } from "react-icons/ti";
import Modal from "react-modal";
const EditTask = ({ task, edited }) => {
  const [text, setText] = useState(task.name);
  console.log(task)
  const handelSubmit = (e) => {
    e.preventDefault();
    const editedOne = {
      id: 1,
      name: text,
      isDone: task.true,
    };
    edited(editedOne);
    closeModal();
  };
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  Modal.setAppElement("#root");
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <TiEdit onClick={openModal} className="edit-icon" />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={handelSubmit}>Confirme</button>
        </form>
      </Modal>
    </div>
  );
};

export default EditTask;

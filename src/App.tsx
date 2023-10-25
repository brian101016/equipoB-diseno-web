import TodoList from "@components/TodoList";
import LoginScreen from "@screens/LoginScreen";
import ModalComments from "@components/ModalComments";
import React, { useState } from "react";
import "./theme/ModalComments.scss";



function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <button onClick={openModal}>Comentario</button>
      <ModalComments isOpen={isModalOpen} onClose={closeModal}/>

    </div>
  );
}

export default App;

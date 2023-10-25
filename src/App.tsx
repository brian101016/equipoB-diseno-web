import TodoList from "@components/TodoList";
import LoginScreen from "@screens/LoginScreen";
import ModalComments from "@components/ModalComments";
import ModalCalificar from "@components/ModalCalificar";
import React, { useState } from "react";
import "./theme/ModalCalificar.scss";




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
      <button onClick={openModal}>Calificar</button>
      <ModalCalificar isOpen={isModalOpen} onClose={closeModal}/>

    </div>
  );
}

export default App;

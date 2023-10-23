import TodoList from "@components/TodoList";
import LoginScreen from "@screens/LoginScreen";
//BORRAR IMPORTS DE PRUEBA
import { useState } from "react";
import "./theme/Modal.scss";
import Modal from "@components/Modal";

function App() {
  //INSTRUCCIONES:
  /**
   * useState para tener un estado el cual por defecto esta en false
   * nos permitira tener desactivado el modal y la funcion setIsModalOpen
   * nos permite cambiar el estado a true para activar el modal mediante un boton.
   */
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="App">
      {/* <TodoList title="asasd" number={12313} color={"green"} /> */}

      {/* BOTON DE PRUEBA PARA MODAL*/}
      <button className="botonPrueba" onClick={() => setIsModalOpen(true)}>
        PROBAR MODAL
      </button>
      <Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />

      <LoginScreen />
    </div>
  );
}

export default App;

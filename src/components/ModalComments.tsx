import { useState } from "react";
import ImageProvider from "@utils/ImageProvider";

import {
  ButtonBlue,
  BackgroundModal,
  Modal2,
  CloseButton,
} from "./StyledComponents";


export default function ModalComments({ users }) {
  const [comment, setComment] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const saveComment = () => {
    setIsOpen(false);
  };

  const deleteComment = () => {
    setIsOpen(false);
  };

  const isProfessor = users && users.rol === "professor";

  return (
    <>
      <button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Mostrar Modal
      </button>

      {isOpen && (
        <BackgroundModal>
          <Modal2>
            <CloseButton onClick={() => setIsOpen(false)}>x</CloseButton>
            <div className="modalEstilo">
              <div className="userStyle">
                <h2>Comentario</h2>
                <img src={ImageProvider.icon.user_blue} />
                <h4>Emmanuel De</h4>
                <h5>06/11/2023 11:38am</h5>
              </div>
              <textarea
                className="textComment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Escribe tu comentario..."
              ></textarea>
              <div className="modal_buttons">
                {isProfessor && (<>
                  <button className="btnColorBlue" onClick={saveComment}>
                    Modificar
                  </button>
                  <button className="btnColorOrange" onClick={deleteComment}>
                    Eliminar
                  </button>
                </>)}
              </div>
            </div>
          </Modal2>
        </BackgroundModal>
      )}
    </>
  );
}

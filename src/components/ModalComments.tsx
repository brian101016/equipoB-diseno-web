import { useState } from "react";

export default function ModalComments() {
  const [comment, setComment] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const saveComment = () => {
    setIsOpen(false);
  };

  const deleteComment = () => {
    setIsOpen(false);
  };

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
        <div className="background_modal">
          <div className="modal">
            <div className="modal_content">
              <button className="close" onClick={() => setIsOpen(false)}>
                x
              </button>
            </div>
            <div className="modalEstilo">
              <h2>Comentario</h2>
              <div className="inputComentario">
                <h3>Comentario de:</h3>
                <input type="text" />
              </div>
              <textarea
                className="textComment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Escribe tu comentario..."
              ></textarea>
              <div className="modal_buttons">
                <button className="btnColorBlue" onClick={saveComment}>
                  Modificar
                </button>
                <button className="btnColorOrange" onClick={deleteComment}>
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

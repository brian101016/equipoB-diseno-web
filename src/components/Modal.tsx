interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="background"></div>
      <div className="modal">
        <button className="btnCerrar" onClick={closeModal}>
          X
        </button>
        <h1>Modal</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          dignissimos doloremque, velit officiis dolores ratione aperiam?
          Accusamus quidem obcaecati molestias laudantium, ratione molestiae
          recusandae autem a repellendus, porro fugiat dolor!
        </p>
      </div>
    </>
  );
};

export default Modal;

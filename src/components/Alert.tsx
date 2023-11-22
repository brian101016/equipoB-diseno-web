import { useState } from "react";
import ImageProvider from "@utils/ImageProvider";
import styled from "styled-components";


type _Base = import("utils/classes").Base;
// Alert => Rename all instances to use
type AlertProps = {
   Msg?: String;
   type?: number;
} & _Base;

export default function Alert(props: AlertProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [Color, setColor] = useState(0);

    if(props.type==0){
      setColor(0);
    }else if(props.type==1){
      setColor(1);
    }else if(props.type==2){
      setColor(2);
    }

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
          <BackgroundAlert>
            <ModalAlert>
              <ButtonAlert onClick={() => setIsOpen(false)}>X</ButtonAlert>
              <img src={ImageProvider.alert.espera} alt="icono" />
              <h2>{props.Msg}</h2>
            </ModalAlert>
          </BackgroundAlert>
        )}
      </>
    );
  }

  const BackgroundAlert = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9;
  overflow: auto;
`;

const ModalAlert = styled.div<AlertProps>`
  position: absolute;
  background-color: ${(props) => (props.type === 1 ? "#F0BB2B" : "#3c7f8b")};
  background-color: white;
  border-radius: 0.5em;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  left: 50%;
  width: 40%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-height: 80vh;
  padding: 2%;
  overflow: auto;
  z-index: 10;
  display: flex;
  justify-content: space-around;
  align-items: center;
  img{
    width: 70px;
  }

  @media screen and (max-width: 425px) {
    width: 70%;
  }
`;


const ButtonAlert = styled.button`
  position: absolute;
  top: 2%;
  right: 1%;
  cursor: pointer;
  z-index: 11;
  background-color: transparent;
  color: #FF0000;
  font-family: 'Poppins', sans-serif;
  width: 25px;
  border: none;
`;
  
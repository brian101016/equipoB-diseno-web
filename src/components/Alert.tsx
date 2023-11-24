import { useState } from "react";
import ImageProvider from "@utils/ImageProvider";
import styled from "styled-components";
import { type } from "os";
import { DB } from "App";

type _Base = import("utils/classes").Base;
// Alert => Rename all instances to use
type AlertProps = {
  Msg?: String;
} & _Base;


function _Alert(props: AlertProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [Type, setType] = useState(0);

  function NewAlert(NewType){
    setType(NewType);
  }

  DB.showAlerts=NewAlert;

  let Color;

  if (Type === 0) {
    Color = "success";
  } else if (Type === 1) {
    Color = "warning";
  } else {
    Color = "error";
  }

  return (
    <div className={props.className}>
      <button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Mostrar Modal
      </button>

      <button
        onClick={() => {
          setType(0);
        }}
      >
        Verde
      </button>

      <button
        onClick={() => {
          setType(1);
        }}
      >
        Amarillo
      </button>

      <button
        onClick={() => {
          setType(2);
        }}
      >
        Rojo
      </button>

      {isOpen && (
        <div className="BackgroundAlert">
          <div className={"ModalAlert " + Color}>
            <button className="button-alert" onClick={() => setIsOpen(false)}>
              X
            </button>
            <img className="icono-correcto" src={ImageProvider.alert.correcto} alt="icono-correcto" />
            <img className="icono-warning" src={ImageProvider.alert.espera} alt="icono-warning" />
            <img className="icono-error" src={ImageProvider.alert.error} alt="icono-error" />
            <h2>{props.Msg}</h2>
          </div>
        </div>
      )}
    </div>
  );
}

const Alert = styled(_Alert)<AlertProps>`
  .BackgroundAlert {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9;
    overflow: auto;
  }

  .ModalAlert {
    position: absolute;
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
    img {
      width: 70px;
    }

    &.warning {
      background-color: #f0bb2b;
      .icono-correcto{
        display: none;
      }
      .icono-warning{
        display: block;
      }
      .icono-error{
        display: none;
      }
    }

    &.success {
      background-color: #2bf04f;
      .icono-correcto{
        display: block;
      }
      .icono-warning{
        display: none;
      }
      .icono-error{
        display: none;
      }
    }

    &.error {
      background-color: #b83a3a;
      .icono-correcto{
        display: none;
      }
      .icono-warning{
        display: none;
      }
      .icono-error{
        display: block;
      }
    }

    @media screen and (max-width: 425px) {
      width: 70%;
    }
  }

  .button-alert {
    position: absolute;
    top: 2%;
    right: 1%;
    cursor: pointer;
    z-index: 11;
    background-color: transparent;
    color: black;
    font-family: "Poppins", sans-serif;
    width: 25px;
    font-size: 20px;
    border: none;
  }
`;

export default Alert;

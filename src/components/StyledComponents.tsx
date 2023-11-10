import styled, { css } from "styled-components";
import ImageProvider from "@utils/ImageProvider";

//==========================================================Button==========================================================
export const ButtonBlue = styled.button`
  border-radius: 15px;
  border: none;
  background-color: #127ec2;
  color: white;
  width: auto;
  height: 50px;
  font-size: 20px;
  font-family: "Poppins-Regular", Helvetica;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;

  &:hover {
    background-color: #0e5d9e;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.3);
  }

  &:active {
    background-color: #0a487c;
    transform: translateY(2px);
  }

  p {
    color: white;
    margin-left: 30px;
    margin-right: 30px;
  }
`;

export const Button_Editar = styled.button`
  border-radius: 12px;
  border: none;
  background-color: #ff9900;
  color: white;
  width: 130px;
  height: 50px;
  font-size: 20px;
  font-family: "Poppins-Regular", Helvetica;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;

  &:hover {
    background-color: #b17214;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.3);
  }

  &:active {
    background-color: #7a5216;
    transform: translateY(2px);
  }

  p {
    color: white;
    margin-left: 30px;
    margin-right: 30px;
  }
`;

//====================================================Botones Flotantes====================================================
const flotante_gen = css`
  width: 65px;
  height: 65px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 100%;
  background-color: #11669b;
  background-image: url(${ImageProvider.floating.Inicio});
  background-size: cover;
  background-position: center;
  &:hover {
    background-color: #499bcf;
  }

  &:active {
    background-color: #99d5fc;
  }
`;
export const Button_Iniciof = styled.button`
  ${flotante_gen}
`;

export const Button_Eliminarf = styled.button`
  ${flotante_gen}
  background-image: url(${ImageProvider.floating.Eliminar});
`;
export const Button_Menosf = styled.button`
  ${flotante_gen}
  background-image: url(${ImageProvider.floating.Menos});
`;
export const Button_Editarf = styled.button`
  ${flotante_gen}
  background-image: url(${ImageProvider.floating.Editar});
`;
export const Button_Enviarf = styled.button`
  ${flotante_gen}
  background-image: url(${ImageProvider.floating.Enviar});
`;
export const Button_Alumnosf = styled.button`
  ${flotante_gen}
`;
export const Button_Buscarf = styled.button`
  ${flotante_gen}
  background-image: url(${ImageProvider.floating.Buscar});
`;
export const Button_Guardarf = styled.button`
  ${flotante_gen}
  background-image: url(${ImageProvider.floating.Guardar});
`;
export const Button_Comentariof = styled.button`
  ${flotante_gen}
  background-image: url(${ImageProvider.floating.Comentar});
`;
export const Button_Agregarf = styled.button`
  ${flotante_gen}
  background-image: url(${ImageProvider.floating.Nuevo});
`;
export const Button_Masf = styled.button`
  ${flotante_gen}
  background-image: url(${ImageProvider.floating.Mas});
`;
export const Button_Calificarf = styled.button`
  ${flotante_gen}
  background-image: url(${ImageProvider.floating.Calificar});
`;

//==========================================================Modal==========================================================

export const BackgroundModal = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9;
  overflow: auto;
`;

export const Modal = styled.div`
  background-color: white;
  border-radius: 0.5em;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  left: 50%;
  width: auto;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  max-height: 90vh;
  padding: 2%;
  overflow: auto;
  z-index: 10;

  @media screen and (max-width: 1089px) {
    width: 90%;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 2%;
  right: 1%;
  cursor: pointer;
  z-index: 11;
  background-color: white;
  color: #ff0000;
  font-family: "Poppins", sans-serif;
  border-radius: 50px;
  width: 25px;
  border: none;
`;

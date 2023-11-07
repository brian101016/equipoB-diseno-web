import styled, { css } from 'styled-components';
import Inicio from "@theme/images/btn-flota/Inicio.png";
import Buscar from "@theme/images/btn-flota/Buscar.png";
import Calificar from "@theme/images/btn-flota/Calificar.png";
import Comentar from "@theme/images/btn-flota/Comentar.png";
import Mas from "@theme/images/btn-flota/Mas.png";
import Menos from "@theme/images/btn-flota/Menos.png";
import Editar from "@theme/images/btn-flota/Editar.png";
import Eliminar from "@theme/images/btn-flota/Eliminar.png";
import Enviar from "@theme/images/btn-flota/Enviar.png";
import Guardar from "@theme/images/btn-flota/Guardar.png";
import Mensaje from "@theme/images/btn-flota/Mensaje.jpg";
import Notificacion from "@theme/images/btn-flota/Notificacion.png";
import Nuevo from "@theme/images/btn-flota/Nuevo.png";

//==========================================================Button==========================================================
export const Button_Blue = styled.button`
    border-radius: 15px;    
    border: none;
    background-color: #127EC2;
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
        background-color: #0E5D9E;
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.3);
    }

    &:active {
        background-color: #0A487C;
        transform: translateY(2px);
    }

    p{
        color: white;
        margin-left: 30px;
        margin-right: 30px;
    }
`;

export const Button_Editar = styled.button`
    border-radius: 12px;    
    border: none;
    background-color: #FF9900;
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

    p{
        color: white;
        margin-left: 30px;
        margin-right: 30px;
    }
`;

//====================================================Botones Flotantes====================================================
const flotante_gen = css`
import inicio from "@theme/images/btn-flota/Inicio.png";
width: 65px;
height: 65px;
justify-content: center;
align-items: center;
border:none;
border-radius:100%;
background-color: #11669B;
background-image: url(${Inicio});
background-size: cover; 
background-position: center; 
&:hover {
    background-color: #499BCF;
}

&:active {
    background-color: #99D5FC;
}
`;
export const Button_Iniciof = styled.button`
  ${flotante_gen}
`;

export const Button_Eliminarf = styled.button`
  ${flotante_gen}
  background-image: url(${Eliminar});
`;
export const Button_Menosf = styled.button`
  ${flotante_gen}
  background-image: url(${Menos});
`;
export const Button_Editarf = styled.button`
  ${flotante_gen}
  background-image: url(${Editar});
`;
export const Button_Enviarf = styled.button`
  ${flotante_gen}
  background-image: url(${Enviar});
`;
export const Button_Alumnosf = styled.button`
  ${flotante_gen}
`;
export const Button_Buscarf = styled.button`
  ${flotante_gen}
  background-image: url(${Buscar});
`;
export const Button_Guardarf = styled.button`
  ${flotante_gen}
  background-image: url(${Guardar});
`;
export const Button_Comentariof = styled.button`
  ${flotante_gen}
  background-image: url(${Comentar});
`;
export const Button_Agregarf = styled.button`
  ${flotante_gen}
  background-image: url(${Nuevo});
`;
export const Button_Masf = styled.button`
  ${flotante_gen}
  background-image: url(${Mas});
`;
export const Button_Calificarf = styled.button`
  ${flotante_gen}
  background-image: url(${Calificar});
`;


//==========================================================Modal==========================================================

export const BackgroundModal = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  background: white;
  border-radius: 4px;
  padding: 20px;
  width: 60%;
  text-align: center;
  position: relative;

  @media screen and (max-width: 1089px) {
    width: 90%;
  }

`;

export const CloseButton = styled.button`
  position: absolute;
  top: 2%;
  right: 1%;
  z-index: 11;
  background-color: white;
  color: #FF0000;
  font-family: 'Poppins', sans-serif;
  border-radius: 50px;
  width: 25px;
  border: none;
  font-size: 23px;
  cursor: pointer;
`;

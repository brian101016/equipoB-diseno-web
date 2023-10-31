import styled from 'styled-components';



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

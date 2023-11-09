// ################################ IMPORTS ################################
import ImageProvider from "@utils/ImageProvider";
import { useState } from "react";
import styled from "styled-components";

// ################################ INTERFACES & PROPS ################################
type _Base = import("utils/classes").Base;
// ForgotPassScreen => Rename all instances to use
type ForgotPassScreenProps = {} & _Base;

// ################################ RENDERING COMPONENT ################################
const _ForgotPassScreen = (props: ForgotPassScreenProps) => {
  const [email, setEmail] = useState("");

  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  // Enviar nueva contraseña al email
  const setNewPassword = () => {};
  // ------------------------------------------------------------------------------------ RETURN
  return (
    <div className={props.className}>
      <div className="forgotpass-card">
        <div className="card-logo-forgopass">
          <img src={ImageProvider.logo.vertical} alt="logo" />
        </div>
        <h2 className="forgotpass-title">Buscar tu correo electrónico</h2>
        <p className="forgotpass-message">ingresa tu correo de recuperación</p>
        <form className="card-form">
          <input
            className="card-form-input"
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={emailChange}
          />
          <button className="forgotpass-form-button" onClick={setNewPassword}>
            Continuar
          </button>
        </form>
      </div>
    </div>
  );
};

// ################################ STYLES ################################
const ForgotPassScreen = styled(_ForgotPassScreen)<ForgotPassScreenProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-image: url(${ImageProvider.background.login});
  background-repeat: no-repeat;
  background-size: cover;

  .forgotpass-card {
    width: 546px;
    height: 529px;
    border-radius: 14px;
    background: rgba(243, 243, 244, 0.9);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    align-items: center;

    .card-logo-forgopass {
      margin-top: 24px;
    }

    .forgotpass-title {
      color: #000;
      font-family: Poppins;
      font-size: 26px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      margin-bottom: 17px;
    }
    .forgotpass-message {
      color: #000;
      font-family: Poppins;
      font-size: 17px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin-bottom: 37px;
    }

    .card-form {
      display: flex;
      flex-direction: column;
    }

    .card-form-input {
      color: rgba(0, 0, 0, 0.32);
      font-family: Poppins;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      width: 402px;
      height: 60px;
      flex-shrink: 0;
      border-style: none;
      border-radius: 2px;
      background: #fff;
      padding: 15px 66px 15px 33px;
      margin-bottom: 26px;
    }

    .forgotpass-form-button {
      width: 402px;
      height: 71px;
      flex-shrink: 0;
      color: #fff;
      border-radius: 11px;
      background: #080809;
      font-family: Poppins;
      font-size: 26px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
`;

// ################################ EXPORTS ################################
export default ForgotPassScreen;

// ################################ IMPORTS ################################
import ImageProvider from "@utils/ImageProvider";
import { useState } from "react";
import styled from "styled-components";
import { DB } from "App";
import { Link, useNavigate } from "react-router-dom";

// ################################ INTERFACES & PROPS ################################
type _Base = import("utils/classes").Base;
// ForgotPassScreen => Rename all instances to use
type ForgotPassScreenProps = {} & _Base;

// ################################ RENDERING COMPONENT ################################
const _ForgotPassScreen = (props: ForgotPassScreenProps) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);

  const emailChange = (e) => {
    setEmail(e.target.value);
    setError(null);
  };

  const home = useNavigate();

  const setNewPassword = (e) => {
    e.preventDefault();

    // validar correo y contraseña coinsidan en la DB
    let USER; // Variable de apoyo
    DB.users.forEach((usr, index, arr) => {
      if (email === usr.email) {
        USER = structuredClone(arr[index]);
      }
    });
    DB.currentUser = USER;

    if (DB.currentUser != null) {
      home("/home");
    } else if (!email) {
      setError("Por favor, ingresa tu correo electrónico.");
    } else if (!isValidEmail(email)) {
      setError("Correo electrónico inválido. Ingresa un correo válido.");
    } else {
      // Lógica para enviar la nueva contraseña al email o manejar la verificación
      // En este ejemplo, simplemente establezco un mensaje de error simulado
      setError("El correo electrónico no existe en la base de datos.");
    }
  };

  const isValidEmail = (email: string): boolean => {
    // Puedes usar una expresión regular u otra lógica para verificar el formato del correo electrónico
    return /\S+@\S+\.\S+/.test(email);
  };

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
          {error && <p className="error-message">{error}</p>}
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
  background-image: url(${ImageProvider.backgroundImages.all});
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
      cursor: pointer;
    }
  }
`;

// ################################ EXPORTS ################################
export default ForgotPassScreen;

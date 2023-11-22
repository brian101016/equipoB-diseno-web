// ################################ IMPORTS ################################
import ImageProvider from "@utils/ImageProvider";
import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

// ################################ INTERFACES & PROPS ################################
type _Base = import("utils/classes").Base;
// login => Rename all instances to use
type loginProps = {} & _Base;

// ################################ RENDERING COMPONENT ################################
const _Login = (props: loginProps) => {
  //const [emailInput, setEmailInput] = useState();
  const [email, setEmail] = useState("");
  const [passVisible, setPassVisible] = useState(false);
  const [pass, setPass] = useState("");

  const emailChange = (e) => {
    setEmail(e.target.value);
  };
  const passChange = (e) => {
    setPass(e.target.value);
  };
  /**
   * Cambia el icono de mostrar o no mostrar contraseña
   * @param e "true" o "false"
   */
  const visiblePass = () => {
    setPassVisible(!passVisible);
    // funcion para mostrar la contraseña del input
  };
  // ######################################################## RETURN #############################################
  return (
    <div className={props.className}>
      <div className="center login-screen">
        <form id="form" className="login-form">
          <img src={ImageProvider.logo.vertical} alt="logotipo" />

          <h2>Iniciar sesión en su cuenta</h2>

          <input
            className="input"
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={emailChange}
          />

          <div className="input-password">
            <input
              className="input"
              type={passVisible ? "text" : "password"}
              placeholder="Contraseña"
              value={pass}
              onChange={passChange}
            />
            <button id="btnShowPass" type="button" onClick={visiblePass}>
              <img
                id="btnIconEye"
                src={
                  passVisible
                    ? ImageProvider.misc.ojo_on
                    : ImageProvider.misc.ojo_off
                }
                alt={passVisible ? "Ocultar ontraseña" : "Mostrar contraseña"}
              />
            </button>
          </div>

          <div>
            <input type="checkbox" />
            <label htmlFor="">Recordarme</label>
            <Link to={"forgot"}>Olvidaste tu contraseña</Link>
          </div>

          <button className="button">Iniciar sesión</button>

          <button className="button">Crear nueva cuenta</button>

          <span> o </span>

          <button className="button-google">Iniciar sesion con google</button>
        </form>
      </div>
    </div>
  );
};

// ################################ STYLES ################################
const Login = styled(_Login)<loginProps>`
  .screen {
    height: 100%;
  }

  .login-screen {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("https://picsum.photos/1500");
    background-size: cover;
  }
  #login-form {
    display: flex;
    flex-direction: column;
    background-color: rgba(243, 243, 244, 0.9);
    padding: 36px 70px;
    border-radius: 20px;
    gap: 18px;

    img {
      width: 128px;
      margin: 0 auto;
    }

    h2 {
      color: #000;
      font-family: "Poppins";
      font-size: 32px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    .container {
      display: flex;
      gap: 10px;
    }

    .input {
      flex-direction: column;
      background-color: rgba(243, 243, 244, 0.9);
      padding: 36px 70px;
      border-radius: 20px;
      gap: 18px;

      img {
        width: 128px;
        margin: 0 auto;
      }

      h2 {
        color: #000;
        font-family: "Poppins";
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }

      .container {
        display: flex;
        gap: 10px;
      }

      .input {
        border-radius: 2px;
        background: #fff;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        padding: 0.8rem 1.6rem;
        border: 0;
        font-family: "Poppins";
        font-size: 20px;
        font-style: normal;
        font-weight: 400;

        &::placeholder {
          color: rgba(0, 0, 0, 0.32);
          font-size: inherit;
          font-weight: inherit;
        }

        &:hover,
        &:active {
          box-sizing: border-box;
          background: #e8f5fe;
          box-shadow: 0 0 0 2px black;
        }
      }

      .inputerror {
        box-shadow: 0 0 0 1px red !important;
      }

      .inputCorreo {
        margin: 1.5rem 0rem 0.9rem 0rem;
      }

      .inputPassContainer {
        border-radius: 2px;
        background: #fff;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        border: 0;
        display: flex;
      }

      a:hover {
        color: #2f8da1;
      }

      .inputPassContainer .inputIcon {
        box-shadow: none;
        width: 372px;
      }
    }
  }
  input[type="radio"] {
    appearance: none;
    -webkit-appearance: none;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    outline: none;
    box-shadow: 0 0 0 1px black;
  }

  .inputPassContainer .inputIcon {
    box-shadow: none;
    width: 372px;
  }

  input[type="radio"]:checked {
    box-shadow: 0 0 0 1px rgba(30, 144, 255, 2);
  }

  input[type="radio"]:before {
    content: "";
    display: block;
    width: 80%;
    height: 80%;
    margin: 10% auto;
    border-radius: 100%;
  }

  input[type="radio"]:checked:before {
    background: rgba(30, 144, 255, 2);
  }

  input[type="number"]::placeholder {
    opacity: 0.4;
  }

  img#ojoIcon {
    width: 35px;
  }

  #passOjo {
    background: none;
    border: none;
    cursor: pointer;
    padding: 9px;
  }
`;

// ################################ EXPORTS ################################
export default Login;

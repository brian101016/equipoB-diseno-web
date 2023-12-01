// ################################ IMPORTS ################################
import ImageProvider from "@utils/ImageProvider";
import { useState } from "react";
import styled from "styled-components";

// ################################ INTERFACES & PROPS ################################
type _Base = import("utils/classes").Base;
// SignupScreen => Rename all instances to use
type SignupScreenProps = {} & _Base;

// ################################ RENDERING COMPONENT ################################
const _SignupScreen = (props: SignupScreenProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [visiblePassInput1, setVisiblePassInput1] = useState(false);
  const [visiblePassInput2, setVisiblePassInput2] = useState(false);

  //
  const nameChange = (e) => {
    setName(e.target.value);
  };

  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  const passChange1 = (e) => {
    setPass1(e.target.value);
  };

  const passChange2 = (e) => {
    setPass2(e.target.value);
  };

  const visiblePass1 = () => {
    setVisiblePassInput1(!visiblePassInput1);
  };

  const visiblePass2 = () => {
    setVisiblePassInput2(!visiblePassInput2);
  };

  // ------------------------------------------------------------------------------------ RETURN
  return (
    <div className={props.className}>
      <div className="signup-card">
        <div className="card-logo">
          <img src={ImageProvider.logo.vertical} alt="logo" />
        </div>
        <form className="card-form">
          <input
            className="card-form-input"
            type="text"
            placeholder="Nombre completo"
            value={name}
            onChange={nameChange}
          />
          <input
            className="card-form-input"
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={emailChange}
          />
          <div className="form-pass card-form-input">
            <input
              type="password"
              placeholder="Contraseña"
              value={pass1}
              onChange={passChange1}
            />
            <img
              className="icono-ojo"
              src={
                visiblePassInput1
                  ? ImageProvider.misc.ojo_on
                  : ImageProvider.misc.ojo_off
              }
              alt="icono ojo"
              onClick={visiblePass1}
              width={45}
              height={45}
            />
          </div>
          <div className="form-pass card-form-input">
            <input
              type="password"
              placeholder="Confirmar contraseña"
              value={pass2}
              onChange={passChange2}
            />
            <img
              className="icono-ojo"
              src={
                visiblePassInput2
                  ? ImageProvider.misc.ojo_on
                  : ImageProvider.misc.ojo_off
              }
              alt="icono ojo"
              onClick={visiblePass2}
              width={45}
              height={45}
            />
          </div>
          <button className="form-button button">Regístrate</button>

          <div className="form-span">
            <div className="span-vector"></div>
            <span>o</span>
            <div className="span-vector"></div>
          </div>
          <button className="form-button-google ">
            <img
              className="icon-google"
              src={ImageProvider.logo.google_mini}
              alt="logo google"
            />
            Continuar con Google
          </button>
        </form>
      </div>
    </div>
  );
};

// ################################ STYLES ################################
const SignupScreen = styled(_SignupScreen)<SignupScreenProps>`
  background-image: url(${ImageProvider.backgroundImages.all});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  .signup-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 735px;
    width: 546px;
    border-radius: 21px;
    background: rgba(243, 243, 244, 0.9);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    .card-logo {
      margin-top: 26px;
      img {
        width: 189px;
        height: 138px;
      }
    }

    .card-form {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;

      .card-form-input {
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        margin-bottom: 26px;
        input {
          font-weight: 357px;
        }
        &:hover {
          border: black solid 2px;
        }
      }

      input {
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
      }

      .form-pass {
        display: flex;
        align-items: center;
        border-style: none;
        border-radius: 2px;
        background: #fff;
        input {
          width: 335px;
        }
        img {
          margin-right: 22px;
        }
      }

      .form-button {
        margin-bottom: 24px;
      }

      .form-button-google {
        margin-top: 24px;
        color: #000;
        font-family: Poppins;
        font-size: 19px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        width: 402px;
        height: 58px;
        border-radius: 21px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .icon-google {
        margin-right: 17px;
        height: 23px;
        width: 23px;
      }

      .form-span {
        width: 100%;
        display: flex;
        align-items: center;

        span {
          color: #000;
          font-family: Poppins;
          font-size: 17px;
          font-weight: 700;
          margin: 0px 4px;
        }

        .span-vector {
          border: black solid 2px;
          flex-grow: 1;
        }
      }
    }
  }
`;

// ################################ EXPORTS ################################
export default SignupScreen;

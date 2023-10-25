// ################################ IMPORTS ################################
import bg_login from "@theme/images/bg-login.jpeg";
import icon_logo from "@theme/images/logo-azul-vertical.png";
import ojo_on from "@theme/images/ojo-on.png";
import ojo_off from "@theme/images/ojo-off.png";
import mini_google from "@theme/images/Mini-google.png";

import { useState } from "react";
import { Link } from "react-router-dom";

// ################################ INTERFACES & PROPS ################################

// SignupScreen => Rename all instances to use
type SignupScreenProps = {};

// ################################ RENDERING COMPONENT ################################
const SignupScreen = (props: SignupScreenProps) => {
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
    <div className="signup-screen">
      <div className="signup-card">
        <div className="card-logo">
          <img src={icon_logo} alt="logo" />
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
              src={visiblePassInput1 ? ojo_on : ojo_off}
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
              src={visiblePassInput2 ? ojo_on : ojo_off}
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
            <img className="icon-google" src={mini_google} alt="logo google" />
            Continuar con Google
          </button>
        </form>
      </div>
    </div>
  );
};

// ################################ EXPORTS ################################
export default SignupScreen;

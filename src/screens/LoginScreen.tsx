import bg_login from "@theme/images/bg-login.jpeg";
import icon_user from "@theme/images/icon-user.png";
import ojo_on from "@theme/images/ojo-on.png";
import ojo_off from "@theme/images/ojo-off.png";
import mini_google from "@theme/images/Mini-google.png";

import { useState } from "react";


// ################################ INTERFACES & PROPS ################################
// LoginScreen => Rename all instances to use
type LoginScreenProps = {};

// ################################ RENDERING COMPONENT ################################
const LoginScreen = (props: LoginScreenProps) => {

  const [passInput, setPassInput] = useState(false);
  const [pass, setPass] = useState('');

  const visiblePass = () => {
    setPassInput(!passInput);
  }

  const passChange = (e) => {
    setPass(e.target.value);
  };

  const styleHorizontal = {
    borderBottom: "black solid 6px",
    flexGrow: 1,
  };

  // ------------------------------------------------------------------------------------ RETURN
  return (
    <div
      className="screen login-screen"
      style={{
        backgroundImage: `url('${bg_login}')`,
      }}
    >
      <form id="login-form">
        <img src={icon_user} alt="logo" />

        <h2>Iniciar sesión en su cuenta</h2>

        <input className="input" type="text" placeholder="Correo electrónico" />

        <div className="inputPassContainer">
          <input
            className="input inputIcon"
            type={passInput ? 'text' : 'password'}
            placeholder="Contraseña"
            value={pass}
            onChange={passChange} />
          <button id="passOjo" type="button" onClick={visiblePass}>
            <img
              id="ojoIcon"
              src={passInput ? ojo_on : ojo_off}
              alt={passInput ? "Ocultar ontraseña" : "Mostrar contraseña"} />
          </button>
        </div>

        <div style={{ display: "flex" }}>
          <input type="checkbox" />
          <label htmlFor="" style={{ marginLeft: "10px" }}>Recordarme</label>
          <a href="#" style={{ marginLeft: "auto" }}>
            Olvidaste tu contraseña?
          </a>
        </div>

        <button className="button">Iniciar sesión</button>

        <button className="button">Crear nueva cuenta</button>

        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div style={styleHorizontal}></div>
          <span
            style={{
              margin: "0 4px",
              fontWeight: 700,
            }}
          >
            o
          </span>
          <div style={styleHorizontal}></div>
        </div>

        <button className="button buttonGoogle">
          <div className="icon-container">
            <img src={mini_google} alt="Icono de Google" id="iconGoogle" />
          </div>
          Iniciar sesión con Google
        </button>

      </form>
    </div>
  );
};

// ################################ EXPORTS ################################
export default LoginScreen;

// ################################ IMPORTS ################################
import styled from "styled-components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ImageProvider from "@utils/ImageProvider";

// ################################ INTERFACES & PROPS ################################
type _Base = import("utils/classes").Base;
// LoginScreen => Rename all instances to use
type LoginScreenProps = {} & _Base;

// ################################ RENDERING COMPONENT ################################
const _LoginScreen = (props: LoginScreenProps) => {
  const [passInput, setPassInput] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [sesion, setSesion] = useState(false);
  const [remember, setRemember] = useState(0);

  //
  const visiblePass = () => {
    setPassInput(!passInput);
  };

  const passChange = (e) => {
    setPass(e.target.value);
  };

  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  const RememberChange = () => {
    remember == 0 ? setRemember(1) : setRemember(0);
  };

  // funcion que lleva de la Login a Signup usando un boton
  const newAccount = useNavigate();
  const createNewAccount = () => {
    newAccount("signup");
  };

  // Funsion para evitar que se recarge la pagina al precionar un boton
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // funcion para validar inicio de sesión
  const home = useNavigate();
  async function gatData() {
    const request = await fetch(
      "https://raw.githubusercontent.com/brian101016/equipoB-diseno-web/main/src/utils/database.json"
    );

    const result = await request.json();
    result.users?.forEach((u) => {
      if (u.email === email && u.password === pass) {
        rememberData();
        home("/home");
      } else {
        if (!sesion) {
          setSesion(true);
          //window.alert('Datos incorrectos');
        }
      }
    });
  }

  //funcion para guardar la información del usuario
  async function rememberData() {
    if (remember == 1) {
      const str = JSON.stringify({ email, pass });
      localStorage.setItem("studySyncRem", str);
      getRemember();
    }
  }

  //funcion para rellenar campos de usuario y contraseña si se guardaron
  function getRemember() {
    if (localStorage.getItem("studySyncRem")) {
      const data = localStorage.getItem("studySyncRem")?.split(",");
      let password = data?.pop()?.slice(8);
      let email = data?.toString();
      password = password?.slice(0, password?.length - 2);
      email = email?.slice(10, email?.length - 1);
      setEmail("" + email?.toString());
      setPass("" + password?.toString());
      console.log(email, password);
    }
  }

  // ################################ RETURN ################################
  return (
    <div className={props.className}>
      <div className="log-screen">
        <form className="log-form" onSubmit={handleSubmit}>
          <img src={ImageProvider.logo.vertical} alt="logo" />

          <h2>
            {sesion ? "Datos incorrectos" : "Iniciar sesión en su cuenta"}
          </h2>

          <input
            className="log-input-correo letra"
            type="text"
            placeholder="Correo electrónico"
            value={email}
            onChange={emailChange}
          />

          <div className="log-pass-container">
            <input
              className="letra"
              type={passInput ? "text" : "password"}
              placeholder="Contraseña"
              value={pass}
              onChange={passChange}
            />
            <button id="passOjo" type="button" onClick={visiblePass}>
              <img
                id="ojoIcon"
                src={
                  passInput
                    ? ImageProvider.misc.ojo_on
                    : ImageProvider.misc.ojo_off
                }
                alt={passInput ? "Ocultar ontraseña" : "Mostrar contraseña"}
                onLoad={getRemember}
              />
            </button>
          </div>

          <div className="form-container-varios">
            <div className="form-container-check">
              <input
                className="checkbox"
                type="checkbox"
                id="recordarme"
                value={remember}
                onClick={RememberChange}
              />
              <label htmlFor="recordarme">Recordarme</label>
            </div>
            <Link
              className="form-container-link"
              to={"/login/forgot"}
              style={{ marginLeft: "auto" }}
            >
              Olvidaste tu contraseña?
            </Link>
          </div>

          <button className="boton" onClick={gatData}>
            Iniciar sesión
          </button>

          <button className="boton" onClick={createNewAccount}>
            Crear nueva cuenta
          </button>

          <div className="form-span">
            <div className="span-vector"></div>
            <span>o</span>
            <div className="span-vector"></div>
          </div>

          <button className="button buttonGoogle">
            <div className="icon-container">
              <img
                src={ImageProvider.logo.google_mini}
                alt="Icono de Google"
                id="iconGoogle"
              />
            </div>
            Iniciar sesión con Google
          </button>
        </form>
      </div>
    </div>
  ); // End return
}; // End fuction

// ################################ STYLES ################################
const LoginScreen = styled(_LoginScreen)<LoginScreenProps>`
  .letra {
    color: rgba(0, 0, 0, 0.32);
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  height: 100%;
  background-image: url(${ImageProvider.background.login});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  .log-screen {
    width: 546px;
    height: 680px;
    background-color: rgba(243, 243, 244, 0.9);
    border-radius: 20px;
    padding: 36px 70px;
  }

  .log-form {
    font-family: Poppins;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;

    img {
      width: 128px;
      margin: 0 auto;
    }

    h2 {
      color: #000;
      font-size: 32px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    .log-input-correo {
      font-family: Poppins;
      border-radius: 2px;
      background: #fff;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      width: 402px;
      height: 60px;
      flex-shrink: 0;
      padding-left: 20px;
      border-style: none;

      &:hover {
        border: black solid 2px;
      }
    }

    .boton {
      width: 402px;
      height: 71px;
      flex-shrink: 0;
      border-radius: 11px;
      background: #127ec2;
      color: #fff;
      font-family: Poppins;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      border-style: none;
    }
  }

  .log-pass-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-style: none;
    border-radius: 2px;
    background: #fff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    height: 60px;
    width: 402px;
    input {
      padding-left: 20px;
      border-style: none;
      width: 100%;
      height: 100%;
      border-style: none;
    }

    img {
    }
  }

  .form-container-varios {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    .form-container-check {
      display: flex;
    }
    label {
      margin-left: 5px;
    }
    a {
      justify-content: end;
    }
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
`;

// ################################ EXPORTS ################################
export default LoginScreen;

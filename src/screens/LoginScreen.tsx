import bg_login from "@theme/images/bg-login.jpeg";
import icon_user from "@theme/images/icon-user.png";

// ################################ INTERFACES & PROPS ################################
// LoginScreen => Rename all instances to use
type LoginScreenProps = {};

// ################################ RENDERING COMPONENT ################################
const LoginScreen = (props: LoginScreenProps) => {
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

        <input className="input" type="text" placeholder="Contraseña" />

        <div style={{ display: "flex" }}>
          <input type="checkbox" />
          <label htmlFor="">Recordarme</label>
          <a href="#" style={{ marginLeft: "auto" }}>
            Olvidaste tu contraseña?
          </a>
        </div>

        <button className="button">Inciar sesión</button>

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

        <button className="button">Inciar sesión con Google</button>
      </form>
    </div>
  );
};

// ################################ EXPORTS ################################
export default LoginScreen;

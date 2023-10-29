// ################################ INTERFACES & PROPS ################################
import iconoCalendario from "@theme/images/img-landing/icon-calendar.png";
import iconoTask from "@theme/images/img-landing/icon-task.png";
import iconoHouse from "@theme/images/img-landing/icon-house.png";
import logo from "@theme/images/img-landing/logotipo-header.png";
import imagen from "@theme/images/img-landing/landing-img.png";

import { Link, useNavigate } from "react-router-dom";

// LandingScreen => Rename all instances to use
type LandingScreenProps = {};

// ################################ RENDERING COMPONENT ################################
const LandingScreen = (props: LandingScreenProps) => {
  const navigater = useNavigate();

  const irRegistrate = () => {
    navigater("login/signup");
  };

  // ------------------------------------------------------------------------------------ RETURN
  return (
    <div className="landing-page">
      Landing page
      <Link to={"/login"}>Ir hacia Login</Link>
      <header className="landing-header">
        <img src={logo} alt="logotipo empresa" />

        <div className="landing-header-components">
          <a>
            <Link to={"/login"}>Iniciar sesión</Link>
          </a>
          <button onClick={irRegistrate}>Regístrate</button>
        </div>
      </header>
      <section className="landing-welcome">
        <div className="landing-welcome-components">
          <h1>BIENVENIDOS A STUDYSYNC</h1>
          <p>
            En STUDYSYNC, aprendizaje cómodo y exitoso. Estudiantes y profesores
            conectan desde casa o escuela. Acceso sencillo a calificaciones,
            tareas, recursos. Simplifica tu educación, alcanza nuevas alturas.
            ¡Comienza hoy!
          </p>
          <button>Explorar Más</button>
        </div>

        <img src={imagen} alt="persona trabajando con una laptop" />
      </section>
      <section className="landing-info">
        <div className="landing-info-content">
          <div className="landing-info-card">
            <div className="circle">
              <img src={iconoTask} className="info-img"></img>
            </div>
            <p>
              Usada para calificar contenido, más estrellas indican mejor
              calidad o rendimiento del elemento evaluado.
            </p>
          </div>
          <div className="landing-info-card">
            <div className="circle">
              <img src={iconoCalendario} className="info-img"></img>
            </div>
            <p>
              Muestra una hora específica para una fecha límite, indicando el
              plazo para completar una tarea importante.
            </p>
          </div>
          <div className="landing-info-card">
            <div className="circle">
              <img src={iconoHouse} className="info-img"></img>
            </div>
            <p>
              Representa la opción de realizar tareas escolares desde casa,
              brindando comodidad y flexibilidad en el entorno educativo.
            </p>
          </div>
        </div>
      </section>
      <footer className="landing-footer">
        <div className="footer-left">
          <img src={logo}></img>
          <p>Acerca de StudySync</p>
        </div>
        
        <p>Copyright ©2023 StudySync</p>
      </footer>
    </div>
  );
};

// ################################ EXPORTS ################################
export default LandingScreen;

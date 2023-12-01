// ################################ IMPORTS ################################
import ImageProvider from "@utils/ImageProvider";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import CourseButtons from "@components/courseButtons";

// ################################ INTERFACES & PROPS ################################
type _Base = import("utils/classes").Base;
// LandingScreen => Rename all instances to use
type LandingScreenProps = {} & _Base;

// ################################ RENDERING COMPONENT ################################
const _LandingScreen = (props: LandingScreenProps) => {
  // ------------------------------------------------------------------------------------ RETURN
  return (
    <div className={props.className + " landing-page"}>
      <section className="landing-welcome">
        <div className="landing-welcome-components">
          <h1>BIENVENIDOS A STUDYSYNC</h1>

          <p>
            En STUDYSYNC, aprendizaje cómodo y exitoso. Estudiantes y profesores
            conectan desde casa o escuela. Acceso sencillo a calificaciones,
            tareas, recursos. Simplifica tu educación, alcanza nuevas alturas.
            ¡Comienza hoy!
          </p>

          <button className="btnExplora">
            <Link to={"/login"} className="button-link">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">Explorar Más</span>
            </Link>
          </button>
        </div>

        <img
          src={ImageProvider.landing.landing}
          alt="persona trabajando con una laptop"
        />
      </section>

      <section className="landing-info">
        <div className="landing-info-content">
          <div className="landing-info-card">
            <div className="circle">
              <img
                src={ImageProvider.landing.icon_task}
                alt=""
                className="info-img"
              ></img>
            </div>
            <p>
              Usada para calificar contenido, más estrellas indican mejor
              calidad o rendimiento del elemento evaluado.
            </p>
          </div>
          <div className="landing-info-card">
            <div className="circle">
              <img
                src={ImageProvider.landing.icon_calendar}
                alt=""
                className="info-img"
              ></img>
            </div>
            <p>
              Muestra una hora específica para una fecha límite, indicando el
              plazo para completar una tarea importante.
            </p>
          </div>
          <div className="landing-info-card">
            <div className="circle">
              <img
                src={ImageProvider.landing.icon_house}
                alt=""
                className="info-img"
              ></img>
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
          <img src={ImageProvider.logo.horizontal} alt="logo" />
          <p>Acerca de StudySync</p>
        </div>

        <p>Copyright ©2023 StudySync</p>
      </footer>
    </div>
  );
};

// ################################ STYLES ################################
const LandingScreen = styled(_LandingScreen) <LandingScreenProps>`
  ${(props) => css``}
`;

// ################################ EXPORTS ################################
export default LandingScreen;

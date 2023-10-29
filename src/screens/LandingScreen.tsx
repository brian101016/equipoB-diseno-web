// ################################ INTERFACES & PROPS ################################
import iconoCalendario from '@theme/images/img-landing/icon-calendar.png';
import iconoTask from '@theme/images/img-landing/icon-task.png';
import iconoHouse from '@theme/images/img-landing/icon-house.png';
import logo from '@theme/images/img-landing/logotipo-header.png';
import imagen from '@theme/images/img-landing/landing-img.png';

import { Link } from 'react-router-dom';

// LandingScreen => Rename all instances to use
type LandingScreenProps = {};

// ################################ RENDERING COMPONENT ################################
const LandingScreen = (props: LandingScreenProps) => {
    // ------------------------------------------------------------------------------------ RETURN
    return (
        <div className="landing-page">
            Landing page
            <Link to={'/login'}>Ir hacia Login</Link>
            <header className="landing-header">
                <img src={logo} alt="logotipo empresa" />
                <div className="landing-header-content">
                    <a>
                        <Link to={'/login'}>Iniciar sesión</Link>
                    </a>
                    <button>Regístrate</button>
                </div>
            </header>
            <section className="landing-welcome">
                <div className="landing-welcome-content">
                    <h1>BIENVENIDOS A STUDYSYNC</h1>
                    <p>
                        En STUDYSYNC, aprendizaje cómodo y exitoso. Estudiantes
                        y profesores conectan desde casa o escuela. Acceso
                        sencillo a calificaciones, tareas, recursos. Simplifica
                        tu educación, alcanza nuevas alturas. ¡Comienza hoy!
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
                            Usada para calificar contenido, más estrellas
                            indican mejor calidad o rendimiento del elemento
                            evaluado.
                        </p>
                    </div>
                    <div className="landing-info-card">
                        <div className="circle">
                            <img
                                src={iconoCalendario}
                                className="info-img"
                            ></img>
                        </div>
                        <p>
                            Muestra una hora específica para una fecha límite,
                            indicando el plazo para completar una tarea
                            importante.
                        </p>
                    </div>
                    <div className="landing-info-card">
                        <div className="circle">
                            <img src={iconoHouse} className="info-img"></img>
                        </div>
                        <p>
                            Representa la opción de realizar tareas escolares
                            desde casa, brindando comodidad y flexibilidad en el
                            entorno educativo.
                        </p>
                    </div>
                </div>
            </section>
            <footer className="landing-footer">
                <img src={logo} className="footer-img"></img>
                <p>Acerca de StudySync</p>
                <p>Copyright ©2023 StudySync</p>
            </footer>
        </div>
    );
};

// ################################ EXPORTS ################################
export default LandingScreen;

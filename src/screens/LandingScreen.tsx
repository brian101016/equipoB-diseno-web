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
            <header className="landing-header"></header>
            <section className="landing-welcome"></section>
            <section className="landing-info">
                <div className="landing-info-content">
                    <div className="landing-info-card"> 
                      <img src={iconoTask} className='footer-img'></img>  
                      <p>
                        Usada para calificar contenido, más estrellas indican mejor calidad o rendimiento del elemento evaluado.
                      </p>
                    </div>
                    <div className="landing-info-card">
                      <img src={iconoCalendario} className='footer-img'></img>  
                      <p>
                        Muestra una hora específica para una fecha límite, indicando el plazo para completar una tarea importante.
                      </p>
                    </div>
                    <div className="landing-info-card">
                      <img src={iconoHouse} className='footer-img'></img>  
                      <p>
                        Representa la opción de realizar tareas escolares desde casa, brindando comodidad y flexibilidad en el entorno educativo.
                      </p>
                    </div>
                </div>
            </section>
            <footer className="landing-footer">
              <img src={logo} className='footer-img'></img>
              <p>Acerca de StudySync</p>
              <p>Copyright ©2023 StudySync</p>
            </footer>
        </div>
    );
};

// ################################ EXPORTS ################################
export default LandingScreen;

// ################################ INTERFACES & PROPS ################################
import iconoCalendario from '@theme/images/img-landing/icon-calendar.png';
import iconoTask from '@theme/images/img-landing/icon-task.png';
import iconoHouse from '@theme/images/img-landing/icon-house.png';
import logo from '@theme/images/img-landing/logotipo-header.png';
import imagen from '@theme/images/img-landing/landing-img.png';

import { Link, useNavigate } from 'react-router-dom';

// LandingScreen => Rename all instances to use
type LandingScreenProps = {};

// ################################ RENDERING COMPONENT ################################
const LandingScreen = (props: LandingScreenProps) => {
    const navigater = useNavigate();

    const irRegistrate = () => {
        navigater('login/signup');
    };

    // ------------------------------------------------------------------------------------ RETURN
    return (
        <div className="landing-page">
            Landing page
            <Link to={'/login'}>Ir hacia Login</Link>
            <header className="landing-header">
                <img src={logo} alt="logotipo empresa" />
                <div className="landing-header-components">
                    <a>
                        <Link to={'/login'}>Iniciar sesión</Link>
                    </a>
                    <button onClick={irRegistrate}>Regístrate</button>
                </div>
            </header>
            <section className="landing-welcome">
                <div className="landing-welcome-components">
                    <h1>BIENVENIDOS A STUDYSYNC</h1>
                    <p>
                        En STUDYSYNC, aprendizaje cómodo y exitoso. Estudiantes
                        y profesores conectan desde casa o escuela. Acceso
                        sencillo a calificaciones, tareas, recursos. Simplifica
                        tu educación, alcanza nuevas alturas. ¡Comienza hoy!
                    </p>
                    <button>Explorar Más</button>
                </div>
                <img src={imagen} alt="persona usando una laptop" />
            </section>
            <section className="landing-info">
                <div className="landing-info-content">
                    <div className="landing-info-card"></div>
                    <div className="landing-info-card"></div>
                    <div className="landing-info-card"></div>
                </div>
            </section>
            <footer className="landing-footer"></footer>
        </div>
    );
};

// ################################ EXPORTS ################################
export default LandingScreen;

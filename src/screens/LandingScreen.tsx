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

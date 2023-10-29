// ################################ INTERFACES & PROPS ################################

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
            <header></header>
            <section></section>
            <section>
                <div className="landing-info">
                    <div className="landing-info-card"></div>
                    <div className="landing-info-card"></div>
                    <div className="landing-info-card"></div>
                </div>
            </section>
            <footer></footer>
        </div>
    );
};

// ################################ EXPORTS ################################
export default LandingScreen;

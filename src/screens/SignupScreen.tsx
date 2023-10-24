// ################################ IMPORTS ################################
import bg_login from '@theme/images/bg-login.jpeg';
import icon_user from '@theme/images/icon-user.png';
import ojo_on from '@theme/images/ojo-on.png';
import ojo_off from '@theme/images/ojo-off.png';
import mini_google from '@theme/images/Mini-google.png';

import { useState } from 'react';
import { Link } from 'react-router-dom';

// ################################ INTERFACES & PROPS ################################
// SignupScreen => Rename all instances to use
type SignupScreenProps = {};

// ################################ RENDERING COMPONENT ################################
const SignupScreen = (props: SignupScreenProps) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass1, setPass1] = useState('');
    const [pass2, setPass2] = useState('');
    const [visiblePassInput1, setVisiblePassInput1] = useState(false);
    const [visiblePassInput2, setVisiblePassInput2] = useState(false);

    //
    const nameChange = (e) => {
        setName(e.target.value);
    };

    const emailChange = (e) => {
        setEmail(e.target.value);
    };

    const passChange1 = (e) => {
        setPass1(e.target.value);
    };

    const passChange2 = (e) => {
        setPass2(e.target.value);
    };

    const visiblePass1 = () => {
        setVisiblePassInput1(!visiblePassInput1);
    };

    const visiblePass2 = () => {
        setVisiblePassInput2(!visiblePassInput2);
    };

    // ------------------------------------------------------------------------------------ RETURN
    return (
        <div className="sign-up">
            <div className="sign-up-card">
                <div className="card-logo">
                    <img src="#" alt="logo" />
                </div>
                <form className="card-form">
                    <input
                        type="text"
                        placeholder="Nombre completo"
                        value={name}
                        onChange={nameChange}
                    />
                    <input
                        type="email"
                        placeholder="Correo electrónico"
                        value={email}
                        onChange={emailChange}
                    />
                    <div className="form-pass">
                        <input
                            type="password"
                            placeholder="Contraseña"
                            value={pass1}
                            onChange={passChange1}
                        />
                        <img
                            className="icono-ojo"
                            src={visiblePassInput1 ? ojo_on : ojo_off}
                            alt="icono ojo"
                            onClick={visiblePass1}
                        />
                    </div>
                    <div className="form-pass">
                        <input
                            type="password"
                            placeholder="Confirmar contraseña"
                            value={pass2}
                            onChange={passChange2}
                        />
                        <img
                            className="icono-ojo"
                            src={visiblePassInput2 ? ojo_on : ojo_off}
                            alt="icono ojo"
                            onClick={visiblePass2}
                        />
                    </div>
                    <button className="form-button">Regístrate</button>
                    <span>o</span>
                    <button className="form-button-google">
                        Continuar con Google
                    </button>
                </form>
            </div>
        </div>
    );
};

// ################################ EXPORTS ################################
export default SignupScreen;

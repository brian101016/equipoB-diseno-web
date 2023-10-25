// ################################ IMPORTS ################################
import icon_logo from '@theme/images/logo-azul-vertical.png';
import { useState } from 'react';

// ################################ INTERFACES & PROPS ################################
// ForgotPassScreen => Rename all instances to use
type ForgotPassScreenProps = {};

// ################################ RENDERING COMPONENT ################################
const ForgotPassScreen = (props: ForgotPassScreenProps) => {
    const [email, setEmail] = useState('');

    const emailChange = (e) => {
        setEmail(e.target.value);
    };

    // Enviar nueva contraseña al email
    const setNewPassword = () => {};
    // ------------------------------------------------------------------------------------ RETURN
    return (
        <div className="forgotpass-screen">
            <div className="forgotpass-card">
                <div className="card-logo-forgopass">
                    <img src={icon_logo} alt="logo" />
                </div>
                <h2 className="forgotpass-title">
                    Buscar tu correo electrónico
                </h2>
                <p className="forgotpass-message">
                    ingresa tu correo de recuperación
                </p>
                <form className="card-form">
                    <input
                        className="card-form-input"
                        type="email"
                        placeholder="Correo electrónico"
                        value={email}
                        onChange={emailChange}
                    />
                    <button
                        className="forgotpass-form-button"
                        onClick={setNewPassword}
                    >
                        Continuar
                    </button>
                </form>
            </div>
        </div>
    );
};

// ################################ EXPORTS ################################
export default ForgotPassScreen;

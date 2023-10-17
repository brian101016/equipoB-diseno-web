import bg_login from '@theme/images/bg-login.jpeg';
import logo from '@theme/images/logo-vertical.png';
import ojo_on from '@theme/images/ojo-on.png';
import ojo_off from '@theme/images/ojo-off.png';
import mini_google from '@theme/images/Mini-google.png';

import { useState } from 'react';
import { setSourceMapRange } from 'typescript';

const Login = (props) => {
    //const [emailInput, setEmailInput] = useState();
    const [email, setEmail] = useState('');
    const [passVisible, setPassVisible] = useState(false);
    const [pass, setPass] = useState('');

    const emailChange = (e) => {
        setEmail(e.target.value);
    };
    const passChange = (e) => {
        setPass(e.target.value);
    };
    /**
     * Cambia el icono de mostrar o no mostrar contraseña
     * @param e "true" o "false"
     */
    const visiblePass = () => {
        setPassVisible(!passVisible);
        // funcion para mostrar la contraseña del input
    };

    return (
        <>
            <div className="center login-screen">
                <form id="form" className="login-form">
                    <img src={logo} alt="logotipo" />

                    <h2>Iniciar sesión en su cuenta</h2>

                    <input
                        className="input"
                        type="email"
                        placeholder="Correo electrónico"
                        value={email}
                        onChange={emailChange}
                    />

                    <div className="input-password">
                        <input
                            className="input"
                            type="password"
                            placeholder="Contraseña"
                            value={pass}
                            onChange={passChange}
                        />
                        <button
                            id="btnShowPass"
                            type="button"
                            onClick={visiblePass}
                        >
                            <img
                                id="btnIconEye"
                                src={passVisible ? ojo_on : ojo_off}
                                alt="icono ojo"
                            />
                        </button>
                    </div>

                    <div>
                        <input type="checkbox" />
                        <label htmlFor="">Recordarme</label>
                        <a href="#">Olvidaste tu contraseña</a>
                    </div>

                    <button className="button">Iniciar sesión</button>

                    <button className="button">Crear nueva cuenta</button>

                    <span> o </span>

                    <button className="button-google">
                        Iniciar sesion con google
                    </button>
                </form>
            </div>
        </>
    );
};

export default Login;

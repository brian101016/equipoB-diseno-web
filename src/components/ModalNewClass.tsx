import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { DB } from 'App';
import { Course } from '@utils/classes';
import { generateId } from 'scripts/scripts';
import { saveDB } from 'App';

const ModalNewClass = ({ estado, setEstado }) => {
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [clave, setClave] = useState('');
    const [color, setColor] = useState('');
    const [basedatos, setbasedatos] = useState(DB);

    const tituloChange = (e) => {
        setTitulo(e.target.value);
    };

    const descripcionChange = (e) => {
        setDescripcion(e.target.value);
    };

    const claveChange = (e) => {
        setClave(e.target.value);
    };

    const colorChange = (e) => {
        setColor(e.target.value);
    };

    const cambiarEstadoModalNC = () => {
        setEstado(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const crearCurso = () => {
        //Validaciones
        if (titulo === '') {
            window.alert('El titulo del curso es requerido');
            return;
        }

        if (descripcion === '') {
            window.alert('La descripción del curso es requerido');
            return;
        }

        if (clave === '') {
            window.alert('La descripción del curso es requerido');
            return;
        }

        // Creacion de objeto curso
        let newCurso = {
            id: generateId(8),
            teacherID: DB.currentUser?.id,
            title: titulo,
            desc: descripcion,
            subject: 'Campo de prueba',
            color: color,
            students: [],
            homeworks: [],
        };

        // Añadimos el curso
        DB.courses.push(new Course(newCurso));

        // Guardamos en local storage
        saveDB();

        //console.log(DB);

        // Limpiamos inputs
        setTitulo('');
        setDescripcion('');
        setColor('#000000');
        setClave('');

        // Salimos del modal
        setEstado(false);
    };

    return (
        <>
            {estado && (
                <Overlay>
                    <ModalContenido>
                        <h2>AGREGAR CLASE</h2>
                        <form
                            action=""
                            className="cm-form"
                            onSubmit={handleSubmit}
                        >
                            <label htmlFor="">Nombe de la clase:</label>
                            <input
                                type="text"
                                value={titulo}
                                onChange={tituloChange}
                            />
                            <label htmlFor="">Descripción de la clase:</label>
                            <input
                                type="text"
                                value={descripcion}
                                onChange={descripcionChange}
                            />
                            <label htmlFor="">Código de la clase:</label>
                            <input
                                type="text"
                                value={clave}
                                onChange={claveChange}
                            />
                            <label htmlFor="">Color de la clase:</label>
                            <input
                                type="color"
                                value={color}
                                onChange={colorChange}
                            />
                            <div className="cm-form-buttons">
                                <button
                                    className="cmf-button-aceptar"
                                    onClick={crearCurso}
                                >
                                    Aceptar
                                </button>
                                <button
                                    className="cmf-button-cancelar"
                                    onClick={cambiarEstadoModalNC}
                                >
                                    Cancelar
                                </button>
                            </div>
                        </form>
                    </ModalContenido>
                </Overlay>
            )}
        </>
    );
};

const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ModalContenido = styled.div`
    width: 660px;
    min-height: 647px;
    background-color: #fff;
    position: relative;
    border-radius: 28px;
    box-shadow: 12px 15px 15px 0px rgba(0, 0, 0, 0.25);
    padding: 20px;
    display: flex;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .cm-form {
        display: flex;
        flex-direction: column;
        font-family: Poppins;
        label {
            color: #000;
            font-size: 22px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            margin: 20px 0;
            text-align: center;
        }

        input {
            width: 352px;
            height: 60px;
            flex-shrink: 0;
            border-radius: 14px;
            background: #ebebeb;
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
            font-size: 16px;
            border-style: none;
            padding-left: 10px;
        }

        input[type='color'] {
            padding: 10px;
            border-radius: 0px;
        }

        .cm-form-buttons {
            margin-top: 35px;
            display: flex;
            justify-content: center;
            gap: 40px;
            button {
                display: flex;
                width: 138px;
                height: 41px;
                justify-content: center;
                align-items: center;
                flex-shrink: 0;
                border-radius: 20px;
                border-style: none;
                color: #fff;
                text-align: center;
                font-family: Poppins;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
            }

            .cmf-button-aceptar {
                background: #127ec2;
            }

            .cmf-button-aceptar:hover {
                background: #11669b;
            }

            .cmf-button-cancelar {
                background: #f90;
            }
            .cmf-button-cancelar:hover {
                background: #de8602;
            }
        }
    }
`;

export default ModalNewClass;

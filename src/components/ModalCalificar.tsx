import icon_user_blue from "@theme/images/icon-user-blue.png";
import { useState } from "react";
import { Button_Blue, BackgroundModal, Modal, CloseButton } from './StyledComponents';


export default function ModalCalificar({ isOpen, onClose, /*props*/ }) {
    const [tituloActity, setTituloActity] = useState("");
    const [selectOption, setSelectOption] = useState("A_Tiempo");
    const [rating, setRating] = useState(0);
    const maxRating = 5;

    const selectChange = (event) => {
        const selectV = event.target.value;
        setSelectOption(selectV);
    }



    const selectColorStyles = () => {
        switch (selectOption) {
            case "A_Tiempo":
                return {
                    border: "3px solid #EBFF00",
                    background: "#FFF",
                };
            case "Con_retardo":
                return {
                    border: "3px solid #2CA02C",
                    background: "#FFF",
                };

            case "Sin_entregar":
                return {
                    border: "3px solid #F00",
                    background: "#FFF",
                };
            default:
                return {};
        }
    }


    const StarMouseEnter = (hovRating) => {
        setRating(hovRating);
    };

    const starOnClick = (selectRating) => {
        setRating(selectRating);
    };

    const stars: JSX.Element[] = [];

    for (let i = 1; i <= maxRating; i++) {
        const starClass = i <= rating ? 'star filled' : 'star';

        stars.push(
            <span
                key={i}
                className={starClass}
                onMouseEnter={() => StarMouseEnter(i)}
                onClick={() => starOnClick(i)}
            >
                ★
            </span>
        );
    }

    const saveQualify = () => {
        onClose();
    }

    return (
        <>
            {isOpen && (
                <BackgroundModal>
                    <Modal >
                        <CloseButton onClick={onClose}>x</CloseButton>
                        <div className="modalEstilo">
                            <div className="modalActity">
                                <h2 className="textBlue">Actividad 12</h2>
                                <div className="minLinea"></div>
                                <h2 className="textGrey">Practica web</h2>
                            </div>
                            <div className="maxLinea"></div>
                            <div className="textNF">
                                <h3 className="textGrey">De</h3>
                                <h3 className="textBlue">Javier Manjarrez</h3>
                                <img src={icon_user_blue} alt="logo" />
                                <div className="textP">
                                    <p className="textGrey">Entregado el</p>
                                    <p className="textBlue">18/10/2023</p>
                                    <p className="textGrey">a las</p>
                                    <p className="textBlue">00:02am</p>
                                </div>
                            </div>
                            <select name="selectEnt" className="selectRad" value={selectOption} onChange={selectChange} style={selectColorStyles()}>
                                <option value="A_Tiempo">A tiempo</option>
                                <option value="Con_retardo">Con retardo</option>
                                <option value="Sin_entregar">Sin entregar</option>
                            </select>
                            <div className="comentarioEstilo">
                                <h3>Comentario del alumno:</h3>
                                <textarea name="comt" className="commentArea">Ej: Adjunto la actividad 12 correspondiente a la practica de algoritmo. Tuve algunas dudas que me gustaría resolver en la siguiente sesión de asesoría.</textarea>
                                <div className="maxLinea2"></div>
                                <div className="califica">
                                    <h3>Califica el trabajo de </h3>
                                    <h3>Javer:</h3>
                                </div>
                                <div className="star-rating" >
                                    {stars}
                                </div>
                                <h3>Retroalimentacion para el alumno:</h3>
                                <textarea className="commentArea">Ej: En terminos generales tu trabajo cumple con lo pedido en la indicación, aunque debo mencionar que te faltó comentar tu código. Con gusto lo vemos en asesorías.</textarea>
                            </div>
                            <div className="buttonGuardar">
                                <Button_Blue className="btnGuardar" onClick={saveQualify}><p>Guardar</p></Button_Blue>
                            </div>
                        </div>
                    </Modal>
                </BackgroundModal>
            )}
        </>
    )
}
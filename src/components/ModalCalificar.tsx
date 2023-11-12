import ImageProvider from "@utils/ImageProvider";
import { useState } from "react";
import {
    ButtonBlue,
    BackgroundModal,
    Modal,
    CloseButton,
} from "./StyledComponents";

export default function ModalCalificar() {
    const [selectOption, setSelectOption] = useState("A_Tiempo");
    const [isOpen, setIsOpen] = useState(false);
    const [rating, setRating] = useState(0);
    const maxRating = 5;

    const selectChange = (event) => {
        const selectV = event.target.value;
        setSelectOption(selectV);
    };

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
    };

    const StarMouseEnter = (hovRating) => {
        setRating(hovRating);
    };

    const starOnClick = (selectRating) => {
        setRating(selectRating);
    };

    const stars: JSX.Element[] = [];

    for (let i = 1; i <= maxRating; i++) {
        const starClass = i <= rating ? "star filled" : "star";

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
        setIsOpen(false);
    };

    return (
        <>
            <button onClick={() => setIsOpen(true)}>Abrir modal</button>

            {isOpen && (
                <BackgroundModal>
                    <Modal>
                        <CloseButton onClick={() => setIsOpen(false)}>x</CloseButton>
                        <div className="modalEstilo">
                            <div className="modalActity">
                                <h2 className="textBlue">Actividad 12</h2>
                                <div className="minLinea"></div>
                                <h2 className="textGrey">Practica web</h2>
                            </div>
                            <div className="maxLinea"></div>
                            <div className="textNF">
                                <div className="nameImage">
                                    <h3>
                                        <span style={{ color: '#888' }}>De </span>
                                        <span style={{ color: '#127EC2' }}>Javier Manjarrez</span>
                                    </h3>
                                    <img src={ImageProvider.icon.user_blue} alt="logo" />
                                </div>
                                <div className="textP">
                                    <p>
                                        <span style={{ color: '#888' }}>Entregado el </span>
                                        <span style={{ color: '#127EC2' }}>18/10/2023 </span>
                                        <span style={{ color: '#888' }}>a las </span>
                                        <span style={{ color: '#127EC2' }}>00:02am</span>
                                    </p>
                                </div>
                            </div>
                            <div className="selectStyle">
                                <select
                                    name="selectEnt"
                                    className="selectRad"
                                    value={selectOption}
                                    onChange={selectChange}
                                    style={selectColorStyles()}
                                >
                                    <option value="A_Tiempo">A tiempo</option>
                                    <option value="Con_retardo">Con retardo</option>
                                    <option value="Sin_entregar">Sin entregar</option>
                                </select>
                            </div>
                            <div className="comentarioEstilo">
                                <h3>Comentario del alumno:</h3>
                                <textarea name="comt" className="commentArea">
                                    Ej: Adjunto la actividad 12 correspondiente a la practica de
                                    algoritmo. Tuve algunas dudas que me gustaría resolver en la
                                    siguiente sesión de asesoría.
                                </textarea>
                                <div className="maxLinea2"></div>
                                <div className="califica">
                                    <h3>Califica el trabajo de </h3>
                                    <h3>Javer:</h3>
                                </div>
                                <div className="star-rating">{stars}</div>
                                <h3>Retroalimentacion para el alumno:</h3>
                                <textarea className="commentArea">
                                    Ej: En terminos generales tu trabajo cumple con lo pedido en
                                    la indicación, aunque debo mencionar que te faltó comentar tu
                                    código. Con gusto lo vemos en asesorías.
                                </textarea>
                            </div>
                            <div className="buttonGuardar">
                                <ButtonBlue className="btnGuardar" onClick={saveQualify}>
                                    <p>Guardar</p>
                                </ButtonBlue>
                            </div>
                        </div>
                    </Modal>
                </BackgroundModal>
            )}
        </>
    );
}
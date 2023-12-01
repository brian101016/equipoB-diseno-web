import ImageProvider from "@utils/ImageProvider";
import { useState } from "react";
import {
    ButtonBlue,
    BackgroundModal,
    Modal,
    CloseButton,
} from "./StyledComponents";
import PropTypes from 'prop-types';
import { DB } from 'App';

ModalCalificar.propTypes = {
    actividadId: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired,
    score: PropTypes.number,
};

export default function ModalCalificar({ actividadId, userName, title, comments, student, score: initialScore, date }) {
    const [isOpen, setIsOpen] = useState(false);
    const [score, setScore] = useState(initialScore || 0);

    const updateData = (studentId, actividadId, newScore, teacherComment) => {
        console.log('Actualiza datos:', studentId, actividadId, newScore);

        DB.courses.forEach(course => {
            const homework = course.homeworks.find(hw => hw.id === actividadId);
            if (homework) {
                const submission = homework.submissions.find(sub => sub.authorID === studentId);
                if (submission) {
                    submission.score = newScore;
                    submission.comment = teacherComment;
                }
            }

        });
        console.log('Actualiza datos:', DB);

    };



    const saveData = () => {
        updateData(student.id, actividadId, score, teacherComment);
        setIsOpen(false);
    };



    //Comentarios del alumno
    const studentCommentsAl = comments.filter(content => content.authorID === student.id);
    const studentCommentContentAL = studentCommentsAl.length > 0 ? studentCommentsAl[0].content : 'Sin descripcion';

    //Comentario del profe
    const studentCommentsPF = comments.filter(comment => comment.authorID === student.id);
    const studentCommentContentPF = studentCommentsPF.length > 0 ? studentCommentsPF[0].comment : 'Sin descripcion';

    const [teacherComment, setTeacherComment] = useState(studentCommentContentPF);


    return (
        <>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer' }} onClick={() => setIsOpen(true)}>
                <img src={ImageProvider.icon.calificar_mini} alt="calificar" />
            </button>

            {isOpen && (
                <BackgroundModal>
                    <Modal>
                        <CloseButton onClick={() => setIsOpen(false)}>x</CloseButton>
                        <div className="modalEstilo" style={{ padding: '30px' }}>
                            <div className="modalActity">
                                <h2 className="textBlue">Actividad {parseInt(actividadId) || 0}</h2>
                                <div className="minLinea"></div>
                                <h2 className="textGrey">{title}</h2>
                            </div>
                            <div className="maxLinea"></div>
                            <div className="textNF">
                                <div className="nameImage">
                                    <h3>
                                        <span style={{ color: '#888' }}>De </span>
                                        <span style={{ color: '#127EC2' }}>{userName}</span>
                                    </h3>
                                    <img src={ImageProvider.icon.user_blue} alt="logo" />
                                </div>
                                <div className="textP">
                                    <p>
                                        <span style={{ color: '#888' }}>Entregado el </span>
                                        <span style={{ color: '#127EC2' }}>{date} </span>
                                    </p>
                                </div>
                            </div>

                            <div className="comentarioEstilo">
                                <h3>Comentario del alumno:</h3>
                                <textarea name="comt" className="commentArea" value={studentCommentContentAL}></textarea>
                                <div className="maxLinea2"></div>
                                <div className="califica">
                                    <h3>Califica el trabajo de {userName}:</h3>
                                </div>
                                {score !== null && (
                                    <div className="score">
                                        <input
                                            className="inputScore"
                                            type="text"
                                            value={score}
                                            onChange={(e) => {
                                                const parsedValue = parseInt(e.target.value);
                                                if (e.target.value.trim() === "") {
                                                    setScore(0);
                                                } else if (!isNaN(parsedValue)) {
                                                    setScore(parsedValue);
                                                }
                                            }}
                                            min={0}
                                            max={100}
                                        />
                                    </div>
                                )}
                                <h3>Retroalimentacion para el alumno:</h3>
                                <textarea
                                    className="commentArea"
                                    value={teacherComment}
                                    onChange={(e) => setTeacherComment(e.target.value)}
                                ></textarea>
                            </div>
                            <div className="buttonGuardar">
                                <ButtonBlue className="btnGuardar" onClick={saveData}>
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
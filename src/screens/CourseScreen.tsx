// ################################ IMPORTS ################################
import RowList from '@components/RowList';
import ImageProvider from '@utils/ImageProvider';
import { Course } from 'utils/classes';
import styled, { css } from 'styled-components';
import ProgressChart from '@components/ProgressChart';
import { useState, useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { DB } from 'App';


// ################################ INTERFACES & PROPS ################################
type _Base = import('utils/classes').Base;
// CourseScreen => Rename all instances to use

// Temporales para test de estilos
type CourseScreenProps = {
    className?: string;
    styles?: null;
    title?: string;
    author?: string;
    Description?: string;
    homeworks?: [{}];
} & _Base;

const listaDeTareas = [
    {
        na: 1,
        ti: 'Introduccion a pociones',
        fe: '17/12/2023',
        ho: '20:30:00',
        ca: 60,
    },
    {
        na: 2,
        ti: 'Ingredientes para pociones',
        fe: '04/12/2024',
        ho: '18:30:00',
        ca: 60,
    },
    {
        na: 3,
        ti: 'Métodologia a creacion de pociones',
        fe: '04/12/2023',
        ho: '12:30:00',
        ca: 60,
    },
    {
        na: 4,
        ti: 'Pocion cambiaformas',
        fe: '05/12/2023',
        ho: '14:30:00',
        ca: 60,
    },
    { na: 5, ti: 'Pocion de amor', fe: '10/11/2023', ho: '20:30:00', ca: 60 },
];


// ################################ RENDERING COMPONENT ################################
const _CourseScreen = (props: CourseScreenProps) => {
    //const [lts, setLts] = useState([{}]);
    const descriptionSeverus =
        'Bienvenidos a la clase de Pociones. Soy el profesor Severus Snape, y no estoy aquí para complacer sus caprichos o entretener sus fantasías infantiles. En este curso, exploraremos el vasto y delicado arte de la preparación de pociones. No toleraré la mediocridad ni los intentos negligentes. Cualquier estudiante que se atreva a cuestionar mi autoridad o subestimar la importancia de esta asignatura sufrirá las consecuencias.';
    let avance = 50;

    const { classid } = useParams();
    const [classNotFound, setClassNotFound] = useState(false);

    useEffect(() => {
        const fetchClassNotFound = async () => {
            try {
                const course = DB.courses.find((c) => c.id === classid);

                if (!course) {
                    throw new Response("No encontrado", {
                        status: 404,
                        statusText: "Clase no encontrada",
                    });
                }

            } catch (error) {
                console.error(error);
                setClassNotFound(true);
            }
        };

        fetchClassNotFound();
    }, [classid]);

    if (classNotFound) {
        return <Navigate to="/not-found" />;
    }

    const course = DB.courses.find((c) => c.id === classid);

    // ------------------------------------------------------------------------------------ RETURN
    return (
        <div className={props.className}>
            <div className="container-title" style={{backgroundColor: course?.color}}>
                <h1 className="class-title">
                    {course ? course.title : 'Pociones mágicas'}
                </h1>
                <div className="class-author">
                    <p className="p">Por</p>
                    <p className="name">
                        {course ? course.teacherID : 'Severus Snape'}
                    </p>
                    <img
                        src={ImageProvider.icon.user_gray}
                        alt="icono maestro"
                        className="foto"
                    />
                </div>
            </div>
            <div className="container-description">
                <h2 className="d">Descripción del curso</h2>
                <p className="p">
                    {course ? course.desc : descriptionSeverus}
                </p>
            </div>
            <div className="container-icons">
                <div className="icon">
                    <p>Avisos</p>
                    <img
                        src={ImageProvider.clase.icon_avisos}
                        alt="icono de aviso"
                    />
                </div>
                <div className="icon">
                    <p>Correo</p>
                    <img
                        src={ImageProvider.clase.icon_correo}
                        alt="icono de correo eléctronico"
                    />
                </div>
                <div className="icon">
                    <p>Alumnos</p>
                    <img
                        src={ImageProvider.clase.icon_alumnos}
                        alt="icono de alumnos"
                    />
                </div>
            </div>
            <div className="container-progress">
                <h2>Progreso actual del curso</h2>
                <ProgressChart percentage={avance} className="prosChar" />
            </div>
            <div className="container-task">
                <h2 className="list-title">Actividades</h2>
                {
                    /* Lista de actividades  */
                    <div>
                        {listaDeTareas.map((nel, index, g) => {
                            return (
                                <RowList
                                    numActivity={g[index].na}
                                    titulo={g[index].ti}
                                    fecha={g[index].fe}
                                    hora={g[index].ho}
                                    calificacion={g[index].ca}
                                />
                            );
                        })}
                    </div>
                }
            </div>
        </div>
    );
};

// ################################ STYLES ################################
const CourseScreen = styled(_CourseScreen) <CourseScreenProps>`
    ${(props) => css`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 5%;

        .container-title {
            margin-top: 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 300px;
            width: 100%;
            background-image: url(${ImageProvider.clase.bg_class_title});
            border-radius: 28px;

            .class-title {
                color: #fff9f9;
                font-family: Bebas Neue;
                font-size: 100px;
                font-weight: 400;
                height: auto;
            }

            .class-author {
                display: flex;
                font-size: 20px;
                align-items: center;
                .p {
                    font-family: Poppins;
                    color: #ffffff;
                    font-weight: 100;
                    margin-right: 10px;
                }
                .name {
                    font-family: Poppins;
                    color: #ffffff;
                    font-weight: 700;
                }
                .foto {
                    margin-left: 5px;
                    width: 26px;
                    height: 26px;
                }
            }
        }
        .container-description {
            margin: 36px 0;
            padding: 0 100px;
            .d {
                color: #000;
                font-family: Poppins;
                font-size: 26px;
                text-align: center;
                font-weight: 400;
            }
            .p {
                color: #494949;
                text-align: center;
                font-family: Poppins;
                font-size: 20px;
                font-weight: 400;
            }
        }
        .container-icons {
            display: flex;
            gap: 60px;
            .icon {
                text-align: center;
                p {
                    color: #3c3b3b;
                    font-family: Poppins;
                    font-size: 20px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                }
                img {
                    width: 90px;
                    height: 90px;
                }
            }
            margin-bottom: 36px;
        }
        .container-progress {
            margin-bottom: 36px;
            h2 {
                color: #494949;
                font-family: Poppins;
                font-size: 30px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                margin-bottom: 10px;
            }
        }
        .container-task {
            width: 100%;
            h2 {
                text-align: center;
                color: #494949;
                font-family: Poppins;
                font-size: 30px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                margin-bottom: 10px;
            }
        }
    `}
`;

// ################################ EXPORTS ################################
export default CourseScreen;

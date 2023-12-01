// ################################ IMPORTS ################################
import React, { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components";
import ImageProvider from "@utils/ImageProvider";
import { Link } from "react-router-dom";
import ModalCalificar from "@components/ModalCalificar";
import ImageTitle from "@components/ImageTitle";
import { Navigate, useParams } from 'react-router-dom';
import { DB } from 'App';


// ################################ INTERFACES & PROPS ################################
type _Base = import("utils/classes").Base;
// StudentScreen => Rename all instances to use
type StudentScreenProps = {
} & _Base;

// ################################ RENDERING COMPONENT ################################
const _StudentScreen = (props: StudentScreenProps) => {

  const { classid } = useParams();
  const currentUser = DB.currentUser;

  // ################################ SELECT NAME #####################################
  // -------------Controla menú desplegable y  cambia nombre seleccionada. -------------
  const [openName, setOpenName] = useState(false);
  const [selectName, setSelectName] = useState("Nombre");
  const [, setCloseName] = useState(false);

  const NameDropDown = () => {
    console.log('Name dropdown clicked');
    setOpenName(!openName);
    setCloseName(false);
    if (!openName) {
      setOpenActivity(false);
    }
  };

  const selectOptionName = (option) => {
    setSelectName(option);
    setOpenName(false);
  };

  // ################################ SELECT ACTIVITY #####################################
  // ------------- Controla menú desplegable y  cambia actividad seleccionada. -------------
  const [openActivity, setOpenActivity] = useState(false);
  const [selectActivity, setSelectActivity] = useState("Actividad");
  const [, setCloseActivity] = useState(false);

  const ActivityDropDown = () => {
    setOpenActivity(!openActivity);
    setCloseActivity(false);
    if (!openActivity) {
      setOpenName(false);
    }
  };

  const selectOptionActivity = (option) => {
    setSelectActivity(option);
    setOpenActivity(false);
  };

  // ######################################### HOVER ############################################
  const [, setOffHover] = useState(false);

  const handleMouseEnterCalificar = () => {
    setOffHover(true);
  }

  const handleMouseLeaveCalificar = () => {
    setOffHover(false);
  }

  // #################################### CONDITIONALSTYLE ######################################

  const getStatus = (dueDate, submissions) => {
    const currentDate = new Date();
    const submission = submissions.find((sub) => sub.authorID === selectNameId);

    if (!submission) {
      if (dueDate < currentDate) {
        return { status: 'Sin_entregar', text: 'No entregado' };
      } else {
        return { status: 'En_espera', text: 'En espera' };
      }
    } else {
      return { status: 'Entregado', text: 'Entregado' };
    }
  };

  // ######################### Función para formatear la fecha ######################################
  const formatDate = (dueDate) => {
    const dateObj = new Date(dueDate);
    const day = dateObj.getDate() + 1;
    const month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear();

    const formatDay = day < 10 ? `0${day}` : day;
    const formatMonth = month < 10 ? `0${month}` : month;

    return `${formatDay}-${formatMonth}-${year}`;
  };

  // -------------------------------- boton de todas las listas ------------------------------------
  const [, setAllList] = useState(true);

  const resetSelect = () => {
    setSelectName("Nombre");
    setSelectActivity("Actividad");
    setAllList(true);
  };

  // -------------------------------- Nombre del alumno y actividades ------------------------------------
  const teacherIDs = DB.courses.map((course) => course.teacherID);

  const nameOptions = DB.users
    .filter((user) => !teacherIDs.includes(user.id))
    .map((user) => user.name);

  const activityOptions = DB.courses
    .flatMap((course) =>
      course.homeworks.map((homework) => homework.title)
    )
    .filter((title, index, self) => self.indexOf(title) === index);
  // ----------------------------- selección de elementos en la lista. ------------------------------------
  const [selectNameId, setSelectNameId] = useState(null);
  const [selectedActivityId, setSelectedActivityId] = useState(null);
  const [, setDisableClick] = useState(false);


  // ----------------------------- Select Nombre y Actividad. ------------------------------------

  const menuDesplz = (studentId, activityId) => {
    if (studentId === selectNameId && activityId === selectedActivityId) {
      setSelectNameId(null);
      setSelectedActivityId(null);
      setDisableClick(true);
    } else {
      setSelectNameId(studentId);
      setSelectedActivityId(activityId);
      setDisableClick(false);
    }
  };

  // -------------------------------------------- El código abre un modal al hacer clic. --------------------------
  const [, setIsModalOpen] = useState(false);

  const handleClick = (studentId, activityId) => {

    setIsModalOpen(true);
  };

  // ----------------------------- Filitro nombre del alumno y actividades ------------------------------------
  const filitro = DB.courses.flatMap((course) =>
    course.students.flatMap((studentId) => {
      const student = DB.users.find((user) => user.id === studentId);
      if (student) {
        const filitroHomeworks = course.homeworks.filter((homework) => {
          return (
            selectActivity === "Actividad" ||
            homework.title === selectActivity
          );
        });

        if (selectName === "Nombre" || student.name === selectName) {
          return { ...student, homeworks: filitroHomeworks };
        }
      }
      return null;
    })
  );


  // ----------------------------- Validacion de permisos de usuario  -----------------------------------------
  if (!classid || !currentUser || !DB.courses.some((course) => course.id === classid && course.teacherID === currentUser.id)) {
    return <Navigate to={`/class/${classid}`} />;
  }

  // ------------------------------------------------------------------------------------ RETURN
  return (
    <>
      <div className={props.className}>
        <div className="container">
          <body>
            <div className="imageTitle">
              <ImageTitle title="Diseño web" bgColor="#d6d442" />
            </div>
            <div className="wrapper">
              <div className="filitroBg">
                <div className="cardFilitro">
                  <div className="justifySelect">
                  </div>
                  <div className="filiros">
                    <label>Nombre del alumno</label>
                    <div id="selectsOption" className="customSelect">
                      <div className="selectHeader" onClick={NameDropDown}>
                        <div className="selectedOption">{selectName}</div>
                        <div
                          className={!openName ? "arrowIcon" : "arrowIcon active"}
                        ></div>
                      </div>
                      {openName && (
                        <div className="optionList">
                          {nameOptions.map((option, index) => (
                            <div
                              className="optionItem"
                              key={index}
                              onClick={() => selectOptionName(option)}
                            >
                              {option}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <hr />
                  <div className="filiros">
                    <label>Nombre del actividad</label>
                    <div className="customSelect">
                      <div className="selectHeader" onClick={ActivityDropDown}>
                        <div className="selectedOption">{selectActivity}</div>
                        <div
                          className={!openActivity ? "arrowIcon" : "arrowIcon active"}
                        ></div>
                      </div>
                      {openActivity && (
                        <div className="optionList">
                          {activityOptions.map((option, index) => (
                            <div
                              className="optionItem"
                              key={index}
                              onClick={() => selectOptionActivity(option)}
                            >
                              {option}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <hr />
                  <div className="limpiar">
                    <button className="limpiarLaslistas" onClick={resetSelect}>
                      Todas las listas
                    </button>
                  </div>
                </div>
              </div>
              <div className="divTable">
                <table className="tablaAlumnos">
                  <thead>
                    <tr>
                      <th className="arrowT"></th>
                      <th>ACTIVIDADES / ALUMNO</th>
                      <th>ENTREGA</th>
                      <th>RESPUESTA</th>
                      <th>ESTATUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filitro.map((student) =>
                      student?.homeworks.map((activity) => (
                        <React.Fragment key={activity.id}>
                          <tr onClick={() => handleClick(student.id, activity.id)}>
                            <td className="tdArrow" onClick={() => menuDesplz(student.id, activity.id)}>
                              <div className={`arrowText ${student.id === selectNameId && activity.id === selectedActivityId ? "active" : ""}`}>
                                <div className={`arrowIconIzq ${student.id === selectNameId && activity.id === selectedActivityId ? "active" : ""}`}></div>
                              </div>
                            </td>
                            <td className="tdActAlum">
                              <div className="radBox">
                                <p className="textB">
                                  {student.name}
                                </p>
                                <div className="minLinea"></div>
                                <p className="textG">Actividad {parseInt(activity.id) || 0} {activity.title}</p>
                              </div>
                            </td>
                            <td className="tdDate">
                              <div className="radBox">
                                <img className="iconCalender" src={ImageProvider.icon.calendar_mini} alt="calendario" />
                                <p>{formatDate(activity.dueDate)}</p>
                              </div>
                            </td>
                            <td className="tdCalificar">
                              <div className="radBox">
                                <Link className="iconCalificar"
                                  to={""}
                                  onMouseEnter={handleMouseEnterCalificar}
                                  onMouseLeave={handleMouseLeaveCalificar}>
                                  <ModalCalificar
                                    actividadId={activity.id}
                                    userName={student.name}
                                    title={activity.title}
                                    comments={activity.submissions}
                                    student={student}
                                    score={activity.submissions.find(sub => sub.authorID === student.id)?.score || 0}
                                    date={activity.dueDate}
                                  />
                                </Link>
                              </div>
                            </td>
                            <td className="tdEstatus">
                              <div className="radBox">
                                <div className={`conditionStyle ${getStatus(activity.dueDate, activity.submissions).status}`}>
                                  <p>{getStatus(activity.dueDate, activity.submissions).text}</p>
                                </div>
                              </div>
                            </td>
                          </tr>
                          {selectNameId === student.id && selectedActivityId === activity.id && (
                            <tr>
                              <td className="menuBox" colSpan={5}>
                                <p className={`activityDescription ${student.id === selectNameId && activity.id === selectedActivityId ? "active" : ""}`}>
                                  <div className="positionDesc">{activity.desc}</div>
                                </p>
                              </td>
                            </tr>
                          )}
                        </React.Fragment>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </body>
        </div>
      </div>
    </>
  );
};

// ################################ STYLES ################################
const StudentScreen = styled(_StudentScreen) <StudentScreenProps>`
  

  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  width: 100%;


  @media screen and (max-width: 815px) {
    width: 800px;
  }

}

.imageTitle{
  margin-top: 15px;
}

.image-class {
  height: 150px;
  width: 95%;
  border-radius: 30px;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  h1 {
    text-align: center;
    color: #127ec2;
    margin-top: 3rem;
  }

  @media screen and (max-width: 815px) {
    .image-class {
      height: auto;
      width: 100%;
    }
  }

}

.wrapper {
  display: flex;
  justify-content: center;
  margin-left: 30px;

  @media screen and (max-width: 1198px) {
    display: block;
  }
}

.filitroBg {
  height: auto;
  background: rgba(217, 217, 217, 0.39);
  margin-top: 30px;
  border-radius: 20px;

  @media screen and (min-width: 1200px) {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .cardFilitro {
    padding: 40px;

    .justifySelect {
      align-items: center;
    }

    .filiros {
      display: flex;
      justify-content: space-between;
      margin-left: 7px;

      @media screen and (max-width: 1198px) {
        align-items: center;
        gap: -40px;
      }

      label {
        color: #127ec2;
        font-family: "Poppins", sans-serif;
        font-size: 1.0rem;
      }

      .customSelect {
        width: 10rem;
        position: relative;

        @media screen and (max-width: 425px) {
          width: auto;
        }

        .selectHeader {
          border: 1px solid #127ec2;
          padding: 10px 10px;
          display: flex;
          justify-content: space-between;
          box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
          cursor: pointer;
          overflow: hidden;
          display: flex;
          align-items: center;

          .selectedOption {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 80%;
            color: #127ec2;
            font-family: "Poppins", sans-serif;
            font-size: 0.9rem;
          }

          .arrowIcon {
            width: 0;
            height: 0;
            border: 7px solid transparent;
            margin-top: 0.7rem;
            border-color: #127ec2 transparent transparent transparent;
            transform: matrix(1, 0, 0, 2, 0, 0);
            transition: transform 0.3s ease-in-out;

            &.active {
              transform: matrix(1, 0, 0, -2, 0, -12);
            }
          }
        }

        .optionList {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background-color: #dfdfdf;
          z-index: 99;
          display: none;

          .optionItem {
            color: #127ec2;
            padding: 10px;
            border: 1px solid transparent;
            border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
            cursor: pointer;

            &:hover {
              background-color: #127ec2;
              color: white;
            }
          }
        }

        .optionList {
          display: block;
        }
      }
    }

    .limpiar {
      display: flex;
      justify-content: center;

      @media screen and (max-width: 1198px) {
        align-items: center;

      }

      .limpiarLaslistas {
        border-radius: 10px;
        font-size: 1.3rem;
        height: 3rem;
        width: 20rem;
        cursor: pointer;
        color: #fff;
        background-color: #127ec2;
        border: none;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);


        &:hover {
          background-color: #1b4864;
        }

        &:active {
          background-color: #0d2e42;
          transform: translateY(2px);
        }
      }
    }

    hr {
      border: none;
      margin-top: 4rem;

    }
  }
}

.divTable {
  height: 100px;
  box-sizing: border-box;

  @media screen and (min-width: 1200px) {
    flex: 0 0 75%;
    max-width: 75%;
  }
}


.textoStyle {
  align-items: center;
  position: relative;
  padding: 20px;
  cursor: pointer;

  &:hover {
    background-color: #6779871b;

    &.noHover {
      background-color: transparent;
    }
  }

  &:active {
    background-color: #61798d31;
    transform: translateY(2px);

    &.noHover {
      transform: none;
    }
  }

}

.tablaAlumnos {
  margin: 0 auto;
  border-collapse: collapse;
  border-radius: 20px;
  background: rgba(217, 217, 217, 0.39);
  width: 95%;
  margin-top: 30px;

  .arrowT {
    width: 20px;
  }


  th,
  td {
    padding: 10px;
    text-align: center;
  }

  th {
    font-family: "Poppins", sans-serif;
  }


  .tabla {
    margin: 20px 0;
  }


  .tdArrow {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 6rem;
    height: 8rem;

    .arrowIconIzq {
      width: 0;
      height: 0;
      border: 13px solid transparent;
      border-color: #127ec2 transparent transparent transparent;
      transform: matrix(0, -1, 2, 0, 9, -4);
      transition: transform 0.3s ease-in-out;

      &.active {
        transform: matrix(1, 0, 0, 2, 0, 0);
      }
    }
  }

  .tdActAlum {
    width: auto;

    .radBox {
      background: rgba(217, 217, 217, 0.43);
      border-radius: 30px;
      display: flex;
      justify-content: start;
      align-items: center;
      height: 70px;
      padding-left: 18px;

      .textB {
        color: #127ec2;
        font-size: 1rem;
        font-family: "Poppins", sans-serif;
        font-weight: 500;

        @media screen and (max-width: 425px) {
          font-size: 1.2rem;
        }
      }

      .minLinea {
        border-top: 4px solid #6c6b6b;
        width: 1rem;
        margin: 0 10px;
      }

      .textG {
        color: #6c6b6b;
        font-size: 1rem;
        font-family: "Poppins", sans-serif;
        font-weight: 500;

        @media screen and (max-width: 425px) {
          font-size: 1.2rem;
        }
      }
    }

    .activityDescription {
      display: none;

      .positionDesc {
        margin-left: 3rem;
        font-family: "Poppins", sans-serif;
        font-size: 1.3rem;
      }

      &.active {
        display: block;
      }
    }
  }

  .tdDate {
    width: 15rem;

    .radBox {
      background: rgba(217, 217, 217, 0.43);
      border-radius: 30px;
      height: 70px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.8rem;
      font-size: 1rem;

      p {
        color: #127ec2;
      }

      .iconCalender {
        width: 1rem;
        height: 1.2rem;
      }
    }
  }

  .tdCalificar {
    .radBox {
      background: rgba(217, 217, 217, 0.43);
      border-radius: 30px;
      height: 70px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.8rem;
      font-size: 1.2rem;
    }
  }

  .tdEstatus {
  width: 13%;

  .radBox {
      border-radius: 30px;
      height: 70px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.2rem;

    .conditionStyle {
      border-radius: 2rem;
        padding: 0.6rem;

      &.Sin_entregar {
        border: 3px solid red;
        p{
          color: red;
        }
      }

      &.Entregado {
        border: 3px solid green;
        p{
          color: green;
        }
      }

      &.En_espera {
        border: 3px solid #d99008;
        p{
          color: #d99008;
        }
      }
    }
  }
}


  @media screen and (max-width: 425px) {
    .tdEstatus .radBox .conditionStyle {
      width: 50px;
      height: 50px;
      border: 4px solid green;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .tdEstatus .radBox .conditionStyle p {
      display: none;
    }

    .tdEstatus .radBox .conditionStyle::before {
      content: 'E';
      color: green;
      font-size: 1.7rem;
      font-family: "Poppins", sans-serif;
      font-weight: 700;
    }
  }

  .menuBox {
    background: rgba(217, 217, 217, 0.43);
    border-radius: 30px;
    height: 70px;
    width: auto;
  }
}
  
  `;

// ################################ EXPORTS ################################
export default StudentScreen;

import Navbar from "@components/NavBar";
import mini_icono_calender from "@theme/images/mini-icono-calender.png";
import mini_icono_calificar from "@theme/images/mini-icono-calificar.png";

// ################################ INTERFACES & PROPS ################################

import { useParams } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

type StudentScreenProps = {
  className: string;
};

// ################################ RENDERING COMPONENT ################################
const _StudentScreen = (props: StudentScreenProps) => {
  const { classid, studentid } = useParams();

  // ################################ SELECT NAME #####################################
  // -------------Controla menú desplegable y  cambia nombre seleccionada. -------------
  const [openName, setOpenName] = useState(false);
  const [selectName, setSelectName] = useState("Nombre");
  const [closeName, setCloseName] = useState(false);

  const NameDropDown = () => {
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
  const [closeActivity, setCloseActivity] = useState(false);

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

  // #################################### CONDITIONALSTYLE ######################################

  //.......
  //.......
  //.......

  // ########################################## TIME ############################################

  //.......
  //.......
  //.......

  // ################################ LIST NAME AND ACTIVITY #####################################

  // -------------------------------- Datos de nombre del alumno y actividades ------------------------------------
  const listData = {
    students: [
      {
        id: 1,
        name: "Luis Enriquez",
        activities: [
          {
            id: 1,
            nameActivity: "Actividad 1 mapa mental",
            description: "Descripción de la actividad 1",
          },
          {
            id: 2,
            nameActivity: "Actividad 2 presentación",
            description: "Descripción de la actividad 2",
          },
        ],
      },
      {
        id: 2,
        name: "Otro Estudiante",
        activities: [
          {
            id: 1,
            nameActivity: "Actividad 1 mapa mental",
            description: "Descripción de la actividad 1",
          },
          {
            id: 2,
            nameActivity: "Actividad 2 presentación",
            description: "Descripción de la actividad 2",
          },
        ],
      },
      {
        id: 3,
        name: "Alex",
        activities: [
          {
            id: 1,
            nameActivity: "Actividad 1 mapa mental",
            description: "Descripción de la actividad 1",
          },
          {
            id: 2,
            nameActivity: "Actividad 2 presentación",
            description: "Descripción de la actividad 2",
          },
        ],
      },
      {
        id: 4,
        name: "Juan Pablo",
        activities: [
          {
            id: 1,
            nameActivity: "Actividad 1 mapa mental",
            description: "Descripción de la actividad 1",
          },
          {
            id: 2,
            nameActivity: "Actividad 2 presentación",
            description: "Descripción de la actividad 2",
          },
        ],
      },
    ],
  };

  // -------------------------------- boton de todas las listas ------------------------------------
  const [AllList, setAllList] = useState(true);

  const resetSelect = () => {
    setSelectName("Nombre");
    setSelectActivity("Actividad");
    setAllList(true);
  };

  // -------------------------------- Nombre del alumno y actividades ------------------------------------
  const nameOptions = listData.students.map((result) => result.name);
  const activityOptions = listData.students
    .flatMap((student) =>
      student.activities.map((activity) => activity.nameActivity)
    )
    .filter((name, index, self) => self.indexOf(name) === index);

  // ----------------------------- selección de elementos en la lista. ------------------------------------
  const [selectNameId, setSelectNameId] = useState(null);
  const [selectedActivityId, setSelectedActivityId] = useState(null);
  const [disableClick, setDisableClick] = useState(false);

  const menuDesplz = (studentId, activityId) => {
    if (studentId === selectNameId && activityId === selectedActivityId) {
      setSelectNameId(null);
      setSelectedActivityId(null);
      setDisableClick(false);
    } else {
      setSelectNameId(studentId);
      setSelectedActivityId(activityId);
      setDisableClick(true);
    }
  };

  // ----------------------------- Filitro nombre del alumno y actividades ------------------------------------
  const filitro = listData.students.map((student) => {
    const filitroActivities = student.activities.filter((activity) => {
      return (
        selectActivity === "Actividad" ||
        activity.nameActivity === selectActivity
      );
    });

    if (selectName === "Nombre" || student.name === selectName) {
      return { ...student, activities: filitroActivities };
    } else {
      return { ...student, activities: [] };
    }
  });

  // ------------------------------------------------------------------------------------ RETURN
  return (
    <div className={props.className}>
      <Navbar />
      <h1>Diseño web</h1>
      <div className="justifySelect">
        <div id="selectsOption" className="customSelect">
          <div className="selectHeader" onClick={NameDropDown}>
            <div className="selectedOption">{selectName}</div>
            <div className={!openName ? "arrowIcon" : "arrowIcon active"}></div>
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
        <button className="limpiarLaslistas" onClick={resetSelect}>
          Todas las listas
        </button>
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
      <div className="listBox">
        {filitro.map((student) =>
          student.activities.map((activity) => (
            <div className={`textoStyle`} key={activity.id}>
              <div
                className="listNameAct"
                onClick={() => menuDesplz(student.id, activity.id)}
              >
                <div className="arrowText">
                  <div
                    className={`arrowIconIzq ${
                      student.id === selectNameId &&
                      activity.id === selectedActivityId
                        ? "active"
                        : ""
                    }`}
                  ></div>
                  <p className="textB">{student.name}</p>
                  <div className="minLinea"></div>
                  <p className="textG">{activity.nameActivity}</p>
                </div>
                <div className="conditionStyle">
                  <p>Entregado</p>
                </div>
              </div>
              <div className="Date">
                <img className="iconCalender" src={mini_icono_calender} />
                <p>01-11-2023: 23:59</p>
                <a className="iconCalificar">
                  <img src={mini_icono_calificar} />
                </a>
              </div>
              <p
                className={`activityDescription ${
                  student.id === selectNameId &&
                  activity.id === selectedActivityId
                    ? "active"
                    : ""
                }`}
              >
                <div className="positionDesc">{activity.description}</div>
              </p>
              <div
                className={`allListLinea ${
                  student.id === selectNameId &&
                  activity.id === selectedActivityId
                    ? "despzList"
                    : ""
                }`}
              ></div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

// ################################ STYLE ################################
const StudentScreen = styled(_StudentScreen)`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1 {
    text-align: center;
    color: #127ec2;
    margin-top: 3rem;
  }

  .justifySelect {
    display: flex;
    justify-content: space-evenly;
    margin-top: 2rem;
    align-items: center;

    @media screen and (max-width: 425px) {
      flex-direction: column;
      margin-top: 1rem;
      margin: 20px 20px;
      gap: 1rem;
    }

    .limpiarLaslistas {
      border-radius: 20px;
      padding: 0.7rem;
      font-size: 1rem;
      height: 3rem;
      background-color: #fff;
      cursor: pointer;
      color: #127ec2;
      border: 1px solid #127ec2;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

      &:hover {
        background-color: #6779871b;
      }

      &:active {
        background-color: #61798d31;
        transform: translateY(2px);
      }
    }
  }
  .customSelect {
    width: 12.5rem;
    position: relative;

    @media screen and (max-width: 425px) {
      width: auto;
    }

    .selectHeader {
      border: 1px solid #127ec2;
      padding: 20px 20px;
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
        font-size: 1.2rem;
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

  .listBox {
    border-radius: 12px;
    border: 1px solid #d3d3d3;
    background: #fff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    margin: 3rem;
    padding: 3rem 3rem;
    overflow: auto;
    max-height: 40rem;

    .activityDescription {
      display: none;

      .positionDesc {
        margin-top: 1rem;
        margin-left: 3rem;
        font-family: "Poppins", sans-serif;
        font-size: 1.3rem;
      }

      &.active {
        display: block;
      }
    }

    .textoStyle {
      align-items: center;
      position: relative;
      padding: 20px;
      cursor: pointer;

      &:hover {
        background-color: #6779871b;
      }

      &:active {
        background-color: #61798d31;
        transform: translateY(2px);
      }

      .arrowIconIzq {
        width: 0;
        height: 0;
        border: 7px solid transparent;
        margin-top: 0.7rem;
        border-color: #127ec2 transparent transparent transparent;
        transform: matrix(0, -1, 2, 0, 9, -4);
        transition: transform 0.3s ease-in-out;

        &.active {
          transform: matrix(1, 0, 0, 2, 0, 0);
        }
      }

      .listNameAct {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .arrowText {
          display: flex;
          align-items: center;
        }
      }

      .textB {
        color: #127ec2;
        margin-left: 1rem;
        font-size: 1.5rem;
        font-family: "Poppins", sans-serif;
        font-weight: 500;
      }

      .minLinea {
        border-top: 4px solid #6c6b6b;
        width: 1rem;
        margin: 0 10px;
      }

      .textG {
        color: #6c6b6b;
        font-size: 1.5rem;
        font-family: "Poppins", sans-serif;
        font-weight: 500;
      }

      .conditionStyle {
        border: 3px solid green;
        border-radius: 2rem;
        padding: 0.4rem;

        p {
          color: green;
          display: flex;
          font-family: "Poppins", sans-serif;
        }
      }

      .Date {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        font-size: 1.2rem;

        p {
          color: #127ec2;
        }

        .iconCalender {
          width: 0.7rem;
          height: 1rem;
        }

        .iconCalificar {
          &:hover {
            background-color: #6779871b;
          }

          &:active {
            background-color: #61798d31;
            transform: translateY(2px);
          }
        }
      }

      .allListLinea {
        border-bottom: 2px solid #127ec2;
        width: 100%;
        margin-top: 20px;
        transform: translateY(0);
        transition: transform 0.5s ease 0.1s, margin 0.5s ease 0.1s;

        &.despzList {
          transform: translateY(100px);
          margin: 0 0 6rem;
          opacity: 1;
        }
      }
    }
  }
`;

// ################################ EXPORTS ################################
export default StudentScreen;

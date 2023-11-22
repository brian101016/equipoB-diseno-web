// ################################ IMPORTS ################################
import ButtonClass from "@components/ButtonClass";
import ActivitiesExpire from "@components/ActivitiesExpire";
import ProgressBar from "@components/ProgressBar";
import styled, { css } from "styled-components";
import { generateColor } from "scripts/scripts";

// ################################ INTERFACES & PROPS ################################
type _Base = import("utils/classes").Base;
// HomeScreen => Rename all instances to use
type HomeScreenProps = {} & _Base;

// ################################ RENDERING COMPONENT ################################
const _HomeScreen = (props: HomeScreenProps) => {
  // ------------------------------------------------------------------------------------ RETURN
  return (
    <div className={props.className}>
      <div className="home-contenido">
        <div className="contenido-clases">
          <ButtonClass
            bgColor={generateColor()}
            title="Diseño Web"
            homework={
              <ActivitiesExpire
                actividad={4}
                titulo="Algoritmo"
                fecha="Hoy mero cabron apurale"></ActivitiesExpire>
            }
            teacherName="JESUS ALBERTO OJEDA SAUCEDO"
            progressBar={
              <ProgressBar percentage={50} isChart={false}></ProgressBar>
            }
          />
        </div>

        <div className="contenido-clases">
          <ButtonClass
            bgColor="#42d64e"
            title="Diseño Web"
            homework={
              <ActivitiesExpire
                actividad={4}
                titulo="Algoritmo"
                fecha="Hoy mero cabron apurale"></ActivitiesExpire>
            }
            teacherName="JESUS ALBERTO OJEDA SAUCEDO"
            progressBar={
              <ProgressBar percentage={50} isChart={false}></ProgressBar>
            }
          />
        </div>
        <div className="contenido-clases">
          <ButtonClass
            bgColor="#42c0d6"
            title="Diseño Web"
            homework={
              <ActivitiesExpire
                actividad={4}
                titulo="Algoritmo"
                fecha="Hoy mero cabron apurale"></ActivitiesExpire>
            }
            teacherName="JESUS ALBERTO OJEDA SAUCEDO"
            progressBar={
              <ProgressBar percentage={50} isChart={false}></ProgressBar>
            }
          />
        </div>
        <div className="contenido-clases">
          <ButtonClass
            bgColor="#42d64e"
            title="Programacion de dispositivos moviles"
            homework={
              <ActivitiesExpire
                actividad={4}
                titulo="Actividad 10 - Practica de algoritmo"
                fecha="Hoy mero cabron apurale"></ActivitiesExpire>
            }
            teacherName="Profr. Julian Flores"
            progressBar={
              <ProgressBar percentage={50} isChart={false}></ProgressBar>
            }
          />
        </div>
      </div>
    </div>
  );
};

// ################################ STYLES ################################
const HomeScreen = styled(_HomeScreen)<HomeScreenProps>`
  ${(props) => css``}
`;

// ################################ EXPORTS ################################
export default HomeScreen;

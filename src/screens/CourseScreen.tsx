// ################################ IMPORTS ################################
import RowList from "@components/RowList";
import styled, { css } from "styled-components";

// ################################ INTERFACES & PROPS ################################
type _Base = import("utils/classes").Base;
// CourseScreen => Rename all instances to use
type CourseScreenProps = {} & _Base;

// ################################ RENDERING COMPONENT ################################
const _CourseScreen = (props: CourseScreenProps) => {
  // ------------------------------------------------------------------------------------ RETURN
  return (
    <div className={props.className}>
      <h1>PANTALLA DE CURSOS</h1>
      <h1>Lista de Tareas</h1>
      <RowList
        svgStatus={0}
        numActivity={1}
        titulo={"Tarea de prueba"}
        fecha="10/11/2023"
        hora="23:59:00"
        calificacion={85}
      />
      <RowList
        svgStatus={1}
        numActivity={2}
        titulo={"Resumen libro del gabacho"}
        fecha="12/11/2023"
        hora="23:59:00"
        calificacion={50}
      />
      <RowList
        svgStatus={3}
        numActivity={2}
        titulo={"Practica codigo HTML"}
        fecha="29/10/2023"
        hora="23:59:00"
        calificacion={100}
      />
      <RowList
        svgStatus={3}
        numActivity={2}
        titulo={"Practica codigo HTML"}
        fecha="29/10/2023"
        hora="23:59:00"
        calificacion={0}
      />
      <RowList
        svgStatus={3}
        numActivity={2}
        titulo={"Practica codigo HTML"}
        fecha="03/11/2023"
        hora="23:59:00"
      />
      <h2>termina la lista de tareas</h2>
    </div>
  );
};

// ################################ STYLES ################################
const CourseScreen = styled(_CourseScreen)<CourseScreenProps>`
  ${(props) => css``}
`;

// ################################ EXPORTS ################################
export default CourseScreen;

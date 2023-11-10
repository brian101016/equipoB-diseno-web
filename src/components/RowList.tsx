// ######################################################## IMPORTS #############################################
import IconTaskStatus from "./IconStatusTask";
import styled from "styled-components";

// ######################################################## TYPE #############################################
type _Base = import("utils/classes").Base;
// RowList => Rename all instances to use
type RowListProps = {
  svgStatus: number;
  numActivity: number;
  titulo: string;
  fecha: string;
  hora: string;
  calificacion?: number;
} & _Base;

// Activa, por cerrar, cerrada
// Normal, Hover
let _indexColorBtn = 0;
const colorEstadoBoton = [
  ["#eae7e7", "#a9a9a9"],
  ["#fff388", "#a69603"],
  ["#a2c7de", "#407393"],
];

// Colores para el indicador de calificacion
let _color: string = "";
const _azul: string = "#127EC2";
const _verde: string = "#00FF1A";
const _amarillo: string = "#FAFF00";
const _rojo: string = "#FF0000";

/**
 * Este componenete representa una fila de la lista de tareas
 * @param Props
 * svgStatus: Establece el indice del SVG del estatus de la tarea, recibe un entero
 * numActivity: Establece el numero de la actividad de la tarea, recibe un entero.
 * titulo: Establece el titulo de la tarea, recibe un string
 * fecha: Establece la fecha de vencimiento de la tarea, recibe un estring, 23/11/2023
 * hora: Establece la hora de vencimiento de la tarea, recibe un string, 5:30:00
 * calificacion:Entero establece la calificación de la tarea, si no se establece aparece como S/N
 * @returns
 * devuelve un boton estilizado
 */
const _RowList = (props: RowListProps) => {
  establecerColoresBoton(props.fecha, props.hora);
  color(props.calificacion);

  // Div personalizado
  const DivColor = styled.div`
    background-color: ${_color};
  `;
  // Boton personalizado
  const ButtonColor = styled.button`
    background-color: ${colorEstadoBoton[_indexColorBtn][0]};
    &:hover {
      background-color: ${colorEstadoBoton[_indexColorBtn][1]};
      .texto-azul,
      .texto-gris {
        color: #fff;
      }
    }
  `;
  // Variable de apoyo
  const cali = props.calificacion;

  // ######################################################## RETURN #############################################
  return (
    <div className={props.className}>
      <ButtonColor className="row-list-button">
        <div className="izquierda">
          <div className="estatus-task-button">
            <IconTaskStatus indexSvg={props.svgStatus} />
          </div>
          <p className="numAct-task-button texto-azul">
            Actividad {props.numActivity}
          </p>
          <span className="texto-gris">-</span>
          <p className="title-task-button texto-gris">{props.titulo}</p>
        </div>

        <div className="derecha">
          <span className="date-task-button texto-azul">{props.fecha}</span>
          <span className="texto-gris">-</span>
          <span className="time-task-button texto-azul">{props.hora}</span>
          <DivColor className="conteiner-task-button">
            <p>{props.calificacion ? cali + "%" : "S/C"}</p>
          </DivColor>
        </div>
      </ButtonColor>
    </div>
  );
};

// ######################################################## FUNCIONES #############################################
/**
 * Asigna el color del estado segun la calificacion y cambia el color segun sea el caso
 * @param num
 * recibe un entero que representa la calificacion de 0 a 100.
 */
function color(num) {
  if (num == null) {
    _color = _azul;
  } else if (num > 0 && num <= 70) {
    _color = _amarillo;
  } else if (num > 70 && num <= 100) {
    _color = _verde;
  } else {
    _color = _rojo;
  }
}

/**
 * Establece los colores del boton segun las condiciones de entrega: Activa, Por Cerrar, Cerrada
 * @param fechaLimite recibe la fecha limite en formato dd/mm/yyyy
 * @param horaCierre recibe la hora limite en formato hh:mm:ss
 */
function establecerColoresBoton(fechaLimite, horaCierre) {
  let fechaActual = new Date();

  // Separo la hora para el formato correcto del metodo Date()
  const partesFecha = fechaLimite.split("/");
  const dia = partesFecha[0];
  const mes = partesFecha[1];
  const anyo = partesFecha[2];

  // Asignamos a una variable el formato correcto para la operacion
  const fechaCierreFormato = mes + "/" + dia + "/" + anyo;
  // Convetimos la fecha en un objeto Date
  const fechaCierre = new Date(`${fechaCierreFormato} ${horaCierre}`);

  const diferenciaTiempo = fechaCierre.getTime() - fechaActual.getTime();

  console.log("fecha de cierre: " + fechaCierre.getTime());
  console.log("fecha de actual: " + fechaActual.getTime());
  console.log("diferencia tiempo: " + diferenciaTiempo);

  if (diferenciaTiempo < 0) {
    // La tarea ya se cerró
    _indexColorBtn = 2;
  } else if (diferenciaTiempo > 86400000) {
    // La tarea aún no se cierra
    _indexColorBtn = 0;
  } else {
    // La tarea está a punto de cerrarse (menos de un día de anticipación)
    _indexColorBtn = 1;
  }
  //console.log(diferenciaTiempo);
  console.log(_indexColorBtn);
}

// ######################################################## STYLED #############################################
const RowList = styled(_RowList)`
  --text-size: 20px;
  --height: 50px;
  --size-svg: 40px;

  display: flex;
  justify-content: center;
  .texto-azul {
    color: #127ec2;
    font-family: Poppins;
    font-size: var(--text-size);
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .texto-gris {
    color: #a0a0a0;
    font-family: Poppins;
    font-size: var(--text-size);
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .row-list-button {
    height: var(--height);
    width: 95%;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 28px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.33);
    border-style: none;
  }

  .izquierda,
  .derecha {
    display: flex;
    align-items: center;
  }

  .estatus-task-button {
    svg {
      padding: 0;
      height: var(--size-svg);
      width: var(--size-svg);
      margin: 7px 15px 0 10px;
    }
  }

  .numAct-task-button {
    margin-right: 10px;
  }

  .title-task-button {
    margin-left: 10px;
  }

  .date-task-button {
    margin-right: 10px;
  }

  .time-task-button {
    margin-left: 10px;
    margin-right: 10px;
  }

  .conteiner-task-button {
    height: var(--height);
    width: 137px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0px 28px 28px 28px;
    background-color: ${_color};

    p {
      color: ${(props) => (props.calificacion ? "#494949" : "white")};
      font-family: Poppins;
      font-size: var(--text-size);
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
`;

// ######################################################## EXPORTS #############################################
export default RowList;

import { DB } from "App";
import { useState } from "react";
import "theme/ModalCreateHomework.scss";
import { BackgroundModal, Modal2 } from "./StyledComponents";
import { generateId } from "scripts/scripts";
import { Homework } from "@utils/classes";

export default function ModalCreateHomework() {
  const [modal, setModal] = useState(false);
  const [titulo, setTitulo] = useState("");
  const [desc, setDesc] = useState("");
  const [fecha, setFecha] = useState("");
  const [mensaje, setmensaje] = useState("");

  const TituloChange = (e) => {
    setTitulo(e.target.value);
  };
  const DescChange = (e) => {
    setDesc(e.target.value);
  };
  const FechaChange = (e) => {
    setFecha(e.target.value);
  };

  const mensajeChange = (e) => {
    setmensaje(e.target.value);
  };

  async function CreateHomework() {
    try{/* 
        const URL =
          "https://raw.githubusercontent.com/brian101016/equipoB-diseno-web/main/src/utils/database.json";
        const request = await fetch(URL);
        const response = await request.json();
        let idCourse="123ab";
        let idHw=generateId;
        let varTit=titulo;
        let varDesc=desc;
        let varfecha=fecha;
        let Homeworks:Homework ={
            id: idHw.toString(),
            title: varTit,
            desc: varDesc,
            dueDate: new Date(varfecha),
            comments:[],
            submissions:[],
            setup()
        }
        console.log(idCourse,idHw,varTit,varDesc,varfecha);
        DB.courses.forEach((crs) => {
            if (idCourse == crs.id) {
                        crs.homeworks.push(Homeworks);
                        const str = JSON.stringify({users: DB.users, courses: DB.courses});
                        localStorage.setItem("studySyncDB",str);
                        setmensaje("Se ha unido al curso correctamente")
            }else{
                setmensaje("No se encontro el curso")
            }
        });*/
        } catch(e) { setmensaje("Error al generar la tarea"); }
  }

  const toggleModal = () => {
    setModal(!modal);
    if (modal == true) {
      CreateHomework();
    }
  };

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Crear tarea
      </button>
      {modal && (
        <BackgroundModal>
          <Modal2>
            <h2 className="titulo2">CREACION DE TAREAS</h2>
            <div className="contenido-grid">
              <div className="modal-content-izquierda">
                <h3 className="titulo3">Titulo</h3>
              </div>
              <div className="modal-content-derecha">
                <input
                  className="inputCH"
                  value={titulo}
                  onChange={TituloChange}
                ></input>
              </div>
              <div className="modal-content-izquierda">
                <h3 className="titulo3">Descripcion</h3>
              </div>
              <div className="modal-content-derecha">
                <input
                  className="inputCH"
                  value={desc}
                  onChange={DescChange}
                ></input>
              </div>
              <div className="modal-content-izquierda">
                <h3 className="titulo3">Fecha de entrega</h3>
              </div>
              <div className="modal-content-derecha">
                <input
                  type="date"
                  className="inputCH"
                  value={fecha}
                  onChange={FechaChange}
                ></input>
              </div>
              <div className="modal-content-abajo">
                <button onClick={CreateHomework} className="btnColorBlue">
                  Crear
                </button>
              </div>

              <div className="bottom">
                <p>{mensaje}</p>
              </div>
            </div>
            <button className="close-modal" onClick={toggleModal}>
              X
            </button>
          </Modal2>
        </BackgroundModal>
      )}
    </>
  );
}

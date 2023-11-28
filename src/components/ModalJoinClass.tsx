import { DB } from "App";
import { useState } from "react";
import "theme/ModalJoinClass.scss";
import {
    BackgroundModal,
    Modal2,
} from "./StyledComponents";

export default function ModalJoinClass() {
    const [modal, setModal] = useState(false);
    const [idclass, setIdclass] = useState("");
    const [idmensaje, setIdmensaje] = useState("p");
    

    const idclassChange = (e) => {
        setIdclass(e.target.value);
      };
    
      const idmensajeChange = (e) => {
        setIdmensaje(e.target.value);
      };

      async function JoinClass() {
        try{ 
            const URL =
          "https://raw.githubusercontent.com/brian101016/equipoB-diseno-web/main/src/utils/database.json";
        const request = await fetch(URL);
        const response = await request.json();
        let idCourse=idclass;
        let cuser= JSON.stringify( DB.currentUser?.id)
        cuser= cuser.substring( 1, cuser.length- 1 );
        console.log(cuser)
        DB.courses.forEach((crs) => {
            if (idCourse == crs.id) {
                if(cuser!=crs.teacherID){
                    let inside=false;
                    crs.students.forEach((std) => {
                    if(cuser==std){
                        inside=true;
                        console.log(cuser)
                    }
                    });
                    if(inside==false){
                        console.log("inicio sesion")
                        crs.students.push(cuser)
                        const str = JSON.stringify({users: DB.users, courses: DB.courses});
                        localStorage.setItem("studySyncDB",str);
                        setIdmensaje("Se ha unido al curso correctamente")
                    }else{
                        setIdmensaje("El usuario ya se encuentra en el curso")
                    }
                }else{
                    setIdmensaje("El usuario no puede ser estudiante y maestro del mismo curso a la vez")
                }
            }else{
                setIdmensaje("No se encontro el curso")
            }
        });
        } catch(e) { setIdmensaje("Error en unirse a una clase, posiblemente no se haya iniciado sesion correctamente"); }
        
        return null;
    }

    const toggleModal = () => {
        setModal(!modal)
        if(modal==true){
            JoinClass()
        }
    };

    
    

    return (
        <>
            <button 
                onClick={toggleModal}
                className="btn-modal">
                    Entrar a una clase
            </button>
            {modal && (
            <BackgroundModal>
                <Modal2>
                    <div>
                    <h2>INGRESA A UNA CLASE</h2>
                    <div className="modal-content">
                    <input
                    className="c"
                        value={idclass}
                        onChange={idclassChange}>
                    </input>
                    <button 
                        onClick={JoinClass}
                        className="btnColorBlue">
                        Entrar
                    </button>
                    </div>
                    
                    <div className="bottom">
                    <p>{idmensaje}</p>
                    </div>
                    </div>
                    <button
                    className="close-modal"
                    onClick={toggleModal}
                    >X</button>
                </Modal2>
            </BackgroundModal>        
            )}                
        </>
    );
}
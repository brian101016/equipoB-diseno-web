type ActivitiesExpireProps = {
  actividad: number;
  titulo: string;
  fecha: string; //Debe de cambiarse a tipo fecha
};

// ################################ RENDERING COMPONENT ################################
const ActivitiesExpire = (props: ActivitiesExpireProps) => {
  // ------------------------------------------------------------------------------------ RETURN
  return (
    <div className="ActivitiesExpire">
      <strong className="ActivitieText">
        Actividad #{props.actividad || "Actividad"}
      </strong>
      <strong className="ActivitieTitle">
        - {props.titulo || "Nombre de actividad"} -
      </strong>
      <strong className="ActivitieText">
        {props.fecha || "04-02-2002 - 23:59"}
      </strong>
    </div>
  );
};

// ################################ EXPORTS ################################
export default ActivitiesExpire;

import bg_buttonClass from "@theme/images/bg-buttonClass.svg";
import icon_user from "@theme/images/icon-user-gray.png";

type Button_ClassProps = {
  title: string;
  bgColor: string;
  teacherName: string;
  homework: React.ReactNode;
  progressBar: React.ReactNode;
};

// ################################ RENDERING COMPONENT ################################
const Button_Class = (props: Button_ClassProps) => {
  // ------------------------------------------------------------------------------------ RETURN
  return (
    <button className="border-class-button">
      <div
        className="image-class-button"
        style={{
          backgroundImage: `url('${bg_buttonClass}')`,
          backgroundColor: `${props.bgColor}`,
        }}>
        <h1 className="title-class-button">
          {props.title || "Titulo de materia"}
        </h1>
        <img
          src={icon_user}
          className="icon-image-class-button"
          alt={icon_user}
        />
      </div>
      <div className="central-class-button">
        <h1 className="teacherName-class-button">{props.teacherName}</h1>
      </div>
      <div className="footer-class-button">
        <p className="text-footer-class-button">
          Actividades proximas a cerrar
        </p>
        <p className="homework-footer-class-button">{props.homework}</p>
        <div className="progress-bar-footer-class-button">
          <strong className="text-footer-class-button">
            Progreso del curso:
          </strong>
          {props.progressBar}
        </div>
      </div>
    </button>
  );
};

// ################################ EXPORTS ################################
export default Button_Class;

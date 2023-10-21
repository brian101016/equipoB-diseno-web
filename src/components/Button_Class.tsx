import bg_buttonClass from "@theme/images/bg-buttonClass.png";
import icon_user from "@theme/images/icon-user-buttonClass.png";

export default function Button_Class(props) {
  /**
   * Esta función es la que mueve entre pestañas, aún no se ha habilitado el react router
   * así que cuando este listo puede omitirse esta función
   */
  function redirect() {
    window.location.href =
      "https://www.youtube.com/watch?v=S-Xm7s9eGxU&list=RDMM&index=27";
  }

  return (
    <>
      <button id="border-class-button" onClick={redirect}>
        <div
          className="image-class-button"
          style={{
            backgroundImage: `url('${bg_buttonClass}')`,
          }}>
          <h1 className="title-class-button">
            {props.title || "Titulo de materia"}
          </h1>
        </div>

        <div className="icon-class-button">
          <img
            src={icon_user}
            alt={props.icon}
            className="icon-image-class-button"
            width={props.width || "100px"}
            height={props.height || "100px"}
          />
        </div>
        <div className="central-class-button">
          <h1 className="teacherName-class-button">{props.teacherName}</h1>
          <p className="description-class-button">
            {props.description || "Descripción"}
          </p>
        </div>
        <div className="footer-class-button">
          <p className="text-footer-class-button">TRABAJOS PRÓXIMOS A VENCER</p>
          <p className="homework-footer-class-button">
            {props.homework || "Ninguno"}
          </p>
        </div>
      </button>
    </>
  );
}

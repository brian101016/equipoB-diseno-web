import styled, { css } from "styled-components";
import ImageProvider from "@utils/ImageProvider";

// ################################ INTERFACES & PROPS ################################
type _Base = import("utils/classes").Base;
// HomeworkScreen => Rename all instances to use
type HomeworkScreenProps = {
  className?: string;
  styles?: null;
  title?: string;
  author?: string;
  desc?: string;
  date?: string;
  comments?: [
    {
      author?: string;
      title?: string;
      content?: string;
      isEdited?: boolean;
      date?: string;
    }
  ];
} & _Base;

// ################################ RENDERING COMPONENT ################################
const _HomeworkScreen = (props: HomeworkScreenProps) => {

  // ------------------------------------------------------------------------------------ RETURN
  return (
    <div className={props.className}>
      <div className="homework">
        <main className="container-main">
          <section className="container-homework">
            <h1 className="title-homework">
              {props.title ? props.title : "Actividad 1: Mapa Mental"}
            </h1>
            <p className="author-homework">
              {props.author ? props.author : "Miguel Castro"}
            </p>
            <p className="date-homework">
              {props.date
                ? `Fecha limite: ${props.date}`
                : "Fecha limite: 7/11/2023 a las 23:59"}
            </p>
            <p className="description-homework">
              {props.desc
                ? props.desc
                : `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque ipsum
          nostrum perspiciatis iusto, tempora repudiandae ipsa totam non,
          deleniti aliquid veniam unde omnis soluta dolores quos voluptas
          recusandae  architecto minus!`}
            </p>
            <div className="container-comment">
              <textarea className="comment-homework"></textarea>
            </div>
          </section>
          <section className="container-comments">
            <h1 className="title-comments">
              <img
                src={ImageProvider.homework.icon_people}
                alt="icono de comentarios"
              />
              COMENTARIOS
            </h1>
            {props.comments && props.comments.length > 0 ? (
              props.comments.map((comment) => (
                <div className="comment">
                  <p className="comment-author">
                    {comment.author ? comment.author : `Miguel Castro`}
                  </p>
                  <p className="comment-content">
                    {comment.content
                      ? comment.content
                      : `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
              dolorem aliquam quod voluptates, obcaecati nam, quia tempore
              fugiat incidunt vero itaque magni dicta saepe! Beatae et sint id
              impedit quidem.`}
                  </p>
                </div>
              ))
            ) : (
              <div className="comment">
                <p className="comment-author">
                  Miguel Castro
                  <img
                    className="icon_edit"
                    src={ImageProvider.homework.icon_edit}
                    alt="icono editar"
                  />
                </p>
                <p className="comment-content">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Atque dolorem aliquam quod voluptates, obcaecati nam, quia
                  tempore fugiat incidunt vero itaque magni dicta saepe! Beatae
                  et sint id impedit quidem.
                </p>
                <img
                  className="icon_send"
                  src={ImageProvider.homework.icon_send}
                  alt="icono de enviar"
                />
              </div>
            )}
          </section>
        </main>
        <aside className="container-aside">
          <div className="container-tutarea">
            <h3 className="title-tutarea">
              Tu tarea <span className="status-tutarea">Para realizar</span>
            </h3>
            <button className="btn-complete" onClick={validar}>Completar tarea</button>
            <button className="btn-showComments">
              Ver comentarios del maestro
            </button>
          </div>
          <div className="container-classComment">
            <h3 className="title-classComment">
              <img
                src={ImageProvider.homework.icon_comments}
                alt="Icono de comentario"
              />
              Comentario de la clase
            </h3>
            <p className="subtitle-classComment">
              Enviar comentario de la clase
            </p>
            <textarea
              className="comment-classComment"
              placeholder="Lorem ipsum, dolor sit amet con orem ipsum, dolor sit amet con aliquam quod voluptates, obcaecati nam fugiat incidunt vero itaque magni dicta saepe!"
            ></textarea>
            <button className="btn-sendClassComment">Enviar comentario</button>
          </div>
        </aside>
      </div>
      <footer>
        <div className="container-menu">
          <div className="btn-menu">
            <img src={ImageProvider.homework.icon_menu} alt="Boton menu" />
          </div>
          <div className="btn-edit">
            <img src={ImageProvider.homework.icon_edit} alt="Boton edit" />
          </div>
          <div className="btn-check">
            <img src={ImageProvider.homework.icon_check} alt="Boton check" />
          </div>
          <div className="btn-delete">
            <img src={ImageProvider.homework.icon_delete} alt="Boton delete" />
          </div>
        </div>
      </footer>
    </div>
  );
};

// -----------------------------------------------------------------------LOGICA BOTONES
function validar(){
  const _HomeworkScreen = (props: HomeworkScreenProps) => {
    const [newSubmissionContent, setNewSubmissionContent] = useState("");
  
    const handleCompleteTask = () => {
      const existingSubmission = DB.courses[0].homeworks[0].submissions[0].authorID.find(
        (submission) => submission.id === props.author
      );
  
      if (existingSubmission) {
        const updatedSubmissions = props.submissions.map((submission) =>
          submission.id === props.author
            ? { ...submission, content: newSubmissionContent }
            : submission
        );
        updateSubmissions(updatedSubmissions);
      } else {
        const newSubmission = {
          id: props.author,
          content: newSubmissionContent,
        };
        updateSubmissions([...props.submissions, newSubmission]);
      }
    };
  
    // currentUser es el usuario actual con id "52e"
    const currentUser = {
      id: "52e",
    };
  
    // Función para completar la tarea
    const completeTask = () => {
      const homework = props.homeworks.find((hw) => hw.id === "testid");
  
      const existingSubmissionIndex = homework.submissions.findIndex(
        (submission) => submission.authorID === currentUser.id
      );
  
      if (existingSubmissionIndex !== -1) {
        // Modificar el contenido de la entrega existente
        const updatedSubmissions = [...homework.submissions];
        updatedSubmissions[existingSubmissionIndex].content = newSubmissionContent;
        // Actualizar el estado con las entregas modificadas
        updateSubmissions(updatedSubmissions);
      } else {
        // Crear una nueva entrega si no existe
        const newSubmission = {
          id: "send123", // Puedes generar un nuevo ID
          authorID: currentUser.id,
          title: "unused",
          content: newSubmissionContent,
          isEdited: false,
          date: "2023-12-01",
          comment: "Hola soy el profe, ya esta evaluado :)",
          score: 0 // Puedes asignar un puntaje inicial
        };
        // Actualizar el estado con la nueva entrega
        updateSubmissions([...homework.submissions, newSubmission]);
      }
    };
  }
// ################################ STYLES ################################
const HomeworkScreen = styled(_HomeworkScreen)<HomeworkScreenProps>`
  ${(props) => css`
    .homework {
      height: 100vh;
      display: grid;
      grid-template-columns: 3fr 1fr;
      gap: 1rem;
    }
    .container-main {
      margin: 2rem;
    }
    .title-homework {
      padding-left: 2rem;
      color: #127ec2;
      font-family: Poppins;
      font-size: 2rem;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
    .author-homework {
      padding-left: 2rem;
      color: #7b7b7b;
      font-family: Poppins;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    .date-homework {
      color: #b3b3b3;
      text-align: center;
      font-family: Poppins;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-align: right;
    }
    .description-homework {
      margin-top: 1rem;
      padding-bottom: 1rem;
      margin-bottom: 1rem;
      color: #7b7b7b;
      text-align: justify;
      font-family: Poppins;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      border-bottom: 2px solid #127ec2;
    }
    .comment-homework {
      width: 1100px;
      height: 256px;
      flex-shrink: 0;
      border-radius: 23px;
      background: #fff;
      box-shadow: 2px 5px 8px 8px rgba(0, 0, 0, 0.15);
      font-size: x-large;
      padding: 1rem;
      min-width: 100%;
    }
    .container-comments {
      margin-top: 1rem;
      padding-top: 1rem;
      border-top: 2px solid #b3b3b3;
    }
    .title-comments {
      display: flex;
      text-align: center;
      justify-content: center;
      gap: 1rem;
      color: #127ec2;
      font-family: Bebas Neue;
      font-size: 2rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    .comment {
      margin-top: 3rem;
      padding: 1rem 2rem;
      flex-shrink: 0;
      border-radius: 28px;
      background: #d9d9d9;
    }
    .comment-author {
      color: #127ec2;
      font-family: Poppins;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    .comment-content {
      color: #8e8686;
      text-align: justify;
      font-family: Poppins;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    .container-tutarea {
      position: absolute;
      top: 20%;
      padding: 1.5rem;
      border-radius: 23px;
      background: #fff;
      box-shadow: 2px 5px 8px 8px rgba(0, 0, 0, 0.15);
      width: 22%;
      flex-shrink: 0;
    }
    .title-tutarea {
      color: #b3b3b3;
      font-family: Poppins;
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
    .status-tutarea {
      position: absolute;
      right: 5%;
      color: #006f12;
      font-family: Poppins;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    .btn-complete {
      margin-top: 1rem;
      border-radius: 10px;
      border: 3px solid #127ec2;
      background: #3280c4;
      color: #fff;
      font-family: Poppins;
      font-size: 1rem;
      font-style: normal;
      line-height: normal;
      width: 100%;
      cursor: pointer;
    }
    .btn-showComments {
      margin-top: 1rem;
      border-radius: 10px;
      border: 0.2rem solid #cbcbcb;
      background: white;
      color: #3280c4;
      font-family: Poppins;
      font-size: 1rem;
      font-style: normal;
      line-height: normal;
      width: 100%;
      cursor: pointer;
    }
    .container-classComment {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      position: absolute;
      top: 45%;
      padding: 1.5rem;
      border-radius: 23px;
      background: #fff;
      box-shadow: 2px 5px 8px 8px rgba(0, 0, 0, 0.15);
      width: 22%;
      flex-shrink: 0;
    }
    .title-classComment {
      text-align: center;
      color: #b3b3b3;
      font-family: Poppins;
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
    .subtitle-classComment {
      margin: 1rem 0;
      color: #127ec2;
      text-align: center;
      font-family: Poppins;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    .comment-classComment {
      padding: 1rem;
      border-radius: 23px;
      border: 1px solid #cbcbcb;
      background: #fff;
      width: 95%;
      min-height: 6rem;
      flex-shrink: 0;
    }
    .btn-sendClassComment {
      margin-top: 1rem;
      border-radius: 10px;
      border: 3px solid #127ec2;
      background: #3280c4;
      color: #fff;
      font-family: Poppins;
      font-size: 1rem;
      font-style: normal;
      line-height: normal;
      width: 95%;
      cursor: pointer;
    }
    .title-comments {
      img {
        width: 2.5rem;
        height: 100%;
      }
    }
    .comment {
      .icon_send {
        width: 2.5rem;
        position: relative;
        left: 98%;
        top: 0.7rem;
        cursor: pointer;
      }
      .icon_edit {
        width: 2.5rem;
        position: relative;
        left: 89%;
        bottom: 4rem;
        cursor: pointer;
      }
    }
    .title-classComment {
      img {
        width: 2.3rem;
        position: absolute;
        left: 4%;
      }
    }
    .container-menu {
      display: flex;
      flex-direction: row-reverse;
      position: fixed;
      bottom: 2%;
      right: 2%;
    }
    .container-menu {
      img {
        height: 4rem;
        margin: 0 0.5rem;
        cursor: pointer;
      }
    }
    .container-menu:hover {
      .btn-menu {
        transform: rotate(0);
        transition: 0.5s;
      }
      .btn-check,
      .btn-edit,
      .btn-delete {
        opacity: 1;
        transition: 0.5s;
      }
    }
    .btn-menu {
      transform: rotate(-0.25turn);
      transition: 0.5s;
    }
    .btn-check,
    .btn-edit,
    .btn-delete {
      opacity: 0;
      transition: 0.5s;
    }
  `}
`;
// ################################ EXPORTS ################################
export default HomeworkScreen;

import schoolPattern from 'theme/images/background/School-pattern.svg';
import userPicture from 'theme/images/icon/UserBlack-Gray-WhiteBack.png';
import courseButtons from '@theme/courseButtons.scss';

//###########################################INTERFAZ###########################################
type _Base = import("utils/classes").Base;
// HomeworkScreen => Rename all instances to use
type CourseButtonsProps = {} & _Base;

const _CourseButtons = () => {
    return (
        <div id="course-card">
            <div className="card-header">
                <img id="background-pattern" src={schoolPattern} alt="backgroundPattern" />
                <h1 className="subjectName">Inteligencia Artificial</h1>
                <img id="userPhoto" src={userPicture} alt="userPhoto" />
                <h2 id="profName">Prof. Patricia Carrillo</h2>
            </div>
            <hr />
            <div>
                <h2 id="soonClosureActs">Actividades proximas a cerrar:</h2>
                <ul>
                    <li><h4 className="actNumSoonClosure">Actividad 12</h4> <h4 className="actName">- Practica de algori... -</h4> <h4 className="actDateSoonClosure">20/11/2023 - 23:59pm</h4></li>
                    <li><h4 className="actNum">Actividad 13</h4> <h4 className="actName">- Investigación de c... -</h4> <h4 className="actDate">22/11/2023 - 23:59pm</h4></li>
                    <li><h4 className="actNum">Actividad 14</h4> <h4 className="actName">- Exposición de inve... -</h4> <h4 className="actDate">22/11/2023 - 23:59pm</h4></li>
                </ul>
            </div>
            <div>
                <h2 id="courseProgress">Progreso del curso:</h2>
                <figure><figure id="progress-content">50%</figure></figure>
            </div>
        </div>
    );
}
export default CourseButtons;

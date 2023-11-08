// ################################ INTERFACES & PROPS ################################

import ButtonClass from "@components/ButtonClass";
import Navbar from "@components/NavBar";
import ProgressChart from "@components/ProgressChart";
import ButtonDropDown from "components/ButtonDropDown";
import ActivitiesExpire from "@components/ActivitiesExpire";
import ProgressBar from "@components/ProgressBar";

// HomeScreen => Rename all instances to use
type HomeScreenProps = {};

// ################################ RENDERING COMPONENT ################################
const HomeScreen = (props: HomeScreenProps) => {
  // ------------------------------------------------------------------------------------ RETURN
  return (
    <div>
      <Navbar />
      <div className="home-contenido">
        <div className="contenido-clases">
          <ButtonClass
            bgColor="#d6d442"
            title="Diseño Web"
            homework={
              <ActivitiesExpire
                actividad={4}
                titulo="Algoritmo"
                fecha="Hoy mero cabron apurale"
              ></ActivitiesExpire>
            }
            teacherName="JESUS ALBERTO OJEDA SAUCEDO"
            progressBar={
              <ProgressBar percentage={50} isChart={false}></ProgressBar>
            }
          />
        </div>

        <div className="contenido-clases">
          <ButtonClass
            bgColor="#d6d442"
            title="Diseño Web"
            homework={
              <ActivitiesExpire
                actividad={4}
                titulo="Algoritmo"
                fecha="Hoy mero cabron apurale"
              ></ActivitiesExpire>
            }
            teacherName="JESUS ALBERTO OJEDA SAUCEDO"
            progressBar={
              <ProgressBar percentage={50} isChart={false}></ProgressBar>
            }
          />
        </div>
        <div className="contenido-clases">
          <ButtonClass
            bgColor="#d6d442"
            title="Diseño Web"
            homework={
              <ActivitiesExpire
                actividad={4}
                titulo="Algoritmo"
                fecha="Hoy mero cabron apurale"
              ></ActivitiesExpire>
            }
            teacherName="JESUS ALBERTO OJEDA SAUCEDO"
            progressBar={
              <ProgressBar percentage={50} isChart={false}></ProgressBar>
            }
          />
        </div>
        <div className="contenido-clases">
          <ButtonClass
            bgColor="#d6d442"
            title="Programacion de dispositivos moviles"
            homework={
              <ActivitiesExpire
                actividad={4}
                titulo="Actividad 10 - Practica de algoritmo"
                fecha="Hoy mero cabron apurale"
              ></ActivitiesExpire>
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

// ################################ EXPORTS ################################
export default HomeScreen;

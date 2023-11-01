// ################################ INTERFACES & PROPS ################################

import Button_Class from "@components/Button_Class";
import Navbar from "@components/NavBar";
import Progress_Chart from "@components/Progress_Chart";

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
          <Button_Class
            title="Diseño Web"
            homework="Actividad 7 - Investigacion sobre Diseño Web"
            teacherName="Profr. Jesus Saucedo"
          />
        </div>
        <div className="contenido-clases">
        <Button_Class className="dis"
          title="Inteligencia Artificial"
          homework="Actividad 12 - Grafos"
          teacherName="Profra. Patricia Carrillo"
        />
        </div>
        <div className="contenido-clases">
        <Button_Class className="dis"
          title="Programacion de dispositivos moviles"
          homework="Actividad 10 - Practica de algoritmo"
          teacherName="Profr. Julian Flores"
        />
        </div>
        <div className="contenido-clases">
        <Button_Class
          title="Programacion de dispositivos moviles"
          homework="Actividad 10 - Practica de algoritmo"
          teacherName="Profr. Julian Flores"
        />
        </div>
      </div>
    </div>
  );
};

// ################################ EXPORTS ################################
export default HomeScreen;

// ################################ INTERFACES & PROPS ################################

import ButtonClass from "@components/ButtonClass";
import ActivitiesExpire from "@components/ActivitiesExpire";
import ProgressBar from "@components/ProgressBar";

// HomeScreen => Rename all instances to use
type HomeScreenProps = {};

// ################################ RENDERING COMPONENT ################################
const HomeScreen = (props: HomeScreenProps) => {
  // ------------------------------------------------------------------------------------ RETURN
  return (
    <div>
      Pagina principal
      <ButtonClass
        bgColor="#d6d442"
        title="Diseño Web"
        homework={
          <ActivitiesExpire
            actividad={4}
            titulo="Algoritmo"
            fecha="Hoy mero cabron apurale"></ActivitiesExpire>
        }
        teacherName="JESUS ALBERTO OJEDA SAUCEDO"
        progressBar={
          <ProgressBar percentage={50} isChart={false}></ProgressBar>
        }
      />
    </div>
  );
};

// ################################ EXPORTS ################################
export default HomeScreen;

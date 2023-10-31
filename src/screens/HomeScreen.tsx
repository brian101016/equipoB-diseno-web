// ################################ INTERFACES & PROPS ################################

import Button_Class from "@components/Button_Class";
import Progress_Chart from "@components/Progress_Chart";

// HomeScreen => Rename all instances to use
type HomeScreenProps = {};

// ################################ RENDERING COMPONENT ################################
const HomeScreen = (props: HomeScreenProps) => {
  // ------------------------------------------------------------------------------------ RETURN
  return (
    <div>
      Pagina principal
      <Button_Class
        title="Diseño Web"
        description="Diseño web es una disciplina que se enfoca en la creación y diseño de sitios web, abarcando aspectos como la estructura, la apariencia visual, la usabilidad y la interacción."
        homework="Avance EC1"
        teacherName="JESUS ALBERTO OJEDA SAUCEDO"
      />
      <Progress_Chart percentage="70"></Progress_Chart>
    </div>
  );
};

// ################################ EXPORTS ################################
export default HomeScreen;

// ################################ INTERFACES & PROPS ################################

import { useParams } from "react-router-dom";

// CourseScreen => Rename all instances to use
type CourseScreenProps = {};

// ################################ RENDERING COMPONENT ################################
const CourseScreen = (props: CourseScreenProps) => {
  const urlParams = useParams();

  // ------------------------------------------------------------------------------------ RETURN
  return (
    <div>
      <h2>class/course screen</h2>
      El id de la clase es {urlParams.classid}
    </div>
  );
};

// ################################ EXPORTS ################################
export default CourseScreen;

// ################################ INTERFACES & PROPS ################################

import { useParams } from "react-router-dom";

// StudentScreen => Rename all instances to use
type StudentScreenProps = {};

// ################################ RENDERING COMPONENT ################################
const StudentScreen = (props: StudentScreenProps) => {
  const { classid, studentid } = useParams();

  // ------------------------------------------------------------------------------------ RETURN
  return (
    <div>
      <h3>Clase: {classid}</h3>
      <h4> Student: {studentid || "Todos"}</h4>
      Student screen
    </div>
  );
};

// ################################ EXPORTS ################################
export default StudentScreen;

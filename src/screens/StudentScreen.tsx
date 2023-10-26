// ################################ INTERFACES & PROPS ################################
// Template => Rename all instances to use
type StudentScreen = { title };

// ################################ RENDERING COMPONENT ################################
const StudentScreen = (props: StudentScreen) => {
  // ------------------------------------------------------------------------------------ RETURN
  return (
    <>
      <div>
        <h1>{props.title}</h1>
      </div>
    </>
  );
};

// ################################ EXPORTS ################################
export default StudentScreen;

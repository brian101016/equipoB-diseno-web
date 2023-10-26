import ButtonClass from "@components/ButtonClass";
import ProgressChart from "@components/ProgressChart";
function App() {
  return (
    <div className="App">
      <ButtonClass
        title="Diseño Web"
        description="Diseño web es una disciplina que se enfoca en la creación y diseño de sitios web, abarcando aspectos como la estructura, la apariencia visual, la usabilidad y la interacción."
        homework="Avance EC1"
        teacherName="JESUS ALBERTO OJEDA SAUCEDO"
      />

      <ProgressChart percentage="70"></ProgressChart>
    </div>
  );
}

export default App;

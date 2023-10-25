import spinner from "@theme/images/Spinner.png";

function Spinner() {
  return (
    <>
      <div className="spinnerContainer">
        <img className="imgSpinner" src={spinner} alt="Spinner" />
        <strong>Cargando</strong>
      </div>
    </>
  );
}

export default Spinner;

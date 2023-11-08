import ImageProvider from "@utils/ImageProvider";

function Spinner() {
  return (
    <div className="spinnerContainer">
      <img
        className="imgSpinner"
        src={ImageProvider.misc.spinner}
        alt="Spinner"
      />
      <strong>Cargando</strong>
    </div>
  );
}

export default Spinner;

import { useState } from "react";

export default function TodoList() {
  const [value, setValue] = useState("");
  const [list, setList] = useState<string[]>([]);

  return (
    <>
      <input
        onChange={(e) => {
          const val = e.target.value;
          setValue(val);
        }}
        value={value}
      />

      <button
        onClick={() => {
          setList([...list, value]);
          setValue("");
        }}
      >
        Guardar
      </button>

      <h1>El valor ingresado es: "{value || "No hay valores"}"</h1>
      {/* {value ? <h1>El valor ingresado es: "{value}"</h1> : <></>} */}
      {/* {value && <h1>El valor ingresado es: "{value}"</h1>} */}

      {list.map((i) => {
        return <p>{i}</p>;
      })}
    </>
  );
}

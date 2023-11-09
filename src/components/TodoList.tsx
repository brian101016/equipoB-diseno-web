import { useState } from "react";

type AB = {
  a: number;
  b: string;
};

type TodoListProps = {
  title: string;
  number: number;
  color?: "red" | "blue" | "green";
  asd?: AB;
};

export default function TodoList(props: TodoListProps) {
  const [value, setValue] = useState("");
  const [list, setList] = useState<string[]>([]);

  return (
    <>
      <input
        className={"input"}
        onChange={(e) => {
          const val = e.target.value;
          setValue(val);
        }}
        value={value}
      />

      <button
        className="button"
        onClick={() => {
          list.push(value);
          setValue("");
        }}
      >
        Guardar
      </button>

      <h1 style={{ color: props.color || "black" }}>
        {props.title} {props.number} El valor ingresado es: "
        {value || "No hay valores"}"
      </h1>
      {/* {value ? <h1>El valor ingresado es: "{value}"</h1> : <></>} */}
      {/* {value && <h1>El valor ingresado es: "{value}"</h1>} */}

      <div className="list">
        {list.map((val, index) => {
          return (
            <div key={index}>
              <span>{index + 1}</span>

              <input type="checkbox" />

              <span>{val}</span>

              <button
                className="button danger"
                onClick={() => {
                  list.splice(index, 1);
                  setList([...list]);
                }}
              >
                Eliminar
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

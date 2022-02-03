import { useEffect, useState } from "react";

export const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then((d) => d.json())
      .then((res) => {
        setTodos(res);
      });
  },[]);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Todos"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          const data = { title: text, status: false };
          //fetch POST
          fetch("http://localhost:3001/users", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "content-type": "application/json",
            },
          });
          // setTodos([...todos,{title:text,status:false}])
        }}
      >
        Add Todos
      </button>
      {todos.map((e) => {
        <div>
          {e.title} - {e.status ? "Done" : "Not done"}
          hello
        </div>;
      })}
    </div>
  );
};

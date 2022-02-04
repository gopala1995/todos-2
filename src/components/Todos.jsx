import { useEffect, useState } from "react";

export const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [page,setPage] = useState(1)


  useEffect(() => {
    getData()
  },[page]);

  const getData=()=>{
    fetch(`http://localhost:3001/users?_page=${page}&_limit=3`)
      .then((d) => d.json())
      .then((res) => {
        setTodos(res);
        console.log(res);
      });
      
  }

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
          }).then(getData)
          // setTodos([...todos,{title:text,status:false}])
        }}
      >
        Add Todos
      </button>
      <div>
          {console.log(todos)}
      </div>
      {todos.map((e) => {
        return <div>
          {e.title} - {e.status ? "Done" : "Not done"}
          
          
        </div>;
      })}
      <button onClick={()=>{
            setPage(page-1)
          }}>Prev</button>

          <button onClick={()=>{
            setPage(page+1)
          }}>Next</button>
    </div>
  );
};

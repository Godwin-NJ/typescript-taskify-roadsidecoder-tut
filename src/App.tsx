import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { Todo } from "./model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todosInfo, setTodosInfo] = useState<Todo[]>([]);

  console.log(todosInfo);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodosInfo([...todosInfo, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <div className="App">
      <span className="heading">taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />
      {/* {todosInfo.map((info) => {
        return <li key={info.id}>{info.todo}</li>;
      })} */}
      <TodoList todosInfo={todosInfo} setTodosInfo={setTodosInfo} />
    </div>
  );
};

export default App;

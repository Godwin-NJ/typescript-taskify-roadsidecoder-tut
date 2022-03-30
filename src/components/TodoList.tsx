import React from "react";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";
import "./styles.css";

interface Props {
  todosInfo: Todo[];
  setTodosInfo: React.Dispatch<React.SetStateAction<Todo[]>>;
}

function TodoList({ todosInfo, setTodosInfo }: Props) {
  return (
    <div className="todos">
      {todosInfo.map((todo) => {
        return (
          <SingleTodo
            key={todo.id}
            todo={todo}
            todosInfo={todosInfo}
            setTodosInfo={setTodosInfo}
          />
        );
      })}
    </div>
  );
}

export default TodoList;

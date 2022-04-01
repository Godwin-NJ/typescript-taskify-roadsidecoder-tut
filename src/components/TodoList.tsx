import React from "react";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";
import "./styles.css";
import { Droppable } from "react-beautiful-dnd";

interface Props {
  todosInfo: Todo[];
  setTodosInfo: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<never[]>>;
}

function TodoList({
  todosInfo,
  setTodosInfo,
  completedTodos,
  setCompletedTodos,
}: Props) {
  return (
    <div className="container">
      <Droppable droppableId="TodosList">
        {(provided) => (
          <div
            className="todos"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos__heading">Active tasks</span>
            {todosInfo.map((todo) => {
              //error here
              // return (
              //   <SingleTodo
              //     todo={todo}
              //     key={todo.id}
              //     todosInfo={todosInfo}
              //     setTodosInfo={setTodosInfo}
              //   />
              // );
            })}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="TodosRemove">
        {(provided) => (
          <div
            className="todos remove"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos__heading">Completed tasks</span>
            {completedTodos.map((todo) => {
              //error here
              // return (
              //   <SingleTodo
              //     todo={todo}
              //     key={todo.id}
              //     todosInfo={completedTodos}
              //     // setTodosInfo={setCompletedTodos}
              //   />
              // );
            })}
          </div>
        )}
      </Droppable>
    </div>
    // <div className="todos">
    //   {todosInfo.map((todo) => {
    //     return (
    //       <SingleTodo
    //         key={todo.id}
    //         todo={todo}
    //         todosInfo={todosInfo}
    //         setTodosInfo={setTodosInfo}
    //       />
    //     );
    //   })}
    // </div>
  );
}

export default TodoList;

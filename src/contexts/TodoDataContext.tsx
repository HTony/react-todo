import { SetStateAction, createContext, useContext } from "react";
import type { TodoItem, TodoStatus } from "../types";
import { TodoReducerAction } from "../reducers/todoReducer";

export type TodoContextType = {
  todos: TodoItem[];
  dispatch: React.Dispatch<TodoReducerAction>;
  filteredTodos: TodoItem[];
  setFilterRule: React.Dispatch<SetStateAction<TodoStatus | -1>>;
};

export const TodoContext = createContext<TodoContextType | undefined>(
  undefined
);

export const useTodoContext = () => {
  const context = useContext(TodoContext);

  return context;
};

import { useEffect, useReducer, useState } from "react";
import todoReducer from "../reducers/todoReducer";
import { TodoItem, TodoStatus } from "../types";

const localStorageKey = "MY_TODOS";

const useTodo = () => {
  const todosStr = window.localStorage.getItem(localStorageKey);
  const initialTodos = todosStr ? JSON.parse(todosStr) : [];
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);
  const [filteredTodos, setFilteredTodos] = useState<TodoItem[]>(todos);
  const [filterRule, setFilterRule] = useState<-1 | TodoStatus>(-1);

  useEffect(() => {
    window.localStorage.setItem(localStorageKey, JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    setFilteredTodos(
      todos.filter((todo) => {
        if (filterRule === -1) return true;
        return todo.status === filterRule;
      })
    );
  }, [todos, filterRule]);

  return {
    todos,
    dispatch,
    filteredTodos,
    setFilterRule,
  };
};

export default useTodo;

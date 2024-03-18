import * as React from "react";
import { TodoContext } from "../contexts/TodoDataContext";
import useTodo from "../hooks/useTodo";

type Props = {
  children: React.ReactNode;
};

const TodoDataProvider = ({ children }: Props) => {
  const { todos, dispatch, filteredTodos, setFilterRule } = useTodo();

  return (
    <TodoContext.Provider
      value={{
        todos,
        dispatch,
        filteredTodos,
        setFilterRule,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoDataProvider;

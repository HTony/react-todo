/** @jsxImportSource @emotion/react */
import * as React from "react";
import { css } from "@emotion/react";
import { blue } from "@mui/material/colors";
import { useTodoContext } from "../contexts/TodoDataContext";
import { TodoStatus } from "../types";
import TodoListItem from "./TodoListItem";

const styles = {
  listContainer: css`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 8px;
    background-color: ${blue[50]};
    border-radius: 8px;
    padding: 24px;
  `,
};

const testTodo = {
  id: Math.random().toString(),
  title: "test title",
  status: TodoStatus.Incomplete,
  createdTime: Date.now().toString(),
};

const TodoList = () => {
  const { filteredTodos, dispatch } = useTodoContext();
  const hasTodos = filteredTodos.length > 0;

  return (
    <div css={styles.listContainer}>
      {hasTodos ? (
        filteredTodos.map((todo) => <TodoListItem key={todo.id} todo={todo} />)
      ) : (
        <p>Create Todo to start</p>
      )}
    </div>
  );
};

export default TodoList;

/** @jsxImportSource @emotion/react */
import * as React from "react";
import { css } from "@emotion/react";
import { TodoItem, TodoStatus } from "../types";
import { Checkbox, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import TodoModal from "./TodoModal";
import { useTodoContext } from "../contexts/TodoDataContext";

type TodoListItemProps = {
  todo: TodoItem;
};

const styles = {
  container: css`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 12px;
    background-color: white;
    padding: 8px 0;
    border-radius: 8px;
  `,
  content: css`
    flex-grow: 1;
    padding: 0 8px;
  `,
  buttonsWrapper: css`
    padding: 0 4px;
    display: flex;
    gap: 8px;
  `,
  lineThrough: css`
    text-decoration-line: line-through;
  `,
};

const TodoListItem = ({ todo }: TodoListItemProps) => {
  const { dispatch } = useTodoContext();
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  return (
    <div css={styles.container}>
      <Checkbox
        checked={todo.status === TodoStatus.Completed}
        onChange={(e) => {
          dispatch({
            type: "update",
            data: {
              id: todo.id,
              status: e.target.checked
                ? TodoStatus.Completed
                : TodoStatus.Incomplete,
            },
          });
        }}
      />
      <div
        css={[
          styles.content,
          todo.status === TodoStatus.Completed && styles.lineThrough,
        ]}
      >
        <Typography variant="h6">{todo.title}</Typography>
        <Typography variant="body2">
          {new Date(parseInt(todo.createdTime)).toISOString()}
        </Typography>
      </div>
      <div css={styles.buttonsWrapper}>
        <DeleteIcon onClick={() => dispatch({ type: "delete", data: todo })} />
        <EditIcon onClick={() => setIsModalOpen(true)} />
      </div>
      <TodoModal
        type="update"
        todo={todo}
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default TodoListItem;

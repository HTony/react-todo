/** @jsxImportSource @emotion/react */
import * as React from "react";
import { css } from "@emotion/react";
import { Button } from "@mui/material";
import TodoStatusSelect from "./TodoStatusSelect";
import TodoModal from "./TodoModal";

const styles = {
  container: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  `,
};

const TodoToolbar = () => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  return (
    <div css={styles.container}>
      <Button variant="contained" onClick={() => setIsModalOpen(true)}>
        Add Todo
      </Button>
      <TodoStatusSelect />
      <TodoModal
        type="add"
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default TodoToolbar;

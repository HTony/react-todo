/** @jsxImportSource @emotion/react */
import * as React from "react";
import { css } from "@emotion/react";
import { Button, MenuItem, Select, FormControl } from "@mui/material";
import { TodoStatus } from "../types";
import TodoModal from "./TodoModal";
import { useTodoContext } from "../contexts/TodoDataContext";

const styles = {
  container: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  `,
  selectContainer: css`
    min-width: 150px;
  `,
};

const TodoToolbar = () => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const { setFilterRule } = useTodoContext();
  return (
    <div css={styles.container}>
      <Button variant="contained" onClick={() => setIsModalOpen(true)}>
        Add Todo
      </Button>
      <FormControl size="small" css={styles.selectContainer}>
        <Select
          displayEmpty
          defaultValue={-1}
          onChange={(e) => setFilterRule(e.target.value as TodoStatus)}
        >
          <MenuItem value={-1}>All</MenuItem>
          <MenuItem value={TodoStatus.Completed}>Completed</MenuItem>
          <MenuItem value={TodoStatus.Incomplete}>Incomplete</MenuItem>
        </Select>
      </FormControl>
      <TodoModal
        type="add"
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default TodoToolbar;

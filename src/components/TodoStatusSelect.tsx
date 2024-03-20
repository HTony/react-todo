/** @jsxImportSource @emotion/react */
import * as React from "react";
import { css } from "@emotion/react";
import { useTodoContext } from "../contexts/TodoDataContext";
import { FormControl, MenuItem, Select } from "@mui/material";
import { TodoStatus } from "../types";

const styles = {
  selectContainer: css`
    min-width: 150px;
  `,
};

const TodoStatusSelect = () => {
  const { setFilterRule } = useTodoContext()!;
  return (
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
  );
};

export default TodoStatusSelect;

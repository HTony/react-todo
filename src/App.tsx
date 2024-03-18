/** @jsxImportSource @emotion/react */
import * as React from "react";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import TodoDataProvider from "./providers/TodoDataProvider";
import TodoToolbar from "./components/TodoToolbar";
import TodoList from "./components/TodoList";

const styles = {
  main: css`
    min-height: 100vh;
  `,
  container: css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 6rem;
    flex-direction: column;
  `,
  todoAppContainer: css`
    max-width: 750px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  `,
};

const App = () => {
  return (
    <main css={styles.main}>
      <TodoDataProvider>
        <div css={styles.container}>
          <Typography component="h1" variant="h3">
            TODO APP
          </Typography>
          <div css={styles.todoAppContainer}>
            <TodoToolbar />
            <TodoList />
          </div>
        </div>
      </TodoDataProvider>
    </main>
  );
};

export default App;

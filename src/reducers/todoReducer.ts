import { TodoItem } from "../types";

export type TodoReducerAction = {
  type: "add" | "update" | "delete";
  data: Partial<TodoItem>;
};

const todoReducer = (state: TodoItem[], action: TodoReducerAction) => {
  switch (action.type) {
    case "add":
      return [...state, action.data as TodoItem];
    case "update":
      return state.map((e) => {
        if (e.id === action.data.id) {
          return { ...e, ...action.data };
        }
        return e;
      });
    case "delete":
      return state.filter((e) => e.id !== action.data.id);
    default:
      return state;
  }
};

export default todoReducer;

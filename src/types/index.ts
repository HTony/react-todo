export enum TodoStatus {
  Completed,
  Incomplete,
}

export type TodoItem = {
  id: string;
  title: string;
  status: TodoStatus;
  createdTime: string;
};

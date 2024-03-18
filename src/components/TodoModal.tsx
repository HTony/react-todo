import * as React from "react";
import { TodoItem, TodoStatus } from "../types";
import { useTodoContext } from "../contexts/TodoDataContext";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  TextField,
} from "@mui/material";

type TodoModalProps = {
  type: "add" | "update";
  todo?: TodoItem;
  isOpen: boolean;
  closeModal: () => void;
};

const TodoModal = ({ type, todo, isOpen, closeModal }: TodoModalProps) => {
  const { dispatch } = useTodoContext()!;
  const [title, setTitle] = React.useState<string>("");

  const handleSubmit = () => {
    if (type === "add") {
      console.log({ title });
      dispatch({
        type: "add",
        data: {
          id: Math.random().toString(),
          title,
          status: TodoStatus.Incomplete,
          createdTime: Date.now().toString(),
        },
      });
    } else {
      console.log({ title });
      dispatch({
        type: "update",
        data: {
          id: todo.id,
          title,
        },
      });
    }
    closeModal();
  };

  React.useEffect(() => {
    if (type === "add") {
      setTitle("");
    } else {
      setTitle(todo.title);
    }
  }, [type, todo, isOpen]);

  return (
    <Dialog open={isOpen} onClose={closeModal}>
      <DialogTitle>{type === "add" ? "Add" : "Update"} TODO</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          required
          margin="dense"
          id="title"
          name="title"
          label="Title"
          type="text"
          fullWidth
          variant="standard"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSubmit}>
          {type === "add" ? "Add" : "Update"}
        </Button>
        <Button onClick={closeModal}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

export default TodoModal;

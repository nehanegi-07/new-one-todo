import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Grid, TextField, MenuItem, Divider, Button } from "@mui/material";
import { useMutation, useQueryClient } from "react-query";
import { notifySuccess, notifyError } from "./Messages";
import { createTodo } from "../services/service";

function TodoForm({ handleCloseModal, developerList }) {
  const queryClient = useQueryClient();
  const [todoDetail, setTodoDetail] = useState({
    title: "",
    todo_complete: false,
    todo_assign_to: "",
  });


  const { mutate } = useMutation(createTodo, {
    onSettled: () => queryClient.invalidateQueries("todoList"),
    onSuccess: (res) => {
      handleCloseModal();
      notifySuccess("Task added Successfully");
    },
    onError: (error) => {
      notifyError(
        `${
          error?.response?.data?.error?.message
            ? error.response.data.error.message
            : "Something Went Wrong"
        }`
      );
    },
  });

  function handleChange(e) {
    const value = e.target.value;
    setTodoDetail({
      ...todoDetail,
      [e.target.name]: value,
    });
  }

  const onSave = () => {
    mutate(todoDetail);
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <CloseIcon onClick={handleCloseModal} />
      </div>
      <div style={{ textAlign: "center" }}>
        <h2 style={{ fontSize: "18px" }}>Add To Do</h2>
        <Divider />
      </div>
      <Grid
        container
        direction="row"
        sx={{
          padding: "10px",
        }}
        component="form"
      >
        <Grid item xs={12} mb={2}>
          <TextField
            fullWidth
            margin="dense"
            variant="filled"
            name="title"
            label="Title"
            id="Title"
            value={todoDetail.title}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} mb={2}>
          <TextField
            fullWidth
            select
            variant="filled"
            name="todo_assign_to"
            label="Assign To"
            defaultValue="None"
            id="Assign To"
            onChange={handleChange}
          >
            {developerList.map((option) => (
              <MenuItem key={option.label} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
      <div style={{ textAlign: "center" }}>
        <Button
          onClick={onSave}
          sx={{
            backgroundColor: "#FA6A6B",
            color: "white",
            width: "100px",
            "&:hover": {
              backgroundColor: "#FA6A6B",
              boxShadow: "none",
            },
            "&:active": {
              boxShadow: "none",
              backgroundColor: "#3c52b2",
            },
          }}
        >
          Save
        </Button>
      </div>
    </div>
  );
}

export default TodoForm;

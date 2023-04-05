import React, { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Grid, TextField, MenuItem, Divider, Button } from "@mui/material";
import { useMutation, useQueryClient, useQuery } from "react-query";
import { notifySuccess, notifyError } from "./Messages";
import { getTodoItemById, UpdateTodo } from "../services/service";

function TodoEditForm({ handleCloseModal, developerList, taskList, taskId }) {
  const queryClient = useQueryClient();
  const [todoDetail, setTodoDetail] = useState({});

  const { data, isSuccess } = useQuery(
    ["todoList"],
    () => getTodoItemById(taskId),
    {
      keepPreviousData: true,
    }
  );

  useEffect(() => {
    if (isSuccess) {
      setTodoDetail(data.data);
    }
  }, [isSuccess, data]);

  const { mutate } = useMutation(UpdateTodo, {
    onSettled: () => queryClient.invalidateQueries("todoList"),
    onSuccess: (res) => {
      handleCloseModal();
      notifySuccess("Task Updated Successfully");
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
    mutate({ data: todoDetail, todoId: taskId });
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
        <Grid item xs={12} mt={2} mb={2}>
          <TextField
            fullWidth
            select
            variant="filled"
            name="title"
            label="Select Project"
            defaultValue={todoDetail?.title}
            id="Select Project"
            onChange={handleChange}
          >
            {taskList.map((option) => (
              <MenuItem key={option.id} value={option.id}>
                {option.title}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} mb={2}>
          <TextField
            fullWidth
            margin="dense"
            variant="filled"
            label="Title"
            name="title"
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
            label="Assign To"
            name="todo_assign_to"
            defaultValue={todoDetail.todo_assign_to}
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
          }}
        >
          Save
        </Button>
      </div>
    </div>
  );
}

export default TodoEditForm;

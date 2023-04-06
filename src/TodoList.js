import React,{useState,useEffect} from "react";
import {useSelector } from "react-redux";
import { Grid, Checkbox, List, ListItem, Divider,Card, CardContent,Typography } from "@mui/material";
import addMore from "./assests/addMore.svg";
import edit from "./assests/edit.svg";
import deleteicon from "./assests/deleteicon.svg";
import BasicModal from "./components/Modal";
import TodoEditForm from "./components/TodoEditForm";
import TodoForm from "./components/TodoForm";
import { deleteTodo, getAllTodo} from "./services/service";
import { useMutation, useQueryClient, useQuery } from "react-query";
import { notifySuccess, notifyError } from "./components/Messages";

function TodoList() {
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const [addTodo, setAddTodo] =useState(false);
  const [editTaskId, setEditTaskId] = useState(null);
  const handleAddTodoFormClose = () => setAddTodo(false);
  const handleClose = () => setOpen(false);

  const developerList = useSelector((state) => {
    return state.developers;
  });

  const { data, isSuccess } = useQuery(
    ["todoList"],
    () => getAllTodo(),
    {
      keepPreviousData: true,
    }
  );

  useEffect(() => {
    if (isSuccess) {
      setTaskList(data?.data);
    }
  }, [isSuccess, data?.data]);

  const { mutate: deleteTodoTask } = useMutation(deleteTodo, {
    onSettled: () => queryClient.invalidateQueries("todoList"),
    onSuccess: (res) => {
      notifySuccess("Task Deleted Successfully");
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

  const handleOnEdit = (e, taskId) => {
    setOpen(true);
    setEditTaskId(taskId);
  };

  const handleOnDelete = (e, taskId) => {
    deleteTodoTask(taskId);
  };

 

  const today = new Date();
  const dayOfWeek = today.getDay(); // returns the day of the week (0-6)
  const dayOfMonth = today.getDate(); // returns the day of the month (1-31)
  const month = today.getMonth(); // returns the month (0-11)
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = monthNames[month];
  const day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ][dayOfWeek];

  return (
    <Grid>
      <div>
        <h2 style={{ fontSize: "44px" }}>To Do List</h2>
      </div>
      <Card sx={{ minWidth: 461, borderRadius: "7px", position: "relative" }}>
        <Grid
          container
          sx={{ display: "flex", justifyContent: "space-between", p: 4, pb: 2 }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <Typography
              sx={{ fontSize: "25px", color: "#5B5FE8", fontWeight: 900 }}
            >
              {day}, <span style={{ fontWeight: 400 }}>{dayOfMonth}th</span>
            </Typography>
            <span>{monthName}</span>
          </div>
          <div>
            <Typography>{taskList?.length}Tasks</Typography>
          </div>
        </Grid>

        <Divider />
        <div
          onClick={() => setAddTodo(true)}
          style={{ position: "absolute", right: "32px", top: "80px" }}
        >
          <img src={addMore} alt="add todo" />
        </div>
        <CardContent>
          <List>
            {taskList?.map((task) => {
              return (
                <ListItem>
                  <Grid container sx={{ display: "flex" }}>
                    <Grid xs={10} sx={{ display: "flex", gap: 7 }}>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <Checkbox
                          sx={{ pr: 2, pt: 0, boxShadow: "none" }}
                          checked={task?.todo_complete}
                        />
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: "16px",
                              textDecoration: task?.todo_complete
                                ? "line-through"
                                : "none",
                            }}
                          >
                            {task?.title}
                          </Typography>
                          <Typography
                            sx={{ fontSize: "12px", color: "#A0A0A0" }}
                          >
                            Project Title:{" "}
                            <span style={{ color: "#4B4B4B" }}>
                              {" "}
                              {task?.title}
                            </span>
                          </Typography>
                        </div>
                      </div>
                      <div>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            textDecoration: task?.todo_complete
                              ? "line-through"
                              : "none",
                          }}
                        >
                          {task?.todo_assign_to}
                        </Typography>
                      </div>
                    </Grid>
                    <Grid
                      sx={{
                        display: "flex",
                        alignContent: "end",
                        gap: 2,
                        alignItems: "flex-end",
                      }}
                    >
                      <div style={{ opacity: task?.todo_complete ? 0.5 : 1 }}>
                        <img
                          src={deleteicon}
                          alt="delete"
                          onClick={(e) => handleOnDelete(e, task._id)}
                        />
                      </div>
                      <div
                        style={{ opacity: task?.todo_complete ? 0.5 : 1 }}
                        onClick={(e) => handleOnEdit(e, task._id)}
                      >
                        <img src={edit} alt="edit" />
                      </div>
                    </Grid>
                  </Grid>
                </ListItem>
              );
            })}
          </List>
        </CardContent>
      </Card>
      <BasicModal open={addTodo} handleClose={handleAddTodoFormClose}>
        <TodoForm
          handleCloseModal={handleAddTodoFormClose}
          developerList={developerList}
        />
      </BasicModal>

      <BasicModal open={open} handleClose={handleClose}>
        <TodoEditForm
          handleCloseModal={handleClose}
          developerList={developerList}
          taskList={taskList}
          taskId={editTaskId}
        />
      </BasicModal>
    </Grid>
  );
}

export default TodoList;

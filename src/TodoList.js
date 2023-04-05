import React from "react";
import Card from "@mui/material/Card";
import EditIcon from "@mui/icons-material/Edit";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";

import { Button, Grid, Checkbox, List, ListItem, Divider } from "@mui/material";
import BasicModal from "./components/Modal";
import TodoForm from "./components/TodoForm";

function TodoList() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  return (
    <Grid>
      <div>
        <h2 style={{ fontSize: "44px" }}>To Do List</h2>
      </div>
      <Card sx={{ minWidth: 461, borderRadius: "7px" }}>
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
              Thursday,10th
            </Typography>
            <span>December</span>
          </div>
          <div>
            <Typography>4 Tasks</Typography>
          </div>
        </Grid>
        <Divider />
        <CardContent>
          <List>
            <ListItem>
              <Grid container sx={{ display: "flex" }}>
                <Grid xs={10} sx={{display:"flex"}}>
                    <div>
                <Checkbox
                  //onClick={() => handleDone(todo.id)}
                  checked={false}
                />
                <Typography>Project 1</Typography>
                </div>
                <div>
                
                <Typography>Developer 1</Typography>
                </div>
                </Grid>
                <Grid  xs={2} sx={{display:"flex",alignContent:"end"}} >
                <DeleteIcon />
                <EditIcon />
                </Grid>
              </Grid>
            </ListItem>
          </List>
        </CardContent>
      </Card>

      <BasicModal open={open} handleClose={handleClose}>
        {/* <FreeLinkCredit handleCloseModal={handleClose} /> */}
        <TodoForm handleCloseModal={handleClose} />
      </BasicModal>
    </Grid>
  );
}

export default TodoList;

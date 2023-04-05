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
              Thursday,<span style={{ fontWeight: 400 }}>  10th</span>
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
                <Grid xs={10} sx={{ display: "flex", gap:7 }}>
              
                  <div style={{ display: "flex", justifyContent: "center" }}>
                   
                    <Checkbox
                    sx={{pr:2,pt:0,boxShadow:"none"}}
                      //onClick={() => handleDone(todo.id)}
                      checked={false}
                    />
                    <div style={{ display: "flex",flexDirection:"column", justifyContent: "center" }}>
                    <Typography sx={{ fontSize: "16px" }}>Project 1</Typography>
                    <Typography sx={{ fontSize: "12px",color:"#A0A0A0" }}>Project Title: <span style={{ color: "#4B4B4B" }}>Project 1</span></Typography>
                    </div>
                  </div>
                  <div>
                    <Typography sx={{fontSize:"14px"}}>Developer 1</Typography>
                  </div>
                </Grid>
                <Grid  sx={{ display: "flex", alignContent: "end",gap:2,alignItems:"flex-end"}}>
                  <DeleteIcon />
                  <EditIcon />
                </Grid>
              </Grid>
            </ListItem>
          </List>
        </CardContent>
      </Card>

      <BasicModal open={open} handleClose={handleClose}>
        <TodoForm handleCloseModal={handleClose} />
      </BasicModal>
    </Grid>
  );
}

export default TodoList;

import React,{useState} from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Grid, TextField, MenuItem, Divider, Button } from "@mui/material";

function TodoForm({ handleCloseModal }) {
    const [todoDetail,setTodoDetail]=useState({
       project:"",
       title:"",
       todo_assign_to:""

    })
    const projectsList = [
        {
            value: "Project1",
            label: "1",
        },
        {
            value: "Project2",
            label: "2",
        },
        {
            value: "Project3",
            label: "3",
        },
        {
            value: "Project4",
            label: "4",
        },
    ];

    const developerList=[
        {
            value: "Developer1",
            label: "1",
        },
        {
            value: "Developer2",
            label: "2",
        },
        {
            value: "Developer3",
            label: "3",
        },
        {
            value: "Developer4",
            label: "4",
        },
    ]
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "end"}}>
                <CloseIcon onClick={handleCloseModal}/>
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
                        label="Select Project"
                        defaultValue="None"
                        id="Select Project"
                    >
                        {projectsList.map((option) => (
                            <MenuItem key={option.label} value={option.value}>
                                {option.value}
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
                        id="Title"
                        value={todoDetail.title}
                    />
                </Grid>

                <Grid item xs={12} mb={2}>
                    <TextField
                        fullWidth
                        select
                        variant="filled"
                        label="Assign To"
                        defaultValue="None"
                        id="Assign To"
                    >
                        {developerList.map((option) => (
                            <MenuItem key={option.label} value={option.value}>
                                {option.value}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
            </Grid>
            <div style={{textAlign:"center"}}>
                <Button onClick={handleCloseModal}
                sx={{backgroundColor:"#FA6A6B",color:"white",width:"100px"}}
                >Save</Button>
            </div>
        </div>
    );
}

export default TodoForm;

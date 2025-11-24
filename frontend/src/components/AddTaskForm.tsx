import {
  Box,
  Button,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import TitleIcon from "@mui/icons-material/Title";
import { Description } from "@mui/icons-material";
import axios from "axios";
import type { Task } from "../interfaces/Task";

const AddTaskForm = () => {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const task_title = data.get("task_title");
    const task_description = data.get("task_description");
    const task_priority = data.get("task_priority");
    const task_from = data.get("task_from");
    const task_to = data.get("task_to");

    // console.log("Task ID: " + task_id);
    // console.log("Task Title: " + task_title);
    // console.log("Task Description: " + task_description);
    // console.log("Task Priority: " + task_priority);
    // console.log("Task From: " + task_from);
    // console.log("Task To: " + task_to);

    const newTask: Task = {
      task_title: task_title as string,
      task_description: task_description as string,
      task_priority: task_priority as string,
      task_status: "Pending",
      task_from: new Date(task_from as string),
      task_to: new Date(task_to as string),
    };

    axios
      .post("http://localhost:3000/tasks/create", newTask)
      .then((response) => {
        console.log(response.data);
        alert("Task added successfully!");
      })
      .catch((error) => {
        console.error("There was an error adding the task!", error);
        alert("Error adding task.");
      });
  };

  return (
    <Box component={"form"} onSubmit={handleFormSubmit}>
      <Paper
        sx={{
          p: "1em",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1em",
          width: "50rem",
        }}
        elevation={2}
      >
        <Typography
          variant="h5"
          borderBottom={"1px dotted #10101050"}
          sx={{
            width: "100%",
          }}
        >
          Add Task Form
        </Typography>
        <TextField
          type="text"
          name="task_title"
          variant="standard"
          placeholder="Task Title"
          required
          autoComplete="off"
          label={<TitleIcon />}
          fullWidth
        />
        <TextField
          type="text"
          name="task_description"
          variant="outlined"
          placeholder="Task Description..."
          required
          autoComplete="off"
          label={<Description />}
          fullWidth
          multiline
          rows={3}
        />
        <TextField
          name="task_priority"
          select
          defaultValue="Low"
          variant="standard"
          label="Priority Level"
          sx={{
            width: "100%",
          }}
        >
          <MenuItem value="Low">🟢Low</MenuItem>
          <MenuItem value="Medium">🟡Medium</MenuItem>
          <MenuItem value="High">🔴High</MenuItem>
        </TextField>
        <Box
          sx={{
            display: "flex",
            gap: "1em",
            width: "100%",
          }}
        >
          <Box
            sx={{
              width: "50%",
            }}
          >
            <Typography>From</Typography>
            <TextField
              type="date"
              variant="standard"
              name="task_from"
              required
              fullWidth
            />
          </Box>
          <Box
            sx={{
              width: "50%",
            }}
          >
            <Typography>To</Typography>
            <TextField
              type="date"
              variant="standard"
              name="task_to"
              required
              fullWidth
            />
          </Box>
        </Box>

        <Button
          type="submit"
          variant="outlined"
          sx={{
            display: "flex",
          }}
        >
          <PlaylistAddIcon />
          Add Task
        </Button>
      </Paper>
    </Box>
  );
};

export default AddTaskForm;

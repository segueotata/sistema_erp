import { v4 as uuidv4 } from "uuid";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import TitleIcon from "@mui/icons-material/Title";
import { Description } from "@mui/icons-material";

const AddTaskForm = () => {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const task_id = uuidv4();

    const task_title = data.get("task_title");
    const task_description = data.get("task_description");
    const date_from = data.get("date_from");
    const date_to = data.get("date_to");

    console.log("Task ID: " + task_id);
    console.log("Task Title: " + task_title);
    console.log("Task Description: " + task_description);
    console.log("Task From: " + date_from);
    console.log("Task To: " + date_to);
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
          variant="standard"
          placeholder="Task Description..."
          required
          autoComplete="off"
          label={<Description />}
          fullWidth
          multiline
          rows={3}
        />
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
              name="date_from"
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
              name="date_to"
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

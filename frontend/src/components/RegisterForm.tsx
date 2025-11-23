import { Add, Email, Password, PermIdentity } from "@mui/icons-material";
import {
  Box,
  Button,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import type React from "react";

const RegisterForm = ({ onToggleMode }: any) => {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const username = data.get("username");
    const email = data.get("email");
    const password = data.get("password");
    const confirm_password = data.get("confirm_password");
    const permission = data.get("permission");

    console.log(username, email, password, confirm_password, permission);
  };

  return (
    <Box
      component="form"
      onSubmit={handleFormSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1em",
      }}
    >
      <Paper
        sx={{
          p: "1em",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1em",
          width: "30rem",
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
          Register Form
        </Typography>
        <TextField
          type="text"
          name="username"
          variant="standard"
          placeholder="Username"
          required
          autoComplete="off"
          label={<PermIdentity />}
          fullWidth
        />
        <TextField
          type="email"
          name="email"
          variant="standard"
          placeholder="Email"
          required
          autoComplete="off"
          label={<Email />}
          fullWidth
        />
        <Box
          sx={{
            display: "flex",
            width: "100%",
            gap: "1em",
          }}
        >
          <TextField
            type="password"
            name="password"
            variant="standard"
            placeholder="Password"
            required
            autoComplete="off"
            label={<Password />}
            fullWidth
          />
          <TextField
            type="password"
            name="confirm_password"
            variant="standard"
            placeholder="Confirm Password"
            required
            autoComplete="off"
            label={<Password />}
            fullWidth
          />
        </Box>
        <TextField
          name="permission"
          select
          defaultValue="basic"
          variant="standard"
          label="Permission Level"
          sx={{
            width: "100%",
          }}
        >
          <MenuItem value="guest">Guest</MenuItem>
          <MenuItem value="basic">Basic</MenuItem>
          <MenuItem value="plus">Plus</MenuItem>
          <MenuItem value="admin">Admin</MenuItem>
          <MenuItem value="developer">Developer</MenuItem>
          <MenuItem value="owner">Owner</MenuItem>
        </TextField>

        <Button
          type="submit"
          variant="outlined"
          sx={{
            display: "flex",
          }}
        >
          <Add />
          Register
        </Button>
      </Paper>
    </Box>
  );
};

export default RegisterForm;

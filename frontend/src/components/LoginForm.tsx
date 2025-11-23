import { Login, Password, PermIdentity } from "@mui/icons-material";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import type React from "react";

const LoginForm = () => {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const username = data.get("username");
    const password = data.get("password");

    // USER = "admin"
    // PASSWORD = "admin"
    if (username === "admin" && password === "admin") {
      alert("User logged in.");
    } else {
      alert("Credentials do not match. Try again.");
    }
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
          width: "20rem"
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
          Login Form
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
          type="password"
          name="password"
          variant="standard"
          placeholder="Password"
          required
          autoComplete="off"
          label={<Password />}
          fullWidth
        />
        <Button
          type="submit"
          variant="outlined"
          sx={{
            display: "flex",
          }}
        >
          <Login />
          Login
        </Button>
      </Paper>
    </Box>
  );
};

export default LoginForm;

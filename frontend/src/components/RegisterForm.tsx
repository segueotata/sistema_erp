import { Email, Password, PermIdentity } from "@mui/icons-material";
import {
  Badge,
  Box,
  Button,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import type React from "react";

const RegisterForm = ({ onToggleMode }: any) => {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const data = new FormData(e.currentTarget);

    const username = data.get("username");
    const email = data.get("email");
    const password = data.get("password");
    const confirm_password = data.get("confirm_password");
    const permission = data.get("permission");

    console.log(username, email, password, confirm_password, permission);

    e.preventDefault();
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
      <Typography variant="h4">Criar uma conta:</Typography>
      <TextField
        label={<PermIdentity />}
        placeholder="Username"
        name="username"
        type="text"
        autoComplete="off"
        required
      />
      <TextField
        label={<Email />}
        placeholder="E-mail"
        name="email"
        type="email"
        autoComplete="off"
        required
      />
      <Box>
        <TextField
          label={<Password />}
          placeholder="Password"
          name="password"
          type="password"
          autoComplete="off"
          required
        />
        <TextField
          label={<Password />}
          placeholder="Confirm Password"
          name="confirm_password"
          type="password"
          autoComplete="off"
          required
        />
      </Box>
      <TextField name="permission" select defaultValue="10">
        <MenuItem value="10">Basic</MenuItem>
        <MenuItem value="20">Admin</MenuItem>
        <MenuItem value="30">Owner</MenuItem>
      </TextField>

      <Box>
        <Button variant="outlined" type="submit">
          Registrar
        </Button>

        <Button variant="outlined" type="button" onClick={onToggleMode}>
          Já tem uma conta? Entrar
        </Button>
      </Box>
    </Box>
  );
};

export default RegisterForm;

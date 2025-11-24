import { Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // 👈 (Opcional) Para controle de loading
  const [error, setError] = useState(null); // 👈 (Opcional) Para tratamento de erros

  useEffect(() => {
    axios
      .get("http://localhost:3000/users/all")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => {
        console.error("There was an error fetching the users!", err);
        setError(err); // Define o estado de erro
      })
      .finally(() => {
        setLoading(false); // Finaliza o estado de loading
      });
  }, []); // 👈 Array de dependências vazio: executa somente na montagem

  if (loading) {
    return <Typography>Carregando usuários...</Typography>;
  }

  if (error) {
    return <Typography color="error">Erro ao carregar usuários</Typography>;
  }

  if (users.length === 0) {
    return <Typography>Nenhum usuário encontrado.</Typography>;
  }

  return (
    <Paper
      sx={{
        p: "1em",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "50%",
        height: "max-content",
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
        Users List
      </Typography>
      {users.map((user: any) => (
        <Paper
          key={user.uuid}
          sx={{
            display: "flex",
            flexDirection: "column",
            m: "1em",
            p: "1em",
            width: "100%",
            gap: ".5rem",
          }}
        >
          <Typography variant="h6" borderBottom={"1px dashed #10101050"}>
            <strong>UUID:</strong> {user.uuid}
          </Typography>
          <Typography variant="h6">
            <strong>Username:</strong> {user.username}
          </Typography>
          <Typography variant="h6">
            <strong>Email:</strong> {user.email}
          </Typography>
          <Typography variant="h6">
            <strong>Permission Level:</strong> {user.permission}
          </Typography>
        </Paper>
      ))}
    </Paper>
  );
};

export default UserList;

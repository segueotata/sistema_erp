import { Box, Paper, Typography } from "@mui/material";
import { useState, useEffect } from "react"; // 👈 Importar useEffect
import axios from "axios";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true); // 👈 (Opcional) Para controle de loading
  const [error, setError] = useState(null); // 👈 (Opcional) Para tratamento de erros

  // Usar useEffect para executar o fetch APENAS uma vez na montagem
  useEffect(() => {
    axios
      .get("http://localhost:3000/tasks/all")
      .then((response) => {
        setTasks(response.data);
      })
      .catch((err) => {
        console.error("There was an error fetching the tasks!", err);
        setError(err); // Define o estado de erro
      })
      .finally(() => {
        setLoading(false); // Finaliza o estado de loading
      });
  }, []); // 👈 Array de dependências vazio: executa somente na montagem

  // --- Lógica de Renderização ---

  if (loading) {
    return <Typography>Carregando tarefas...</Typography>;
  }

  if (error) {
    return <Typography color="error">Erro ao carregar os dados.</Typography>;
  }

  if (tasks.length === 0) {
    return <Typography>Nenhuma tarefa encontrada.</Typography>;
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
        Task List
      </Typography>
      {tasks.map((task: any) => (
        <Paper
          key={task.uuid}
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
            <strong>UUID:</strong> {task.uuid}
          </Typography>
          <Typography variant="h6">
            <strong>Title:</strong> {task.task_title}
          </Typography>
          <Typography variant="h6">
            <strong>Description:</strong> {task.task_description}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
            borderBottom={"1px dashed #10101050"}
          >
            <Typography variant="h6">
              <strong>Status:</strong> {task.task_status}
            </Typography>
            <Typography variant="h6">
              <strong>Priority:</strong> {task.task_priority}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6">
              <strong>From:</strong> {task.task_from}
            </Typography>
            <Typography variant="h6">
              <strong>To:</strong> {task.task_to}
            </Typography>
          </Box>
        </Paper>
      ))}
    </Paper>
  );
};

export default TaskList;

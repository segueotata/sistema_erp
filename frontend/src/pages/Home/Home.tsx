import { Box } from "@mui/material";
import Title from "../../components/Title";
import LoginForm from "../../components/LoginForm";
import RegisterForm from "../../components/RegisterForm";
import AddTaskForm from "../../components/AddTaskForm";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Title />

      {/* BOX QUE CONTÉM TODOS OS FORMS DO SISTEMA */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "1em",
          bgcolor: "wheat",
          p: "1em",
        }}
      >
        <LoginForm />
        <RegisterForm />
        <AddTaskForm />
      </Box>
    </Box>
  );
};

export default Home;

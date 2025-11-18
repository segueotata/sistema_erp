import { Box, Typography } from "@mui/material";
import { useState } from "react";
import LoginForm from "../../components/LoginForm";
import RegisterForm from "../../components/RegisterForm";

const Home = () => {
  type FormMode = "login" | "register";

  const [formMode, setFormMode] = useState<FormMode>("register");

  const handleToggleMode = () => {
    setFormMode(formMode === "login" ? "register" : "login");
    // console.log(formMode);
  };

  const toggleButtonHandler = () => {
    // Simplesmente chama a função principal de toggle
    handleToggleMode();
  };
  return (
    <Box>
      <Box>
        {/* <Typography variant="h3" letterSpacing={4}>
          Actions Hotbar
        </Typography> */}
        <Box>
          {formMode === "login" ? (
            // Renderiza o LoginForm e passa o handler para o botão de alternância
            <LoginForm onToggleMode={toggleButtonHandler} />
          ) : (
            // Renderiza o RegisterForm e passa o handler para o botão de alternância
            <RegisterForm onToggleMode={toggleButtonHandler} />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;

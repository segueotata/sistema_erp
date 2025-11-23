import { AddTask } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

const Title = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        // justifyContent: "center",
        p: "1em",
        gap: "1em",
        bgcolor: "royalblue",
        color: "white",
      }}
    >
      <AddTask fontSize="large" />
      <Typography variant="h4" letterSpacing={5}>
        TASK MANAGER API
      </Typography>
    </Box>
  );
};

export default Title;

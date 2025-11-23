import { Box, LinearProgress, Typography } from "@mui/material";
import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/RouterConfig";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense
      fallback={
        <Box
          sx={{
            position: "absolute",
            transform: "translate(-50%, -50%)",
            top: "50%",
            left: "50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1em",
          }}
        >
          <Typography variant="h4" letterSpacing={5}>Loading System...</Typography>
          <LinearProgress sx={{ width: "40rem" }} variant="query"/>
        </Box>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>
);

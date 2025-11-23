import { LinearProgress } from "@mui/material";
import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/RouterConfig";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={<LinearProgress />}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>
);

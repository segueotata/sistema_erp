import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
// import ProtectedDashboard from "../pages/Protected/ProtectedDashboard";

const Home = lazy(() => import("../pages/Home/Home"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  // {
  //   path: "/dashboard",
  //   element: <ProtectedDashboard />,
  // },
  {
    path: "*",
    element: <NotFound />,
  },
]);

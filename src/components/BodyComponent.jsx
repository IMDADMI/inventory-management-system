import React from "react";
import { Box } from "@mui/material";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./bodyComponents/Home";

export default function BodyComponent() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Home />}>
        <Route path="/inventory"></Route>
        <Route path="/orders"></Route>
        <Route path="/customers"></Route>
        <Route path="/revenue"></Route>
        <Route path="/growth"></Route>
        <Route path="/reports"></Route>
        <Route path="/settings"></Route>
      </Route>
    )
  );

  return (
    <Box sx={{ px: 3, py: 7 }}>
      <RouterProvider router={router} />
    </Box>
    // <div>

    //   <InfoCard components={cardComponent} />
    // </div>
  );
}

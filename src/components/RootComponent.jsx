import React from "react";
import NavBarComponent from "./NavBarComponent";
import { Box, Grid } from "@mui/material";
import SideBarComponent from "./SideBarComponent";
import BodyComponent from "./BodyComponent";

export default function RootComponent() {
  return (
    <>
      <NavBarComponent />

      <Box sx={{ bgcolor: "#DEE3E9" }}>
        <Grid container spacing={0}>
          <Grid item md={2} sm={0}>
            <SideBarComponent />
          </Grid>
          <Grid item md={10}>
            <BodyComponent />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

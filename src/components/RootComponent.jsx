import React from "react";
import NavBarComponent from "./NavBarComponent";
import { Grid } from "@mui/material";
import SideBarComponent from "./SideBarComponent";
import BodyComponent from "./BodyComponent";

export default function RootComponent() {
  return (
    <>
      <NavBarComponent />
      <Grid container spacing={0}>
        <Grid item md={2} sm={0} sx={{ bgcolor: "error" }}>
          <SideBarComponent />
        </Grid>
        <Grid item md="10">
          <BodyComponent />
        </Grid>
      </Grid>
    </>
  );
}

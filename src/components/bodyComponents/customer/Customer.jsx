import React, { Component } from "react";
import CustomerList from "./CustomerList";
import { Box } from "@mui/material";
export default class Customer extends Component {
  render() {
    return (
      <Box sx={{ m: 0, p: 3, width: "100%" }}>
        <CustomerList />
      </Box>
    );
  }
}

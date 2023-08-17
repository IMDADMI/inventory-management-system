import React, { Component } from "react";
import OrderList from "./OrderList";
import { Box } from "@mui/material";

export default class Order extends Component {
  render() {
    return (
      <Box sx={{ m: 0, p: 3, width: "100%" }}>
        <OrderList />
      </Box>
    );
  }
}

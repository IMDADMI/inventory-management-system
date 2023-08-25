import { Delete, DeleteOutline } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

export default function OrderModal({ order }) {
  console.log("the order lists are :\n", order.products[0].product.name);
  const handleDeleteProductFromOrder = (orderId, productId) => {
    console.log(
      "delete the product : ",
      productId,
      " from the order ",
      orderId
    );
  };
  const tableRows = order.products.map((orderProduct, index) => {
    return (
      <TableRow key={index}>
        <TableCell>{orderProduct.product.name}</TableCell>
        <TableCell>{orderProduct.quantity}</TableCell>
        <TableCell>{orderProduct.product.stock}</TableCell>
        <TableCell>
          <IconButton
            onClick={() =>
              handleDeleteProductFromOrder(order.id, orderProduct.product.id)
            }
          >
            <DeleteOutline color="error" />
          </IconButton>
        </TableCell>
      </TableRow>
    );
  });
  console.log(tableRows);
  return (
    <Box
      sx={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        width: "50%",
        bgcolor: "white",

        borderRadius: 2,
        boxShadow: 24,
        p: 4,
      }}
    >
      <Box sx={{ color: "black", display: "flex", flexDirection: "column" }}>
        <Typography variant="h6" sx={{ m: 3 }}>
          OrderList
        </Typography>
        <Paper
          elevation={0}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "30%",
            m: 3,
          }}
        >
          <Typography variant="subtitle1">Name </Typography>
          <Typography variant="subtitle1" color={"grey"}>
            ADMI ZAKARYAE
          </Typography>
        </Paper>
        <Paper
          elevation={0}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "30%",
            m: 3,
          }}
        >
          <Typography variant="subtitle1">Position </Typography>
          <Typography variant="subtitle1" color={"grey"}>
            Software Engineer
          </Typography>
        </Paper>
        <Paper
          elevation={0}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "30%",
            m: 3,
          }}
        >
          <Typography variant="subtitle1">Mobile </Typography>
          <Typography variant="subtitle1" color={"grey"}>
            +212 6 51 88 61 51
          </Typography>
        </Paper>
        <Box>
          <TableContainer sx={{ marginBottom: 3 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Product Name</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Stcok Availability</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* loop through the product list */}
                {tableRows}
              </TableBody>
            </Table>
          </TableContainer>
          <Paper
            elevation={0}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              m: 0,
            }}
          >
            <Button
              variant="contained"
              sx={{ bgcolor: "error.main", m: 3, px: 12 }}
            >
              Reject
            </Button>
            <Button
              variant="contained"
              sx={{ bgcolor: "#504099", m: 3, px: 12 }}
            >
              Approve
            </Button>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}

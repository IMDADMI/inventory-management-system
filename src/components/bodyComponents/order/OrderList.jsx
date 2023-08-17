import { Avatar, Box, Button, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { Component } from "react";
import productList from "../inventory/productList";

export default class OrderList extends Component {
  handlOrderDetail = () => {};
  render() {
    const columns = [
      {
        field: "id",
        headerName: "ID",
        width: 90,
        description: "id of the product",
      },
      {
        field: "fullname",
        headerName: "Full Name",
        width: 400,
        description: "customer full name",
        renderCell: (params) => {
          return (
            <>
              <Avatar alt="name" sx={{ width: 30, height: 30 }}>
                Z
              </Avatar>
              <Typography variant="subtitle2" sx={{ mx: 3 }}>
                {`${params.row.orders.customer.firstName || ""} ${
                  params.row.orders.customer.lastName || ""
                } `}
              </Typography>
            </>
          );
        },
      },
      {
        field: "mobile",
        headerName: "Mobile",
        width: 400,
        description: "customer phone number ",
        valueGetter: (params) => params.row.orders.customer.mobile,
      },
      {
        field: "total",
        headerName: "Total Amount",
        width: 300,
        description: "total amount of the order",
        valueGetter: (params) => {
          const total = 300;
          return total;
        },
      },
      {
        field: "details",
        headerName: "Order Details",
        width: 300,
        description: "the details of the order",

        renderCell: (params) => {
          return (
            <Button
              variant="contained"
              sx={{ bgcolor: "#504099" }}
              onClick={this.handlOrderDetail}
            >
              Order Details
            </Button>
          );
        },
      },
    ];
    const customer = {
      firstName: "ADMI",
      lastName: "ZAKARYAE",
      position: "Software Engineer",
      mobile: "0651886151",
    };

    const product = {
      name: "",
      category: "",
      price: 19,
      stock: 112,
    };
    const orders = {
      id: 0,
      quantity: 4,
      product: product,
      customer: customer,
    };

    const rows = [
      { id: 1, orders },
      { id: 2, orders },
      { id: 3, orders },
      { id: 4, orders },
      { id: 5, orders },
      { id: 6, orders },
      { id: 7, orders },
      { id: 8, orders },
      { id: 9, orders },
      { id: 10, orders },
      { id: 11, orders },
      { id: 12, orders },
      { id: 13, orders },
      { id: 14, orders },
      { id: 15, orders },
      { id: 16, orders },
      { id: 17, orders },
      { id: 18, orders },
      { id: 19, orders },
      { id: 20, orders },
      { id: 21, orders },
      { id: 22, orders },
    ];

    return (
      <Box
        sx={{
          margin: 3,
          bgcolor: "white",
          borderRadius: 5,
          padding: 3,
          height: "100%",
        }}
      >
        <DataGrid
          sx={{
            borderLeft: 0,
            borderRight: 0,
            borderRadius: 0,
          }}
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 13 },
            },
          }}
          pageSizeOptions={[5, 10, 20]}
          rowSelection={false}
        />
      </Box>
    );
  }
}

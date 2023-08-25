import { Component } from "react";
import { Avatar, Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import customers from "./Customers";
export default class CustomerList extends Component {
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
        width: 200,
        description: "customer full name",
        renderCell: (params) => {
          return (
            <>
              <Avatar
                alt="name"
                variant="square"
                sx={{ borderRadius: 1, width: 30, height: 30 }}
              >
                Z
              </Avatar>
              <Typography variant="subtitle2" sx={{ mx: 3 }}>
                {`${params.row.firstName || ""} ${params.row.lastName || ""} `}
              </Typography>
            </>
          );
        },
      },
      {
        field: "orderNumber",
        headerName: "Number Of Order",
        width: 200,
        description: "number of order that the customer made",
        valueGetter: (params) => params.row.orders.length,
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
        field: "orderHistory",
        headerName: "Order Details",
        width: 300,
        description: "the details of the order",
        valueGetter: (params) => {
          const history = "03/01/2027";
          return history;
        },
      },
      {
        field: "mobile",
        headerName: "Mobile",
        width: 300,
        description: "total amount of the order",
      },
    ];
    const rows = customers;
    return (
      <Box
        sx={{
          margin: 3,
          bgcolor: "white",
          borderRadius: 2,
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
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[15, 20, 30]}
          rowSelection={false}
        />
        <Box></Box>
      </Box>
    );
  }
}

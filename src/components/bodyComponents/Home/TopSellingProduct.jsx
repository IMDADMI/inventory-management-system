import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
export default function TopSellingProduct() {
  const products = [
    { name: "ASOS Ridey", price: 25.05, quantity: 73, amount: 1.828 },
    {
      name: "Philip Morris International",
      price: 85.05,
      quantity: 84,
      amount: 7.144,
    },
    { name: "Donna Karan", price: 96.05, quantity: 94, amount: 9.028 },
    { name: "Marco Pollo", price: 31.09, quantity: 51, amount: 1.585 },
    { name: "Dolce Gabbana", price: 27.09, quantity: 78, amount: 2.113 },
  ];
  return (
    <Box
      sx={{
        margin: 3,
        bgcolor: "white",
        borderRadius: 2,
        padding: 3,
        height: "95%",
      }}
    >
      <Typography variant="h6" fontWeight={"bold"} sx={{ mx: 3 }}>
        Top selling products
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bolder" }}>Name</TableCell>
              <TableCell sx={{ fontWeight: "bolder" }}>Price</TableCell>
              <TableCell sx={{ fontWeight: "bolder" }}>Quantity</TableCell>
              <TableCell sx={{ fontWeight: "bolder" }}>Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product, id) => {
              return (
                <TableRow key={id}>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{product.quantity}</TableCell>
                  <TableCell>{product.amount}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

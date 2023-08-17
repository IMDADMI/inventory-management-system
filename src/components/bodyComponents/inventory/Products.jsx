import { Typography } from "@mui/material";
import React from "react";
import Product from "./Product";
import { DataGrid } from "@mui/x-data-grid";

export default function Products() {
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
      description: "id of the product",
    },
    {
      field: "product",
      headerName: "Product",
      width: 400,
      description: "",
      //same here we have the cell data which i will get the value of the cells in the tables cellData.row.fieldName

      renderCell: (cellData) => {
        console.log("the cell data is : ", cellData.row.name);
        return <Product productName={cellData.row.name} />;
      },
    },
    {
      field: "category",
      headerName: "Category",
      width: 200,
      description: "category of the product",
    },
    {
      field: "price",
      headerName: "Price",
      width: 150,
      description: "price of the product",
    },
    {
      field: "stock",
      headerName: "Stock",
      width: 200,
      description: "how many items in the stock",
    },
  ];

  const rows = [
    {
      id: 1,
      name: "Cap",
      category: "Hats",
      price: "$" + 828,
      stock: 25 + " pcs",
    },
    {
      id: 2,
      name: "2 Color T-Shirt",
      category: "Hats",
      price: "$" + 144,
      stock: 43 + " pcs",
    },
    {
      id: 3,
      name: "Polo Tshirt",
      category: "Men's cloths",
      price: "$" + 28,
      stock: 123 + " pcs",
    },
    {
      id: 4,
      name: "Couple Set",
      category: "Men's cloths",
      price: "$" + 85,
      stock: 33 + " pcs",
    },
    {
      id: 5,
      name: "Collection",
      category: "Collection",
      price: "$" + 113,
      stock: 11 + " pcs",
    },
    {
      id: 6,
      name: "Balt Bag",
      category: "Collection",
      price: "$" + 28,
      stock: 123 + " pcs",
    },
    {
      id: 20,
      name: "Female T-Shirt",
      category: "Women's cloths",
      price: "$" + 25,
      stock: 10 + " pcs",
    },
    {
      id: 7,
      name: "Female Polo T-Shirt",
      category: "Women's cloths",
      price: "$" + 92,
      stock: 323 + " pcs",
    },
    {
      id: 8,
      name: "Half Pant",
      category: "Women's cloths",
      price: "$" + 35,
      stock: 52 + " pcs",
    },
    {
      id: 9,
      name: "Bag",
      category: "Accessories",
      price: "$" + 13,
      stock: 25 + " pcs",
    },

    {
      id: 10,
      name: "Glasses",
      category: "Glases",
      price: "$" + 828,
      stock: 30 + " pcs",
    },
    {
      id: 11,
      name: "Nike Hat",
      category: "Hats",
      price: "$" + 144,
      stock: 20 + " pcs",
    },
    {
      id: 12,
      name: "Addidas Shoes",
      category: "Shoes",
      price: "$" + 28,
      stock: 19 + " pcs",
    },
    {
      id: 13,
      name: "Luis glasses",
      category: "Glasses",
      price: "$" + 85,
      stock: 30 + " pcs",
    },
    {
      id: 14,
      name: "kids T-Shirt",
      category: "T-Shirts",
      price: "$" + 113,
      stock: 75 + " pcs",
    },
    {
      id: 15,
      name: "Sandals",
      category: "Shoes",
      price: "$" + 28,
      stock: 12 + " pcs",
    },
    {
      id: 16,
      name: "Gucci Bag",
      category: "Accessories",
      price: "$" + 25,
      stock: 13 + " pcs",
    },
    {
      id: 17,
      name: "Sport Shoes",
      category: "Shoes",
      price: "$" + 92,
      stock: 18 + " pcs",
    },
    {
      id: 18,
      name: "Nasa T-Shirt",
      category: "T-Shirts",
      price: "$" + 35,
      stock: 27 + " pcs",
    },
    {
      id: 19,
      name: "American Pants",
      category: "Pants",
      price: "$" + 13,
      stock: 43 + " pcs",
    },
  ];
  return (
    <div style={{ height: "600", width: "100%" }}>
      <DataGrid
        sx={{ borderLeft: 0, borderRight: 0, borderRadius: 0 }}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10, 20]}
        checkboxSelection
      />
    </div>
  );
}

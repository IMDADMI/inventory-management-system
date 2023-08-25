import { Box } from "@mui/material";
import React from "react";
import ApexCharts from "react-apexcharts";

export default function SalesGrowthCharts() {
  const options = {
    chart: {
      id: "basic-bar",
      type: "bar",
      stacked: true, //one on top of another
    },
    dataLabels: {
      enabled: true,
    },
    legend: {
      position: "top",
      horizontalAlign: "center",
      offsetY: 0,
    },
    title: {
      text: "Sales Growth Over The Year",
    },
    plotOptions: {
      bar: {
        columnWidth: "40%",
        horizontal: false,
      },
    },
    fill: {
      opacity: 1,
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aut",
        "Spt",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    tooltip: {
      fixed: {
        enabled: true,
        position: "topLeft", // topRight, topLeft, bottomRight, bottomLeft
        offsetY: 30,
        offsetX: 60,
      },
    },
  };
  const series = [
    {
      name: "Revenue",
      type: "column",
      data: [70, 14, 20, 93, -35, 19, 36, -22, 42, 20, -15, 17],
    },
  ];
  return (
    <Box
      sx={{
        marginX: 4,
        bgcolor: "white",
        borderRadius: 2,
        padding: 3,
        height: "100%",
      }}
    >
      <ApexCharts
        options={options}
        series={series}
        height={300}
        type="bar"
        width="100%"
      />
    </Box>
  );
}

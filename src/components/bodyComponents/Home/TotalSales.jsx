import { Box } from "@mui/material";
import React from "react";
import ApexCharts from "react-apexcharts";

export default function TotalSales() {
  const options = {
    title: {
      text: "Totale Sales",
      align: "left",
      style: {
        fontSize: "16px",
        color: "#666",
      },
    },
    subtitle: {
      text: "Sales over time",
      align: "left",
      style: {
        fontSize: "16px",
        color: "#666",
      },
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    legend: {
      customLegendItems: [
        "current Week  <b>$31,000<b/>",
        "Previous Week <b>$37,000<b/>",
      ],
      position: "top",
      horizontalAlign: "center",
      fontSize: "14px",
      fontFamily: "Helvetica, Arial",
      offsetY: -20,
    },
    markers: {
      size: 4,
      strokeWidth: 2,
      hover: {
        size: 9,
      },
    },
    theme: {
      mode: "light",
    },
    chart: {
      height: 328,
      type: "line",
      zoom: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        top: 3,
        left: 2,
        blur: 4,
        opacity: 0.2,
      },
    },
    xaxis: {
      categories: ["Mon", "Thu", "Wed", "The", "Fri", "Sat", "Sun"],
    },
  };
  const series = [
    {
      type: "line", //here we can define multiple type of chart in the same box
      name: "series-1",
      data: [2000, 3200, 3250, 4700, 3900, 4900, 3200],
    },
    {
      name: "series-2",
      data: [1500, 1900, 1800, 2900, 2600, 3200, 2200],
    },
  ];
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
      <ApexCharts
        options={options}
        series={series}
        height={300}
        type="line"
        width="100%"
      />
    </Box>
  );
}

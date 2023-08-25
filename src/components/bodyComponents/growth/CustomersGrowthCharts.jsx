import React, { useEffect, useState } from "react";
import ApexCharts from "react-apexcharts";
import { Box } from "@mui/material";
export default function CustomersGrowthCharts() {
  const [channelData, setChannelData] = useState([]);

  useEffect(() => {
    setChannelData([
      {
        name: "Current Week",
        data: [49, 55, 70, 78, 103, 150],
      },
      {
        name: "Previous Week",
        data: [14, 25, 30, 38, 43, 45],
      },
    ]);

    return () => {
      setChannelData([]);
    };
  }, []);

  const options3 = {
    colors: ["#E32227", "#0070E0"],

    chart: {
      id: "basic-bar",
      type: "bar",
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: "top",
      horizontalAlign: "center",
      offsetY: 0,
    },
    title: {
      text: "Customer Growth",
    },

    stroke: {
      curve: "smooth",
      width: 2,
    },
    color: {},
    markers: {
      size: 4,
      strokeWidth: 0,
      hover: {
        size: 7,
      },
    },
    fill: {
      opacity: 1,
    },
    xaxis: {
      categories: ["Mon", "Thu", "Web", "Tue", "Fri", "Sat", "Sun"],
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
  return (
    <Box
      sx={{
        margin: 4,
        bgcolor: "white",
        borderRadius: 2,
        padding: 3,
        height: "95%",
      }}
    >
      <ApexCharts
        options={options3}
        series={channelData}
        type="line"
        width="100%"
        height="320"
      />
    </Box>
  );
}

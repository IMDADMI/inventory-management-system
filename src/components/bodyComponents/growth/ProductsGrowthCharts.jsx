import React, { useEffect, useState } from "react";
import ApexCharts from "react-apexcharts";
import { Box } from "@mui/material";
export default function ProductsGrowthCharts() {
  const [channelData, setChannelData] = useState([]);

  useEffect(() => {
    setChannelData([
      {
        name: "Current Week",
        data: [490, 555, 790, 1008, 1010, 1150],
      },
      {
        name: "Previous Week",
        data: [340, 425, 30, 238, 443, 345],
      },
    ]);

    return () => {
      setChannelData([]);
    };
  }, []);

  const options3 = {
    colors: ["#BF181D", "#FFBF00"],

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
      text: "Product Growth",
    },

    stroke: {
      width: 3,
      curve: "smooth",
    },
    color: {},
    markers: {
      size: 5,
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

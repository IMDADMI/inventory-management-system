import React, { useEffect, useState } from "react";
import ApexCharts from "react-apexcharts";
import { Box } from "@mui/material";

export default function BestSelledProductChart() {
  const [channelData, setChannelData] = useState([]);

  useEffect(() => {
    setChannelData([
      {
        name: "product 1",
        data: [14, 25, 20, 20, 30, 99],
      },
      {
        name: "product 2",
        data: [99, 94, 21, 70, 10, 54],
      },
      {
        name: "product 3",
        data: [41, 53, 41, 66, 20, 12],
      },
      {
        name: "product 4",
        data: [59, 51, 12, 5, 40, 27],
      },
      {
        name: "product 5",
        data: [67, 62, 69, 35, 86, 69],
      },
    ]);

    return () => {
      setChannelData([]);
    };
  }, []);

  const options3 = {
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
      text: "Top 5 Selled Product last Week",
    },
    plotOptions: {
      bar: {
        columnWidth: "15%",
        horizontal: false,
      },
    },
    stroke: {
      curve: "smooth",
      width: 1,
    },
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
        marginX: 4,
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

import React, { useEffect, useState } from "react";
import ApexCharts from "react-apexcharts";
import { Box } from "@mui/material";
export default function VisitorsGrowthCharts() {
  const [visitorData, setVisitorData] = useState([]);

  useEffect(() => {
    setVisitorData([
      {
        name: "Active Visitors",
        type: "column",
        data: [341, 350, 460, 370, 300, 240, 250],
      },
      {
        name: "Bounce Visitors",
        type: "column",
        data: [141, 250, 260, 270, 300, 330, 360],
      },
    ]);

    return () => {
      setVisitorData([]);
    };
  }, []);

  const options3 = {
    colors: ["#A020F0", "#FA6800"],
    chart: {
      id: "basic-bar",
      type: "bar",
      stacked: false, //one on top of another
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      offsetY: 0,
    },
    title: {
      text: "Visitors",
    },
    plotOptions: {
      bar: {
        columnWidth: "15%",
        horizontal: false,
        borderRadius: 2,
      },
    },
    fill: {
      opacity: 1,
    },
    xaxis: {
      categories: ["Mon", "Thu", "Wed", "Tue", "Fri", "Sat", "Sun"],
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
        height: "100%",
      }}
    >
      <ApexCharts
        options={options3}
        series={visitorData}
        type="bar"
        width="100%"
        height={300}
      />
    </Box>
  );
}

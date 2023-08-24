import React, { Component } from "react";
import RevenueCard from "./RevenueCard";
import { Box, Grid, Paper } from "@mui/material";
import RevenueCostChart from "./RevenueCostChart";
import BestSelledProductChart from "./BestSelledProductChart";
import BestSelledProductChartBar from "./BestSelledProductChartBar";

export default class Revenue extends Component {
  render() {
    const revenuCards = [
      {
        money: "23 000",
        percentage: 55,
        upOrDown: "up",
        color: "green",
        titre: "Total Sales This Year",
      },
      {
        money: "3500",
        percentage: 70,
        upOrDown: "up",
        color: "green",
        titre: "Revenue This Year",
      },
      {
        money: "2000",
        percentage: 12,
        upOrDown: "down",
        color: "red",
        titre: "Cost This Year",
      },
      {
        money: "98 000",
        percentage: undefined,
        titre: "Revenue Total",
      },
    ];
    return (
      <Box sx={{ p: 3, mx: 3 }}>
        <Grid container sx={{ mx: 4 }}>
          {revenuCards.map((card) => (
            <Grid item md={3}>
              <Box m={4}>
                <RevenueCard card={card} />
              </Box>
            </Grid>
          ))}
        </Grid>
        <Grid container sx={{ mx: 4 }}>
          <Grid item md={12}>
            <RevenueCostChart />
          </Grid>
        </Grid>
        <Grid container sx={{ mx: 4 }}>
          <Grid item md={6}>
            <BestSelledProductChart />
          </Grid>
          <Grid item md={6}>
            <BestSelledProductChartBar />
          </Grid>
        </Grid>
      </Box>
    );
  }
}

import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import Percentage from "./Percentage";

export default function RevenueCard(props) {
  const { money, percentage, upOrDown, color, titre } = props.card;
  //   const { money, percentage, upOrDown, color, titre } = {
  //     money: 230,
  //     percentage: 55,
  //     upOrDown: "up",
  //     color: "green",
  //     titre: "Total Sales This Year",
  //   };
  return (
    <Paper elevation={3} sx={{ py: 5, px: 4, borderRadius: 2 }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography fontWeight={"bold"} variant="h6">
              $ {money}
            </Typography>
          </Box>
          <Box>
            {percentage && (
              <Percentage
                percentage={percentage}
                upOrDown={upOrDown}
                color={color}
              />
            )}
          </Box>
        </Box>
        <Box>
          <Typography fontWeight={"light"} variant="h6">
            {titre}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}

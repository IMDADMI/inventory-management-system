import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import Percentage from "./Percentage";

export default function RevenueCard(props) {
  const { number, percentage, upOrDown, color, title, subTitle, isMoney } =
    props.card;

  return (
    <Paper elevation={3} sx={{ py: 5, px: 4, borderRadius: 2 }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography fontWeight={"bold"} variant="h6">
              {isMoney ? "$" : ""} {number}
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
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography fontWeight={"light"} variant="h6">
              {title}
            </Typography>
          </Box>
          <Box>
            {percentage && (
              <Typography fontWeight={"light"} variant="caption" color={color}>
                {subTitle}
              </Typography>
            )}
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}

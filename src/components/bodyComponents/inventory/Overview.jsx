import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

export default function Overview() {
  return (
    <Box>
      <TableContainer>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Total Product</TableCell>
              <TableCell align="right">
                <Typography variant="subtitle1" fontWeight="bold">
                  15226
                </Typography>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Today sell</TableCell>
              <TableCell align="right">
                <Typography variant="subtitle1" fontWeight="bold">
                  5241
                </Typography>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Yesterday sell</TableCell>
              <TableCell align="right">
                <Typography variant="subtitle1" fontWeight="bold">
                  3652
                </Typography>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Total sell</TableCell>
              <TableCell align="right">
                <Typography variant="subtitle1" fontWeight="bold">
                  11425
                </Typography>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Product Reserved</TableCell>
              <TableCell align="right">
                <Typography variant="subtitle1" fontWeight="bold">
                  6547
                </Typography>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Stock Issues</TableCell>
              <TableCell align="right">
                <Typography variant="subtitle1" fontWeight="bold">
                  9562
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

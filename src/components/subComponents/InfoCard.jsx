import { Card, Box, CardContent, Typography } from "@mui/material";

export default function InfoCard({ card }) {
  return (
    //do the routing here
    <>
      <Card elevation={5} sx={{ mx: 5, my: 1 }}>
        <Box sx={{ display: "flex", alignItems: "center" }} pl={1}>
          <Box
            p={1}
            m={2}
            sx={{
              display: "flex",
              bgcolor: "primary.main",
              borderRadius: "12px",
              alignItems: "center",
            }}
          >
            {card.icon}
          </Box>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "left",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {card.title}
            </Typography>
            <Typography
              variant="h6"
              fontWeight={"bolder"}
              color="text.secondary"
              component="div"
            >
              {card.subTitle}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </>
  );
}

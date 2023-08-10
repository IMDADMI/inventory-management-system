import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  IconButton,
  Box,
  Divider,
} from "@mui/material";
import {
  HomeOutlined,
  Inventory2Outlined,
  SettingsOutlined,
  DescriptionOutlined,
  MonetizationOnOutlined,
  CardTravelOutlined,
  TrendingUpOutlined,
  PeopleAltOutlined,
} from "@mui/icons-material";

export default function SideBarComponent() {
  // const styles = theme => ({
  //     listItemText:{
  //         fontSize:'0.7em',//Insert your required size
  //     }
  //     });
  return (
    <>
      <List>
        <ListItem disablePadding dense={true}>
          <Box width="100%">
            <ListItemButton
              sx={{
                mb: 3,
                borderLeft: 2,
                borderColor: "primary.main",
                ml: 1,
              }}
            >
              <ListItemIcon>
                <IconButton>
                  <HomeOutlined fontSize="medium" color="primary" />
                </IconButton>
              </ListItemIcon>
              <ListItemText
                primary="Home"
                primaryTypographyProps={{ fontSize: "medium" }}
              />
            </ListItemButton>
          </Box>
        </ListItem>
        {/* ----------------------------------------------- */}
        <ListItem disablePadding dense={true}>
          <Box width="100%">
            <ListItemButton
              sx={{
                mb: 3,
                borderLeft: 0,
                borderColor: "primary.main",
                ml: 1,
              }}
            >
              <ListItemIcon>
                <IconButton>
                  <Inventory2Outlined fontSize="medium" color="primary" />
                </IconButton>
              </ListItemIcon>
              <ListItemText
                primary="Inventory"
                primaryTypographyProps={{ fontSize: "medium" }}
              />
            </ListItemButton>
          </Box>
        </ListItem>
        {/* ----------------------------------------------- */}
        <ListItem disablePadding dense={true}>
          <Box width="100%">
            <ListItemButton
              sx={{
                mb: 3,
                borderLeft: 0,
                borderColor: "primary.main",
                ml: 1,
              }}
            >
              <ListItemIcon>
                <IconButton>
                  <CardTravelOutlined fontSize="medium" color="primary" />
                </IconButton>
              </ListItemIcon>
              <ListItemText
                primary="Orders"
                primaryTypographyProps={{ fontSize: "medium" }}
              />
            </ListItemButton>
          </Box>
        </ListItem>
        {/* ----------------------------------------------- */}
        <ListItem disablePadding dense={true}>
          <Box width="100%">
            <ListItemButton
              sx={{
                mb: 3,
                borderLeft: 0,
                borderColor: "primary.main",
                ml: 1,
              }}
            >
              <ListItemIcon>
                <IconButton>
                  <PeopleAltOutlined fontSize="medium" color="primary" />
                </IconButton>
              </ListItemIcon>
              <ListItemText
                primary="Customer"
                primaryTypographyProps={{ fontSize: "medium" }}
              />
            </ListItemButton>
          </Box>
        </ListItem>
        {/* ----------------------------------------------- */}
        <ListItem disablePadding dense={true}>
          <Box width="100%">
            <ListItemButton
              sx={{
                mb: 3,
                borderLeft: 0,
                borderColor: "primary.main",
                ml: 1,
              }}
            >
              <ListItemIcon>
                <IconButton>
                  <MonetizationOnOutlined fontSize="medium" color="primary" />
                </IconButton>
              </ListItemIcon>
              <ListItemText
                primary="Revenue"
                primaryTypographyProps={{ fontSize: "medium" }}
              />
            </ListItemButton>
          </Box>
        </ListItem>
        {/* ----------------------------------------------- */}
        <ListItem disablePadding dense={true}>
          <Box width="100%">
            <ListItemButton
              sx={{
                mb: 3,
                borderLeft: 0,
                borderColor: "primary.main",
                ml: 1,
              }}
            >
              <ListItemIcon>
                <IconButton>
                  <TrendingUpOutlined fontSize="medium" color="primary" />
                </IconButton>
              </ListItemIcon>
              <ListItemText
                primary="Growth"
                primaryTypographyProps={{ fontSize: "medium" }}
              />
            </ListItemButton>
          </Box>
        </ListItem>
        {/* ----------------------------------------------- */}
        <ListItem disablePadding dense={true}>
          <Box width="100%">
            <ListItemButton
              sx={{
                mb: 3,
                borderLeft: 0,
                borderColor: "primary.main",
                ml: 1,
              }}
            >
              <ListItemIcon>
                <IconButton>
                  <DescriptionOutlined fontSize="medium" color="primary" />
                </IconButton>
              </ListItemIcon>
              <ListItemText
                primary="Report"
                primaryTypographyProps={{ fontSize: "medium" }}
              />
            </ListItemButton>
          </Box>
        </ListItem>
        {/* ----------------------------------------------- */}
        <ListItem disablePadding dense={true}>
          <Box width="100%">
            <ListItemButton
              sx={{
                mb: 3,
                borderLeft: 0,
                borderColor: "primary.main",
                ml: 1,
              }}
            >
              <ListItemIcon>
                <IconButton>
                  <SettingsOutlined fontSize="medium" color="primary" />
                </IconButton>
              </ListItemIcon>
              <ListItemText
                primary="Settings"
                primaryTypographyProps={{ fontSize: "medium" }}
              />
            </ListItemButton>
          </Box>
        </ListItem>
      </List>
    </>
  );
}

import React, { useState } from "react";
import "../../public/styles/links.css";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  IconButton,
  Box,
  Snackbar,
  Alert,
  Button,
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
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

export default function SideBarComponent() {
  const navigate = useNavigate();
  const navigateTo = (to) => {
    navigate(to);
  };
  const location = useLocation();
  const currentPage = location.pathname;
  console.log(currentPage);
  // const styles = theme => ({
  //     listItemText:{
  //         fontSize:'0.7em',//Insert your required size
  //     }
  //     });
  const sideBarComponent = [
    {
      title: "Home",
      component: <HomeOutlined fontSize="medium" color="primary" />,
    },
    {
      title: "Inventory",
      component: <Inventory2Outlined fontSize="medium" color="primary" />,
    },
    {
      title: "Orders",
      component: <CardTravelOutlined fontSize="medium" color="primary" />,
    },
    {
      title: "Customers",
      component: <PeopleAltOutlined fontSize="medium" color="primary" />,
    },
    {
      title: "Revenue",
      component: <MonetizationOnOutlined fontSize="medium" color="primary" />,
    },
    {
      title: "Growth",
      component: <TrendingUpOutlined fontSize="medium" color="primary" />,
    },
    {
      title: "Reports",
      component: <DescriptionOutlined fontSize="medium" color="primary" />,
    },
    {
      title: "Settings",
      component: <SettingsOutlined fontSize="medium" color="primary" />,
    },
  ];
  const [selected, setSelected] = useState(0);
  const handlSelectedComponent = (event, index) => {
    setSelected(index);
  };
  return (
    <>
      <List>
        {sideBarComponent.map((comp, index) => (
          <ListItem disablePadding dense={true} key={index}>
            <Box width="100%">
              <ListItemButton
                onClick={(event) => {
                  handlSelectedComponent(event, index);
                  navigateTo(comp.title.toLocaleLowerCase());
                }}
                // selected={}
                selected={
                  index === selected &&
                  currentPage === "/" + comp.title.toLowerCase()
                }
                sx={{
                  mb: 3,
                  borderLeft: 0,
                  borderColor: "primary.main",
                  ml: 1,
                }}
              >
                <ListItemIcon>
                  <IconButton>{comp.component}</IconButton>
                </ListItemIcon>
                {/* <Link
                  to={"" + comp.title.toLocaleLowerCase()}
                  className="router-link"
                > */}
                <ListItemText
                  primary={comp.title}
                  primaryTypographyProps={{
                    fontSize: "medium",
                    fontWeight: selected === index ? "bold" : "",
                    color: selected === index ? "primary.main" : "inherit",
                  }}
                />
                {/* </Link> */}
              </ListItemButton>
            </Box>
          </ListItem>
        ))}
      </List>
      {/* <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          This is a success message!
        </Alert>
      </Snackbar> */}
    </>
  );
  //   const [open, setOpen] = React.useState(false);

  //   const handleClick = () => {
  //     setOpen(true);
  //   };

  //   const handleClose = (event, reason) => {
  //     if (reason === 'clickaway') {
  //       return;
  //     }

  //     setOpen(false);
  //   };
}

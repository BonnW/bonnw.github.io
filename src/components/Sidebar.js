import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Popover,
  Box,
  useMediaQuery,
} from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import BuildIcon from "@mui/icons-material/Build";
import DescriptionIcon from "@mui/icons-material/Description";
import { styled } from "@mui/system";

import Wallpaper from "./Wallpaper.js";

import Header from "./Header.js";
import Projects from "./Projects/Projects.js";
import Posts from "./Posts/Posts.js";
import AboutMe from "./AboutMe.js";
import Resume from "./Resume/Resume.js";

import MobileView from "./MobileView.js";

const sidebarWidth = 260;

const Sidebar = () => {
  const [popOpen, setPopOpen] = useState(false);
  const [openElement, setOpenElement] = useState(null);

  const isMobile = useMediaQuery("(max-width:1200px");

  const handleClick = (e, key) => {
    setPopOpen(!popOpen);
    setOpenElement(key);
  };

  const handleClose = () => {
    setPopOpen(!popOpen);
  };

  const handleElement = (key) => {
    console.log("this is key", key);
  };

  const renderSwitch = (openElement) => {
    switch (openElement) {
      case "About Me":
        return <AboutMe handleClose={handleClose} />;
      case "Projects":
        return <Projects handleClose={handleClose} />;
      case "Resume":
        return <Resume handleClose={handleClose} />;
      default:
        return <p>hello world</p>;
    }
  };

  const iconSwitch = (text) => {
    switch (text) {
      case "About Me":
        return <FaceIcon />;
      case "Projects":
        return <BuildIcon />;
      case "Resume":
        return <DescriptionIcon />;
      default:
        return;
    }
  };

  const pages = [
    { id: 1, name: "About Me" },
    { id: 2, name: "Projects" },
    { id: 3, name: "Resume" },
  ];

  return (
    <Box>
      {!isMobile ? (
        <Drawer
          sx={{
            width: sidebarWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: sidebarWidth,
              boxSizing: "border-box",
              borderRight: "1px solid black",
              background:
                "linear-gradient(0deg, hsla(20, 69%, 61%, 1) 0%, hsla(272, 31%, 10%, 1) 100%)",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Header />
          <List>
            {pages.map((page, index) => (
              <ListItem key={page.id} disablePadding>
                <ListItemButton
                  onClick={(e) => {
                    handleClick(e, page.name);
                    handleElement({ page });
                  }}
                >
                  <ListItemIcon sx={{ color: "white" }}>
                    {iconSwitch(page.name)}
                  </ListItemIcon>
                  <ListItemText
                    primary={page.name}
                    sx={{ color: "white" }}
                    primaryTypographyProps={{
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Popover
            id="simple-popover"
            open={popOpen}
            // anchorEl={anchorEl}
            onClose={handleClose}
            anchorReference="anchorPosition"
            anchorPosition={{ top: 40, left: 0 }} // Adjust left position to account for sidebar width
            anchorOrigin={{
              vertical: "center",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            PaperProps={{
              style: {
                marginLeft: 260,
                marginRight: 20,
                backgroundColor: "#f0a05a",
              },
            }}
          >
            {renderSwitch(openElement)}
          </Popover>
        </Drawer>
      ) : (
        <MobileView />
      )}

      <Wallpaper />
    </Box>
  );
};

export default Sidebar;

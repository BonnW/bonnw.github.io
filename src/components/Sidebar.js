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
// import Drawer from "@mui/material/Drawer";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import Popover from "@mui/material/Popover";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { styled } from "@mui/system";

import Wallpaper from "./Wallpaper.js";

import Header from "./Header.js";
import Projects from "./Projects/Projects.js";
import Posts from "./Posts/Posts.js";
import AboutMe from "./AboutMe.js";
import Resume from "./Resume/Resume.js";

import MobileView from "./MobileView.js";

const sidebarWidth = 260;

// const StyledBox = styled('div')(({ theme })) => ({
//   []
// })

const Sidebar = () => {
  // const [anchorEl, setAnchorEl] = useState(null);
  const [popOpen, setPopOpen] = useState(false);
  const [openElement, setOpenElement] = useState(null);

  const isMobile = useMediaQuery("(max-width:1200px");
  // const isMobile = false;

  const handleClick = (e, text) => {
    // if (!anchorEl) {
    //   setAnchorEl(e.currentTarget);
    //   console.log(e.currentTarget);
    // }
    setPopOpen(!popOpen);
    handleElement(text);
  };

  const handleClose = () => {
    // setAnchorEl(null);
    setPopOpen(!popOpen);
  };

  const handleElement = (t) => {
    setOpenElement(t.text);
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
            {["About Me", "Projects", "Resume"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton
                  onClick={(e) => {
                    handleClick(e, text);
                    handleElement({ text });
                  }}
                >
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    sx={{ color: "white" }}
                    primaryTypographyProps={{
                      fontSize: 18,
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
            {/* <h1>hello world</h1> */}
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

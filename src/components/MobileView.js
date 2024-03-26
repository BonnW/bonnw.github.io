import React, { useState } from "react";

import {
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Popover,
} from "@mui/material";

import FaceIcon from "@mui/icons-material/Face";
import BuildIcon from "@mui/icons-material/Build";
import DescriptionIcon from "@mui/icons-material/Description";

import lofi from "../assets/lofiWallpaper.jpg";

import Header from "./Header.js";
import Projects from "./Projects/Projects.js";
import AboutMe from "./AboutMe.js";
import Resume from "./Resume/Resume.js";

export default function MobileView() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [popOpen, setPopOpen] = useState(false);
  const [openElement, setOpenElement] = useState(null);

  const handleClick = (e, text) => {
    if (openElement) {
      setOpenElement(null);
    }
    setAnchorEl(e.target);
    setPopOpen(!popOpen);
    handleElement(text);
  };

  const handleClose = () => {
    setPopOpen(false);
    setAnchorEl(null);
    setOpenElement(null);
  };

  const handleElement = (t) => {
    setOpenElement(t.text);
  };

  const renderSwitch = (element) => {
    switch (element) {
      case "About Me":
        return <AboutMe handleClose={handleClose} />;
      case "Projects":
        return <Projects handleClose={handleClose} />;
      case "Resume":
        return <Resume handleClose={handleClose} />;
      default:
        return null;
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

  return (
    <Container
      sx={{
        padding: "30px",
        bgcolor: "$b56146",
        backgroundImage: `url(${lofi})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "cover",
        height: "100vh",
        width: "100vw",
      }}
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
              <ListItemIcon sx={{ color: "white" }}>
                {iconSwitch(text)}
              </ListItemIcon>
              <ListItemText
                primary={text}
                sx={{ color: "white", textAlign: "center" }}
                primaryTypographyProps={{
                  fontSize: 22,
                  fontWeight: "bold",
                }}
              />
              <ListItemIcon sx={{ justifyContent: "end", color: "white" }}>
                {iconSwitch(text)}
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Popover
        id="simple-mobile-popover"
        open={popOpen}
        onClose={handleClose}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        PaperProps={{
          style: {
            backgroundColor: "#f0a05a",
          },
        }}
      >
        {renderSwitch(openElement)}
      </Popover>
    </Container>
  );
}

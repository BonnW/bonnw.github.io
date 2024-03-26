import React, { useState } from "react";

import {
  Container,
  Box,
  Typography,
  Button,
  Fade,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import lofi from "../assets/lofiWallpaper.jpg";

import Header from "./Header.js";
import Projects from "./Projects/Projects.js";
import Posts from "./Posts/Posts.js";
import AboutMe from "./AboutMe.js";
import Resume from "./Resume/Resume.js";

export default function MobileView() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [popOpen, setPopOpen] = useState(false);
  const [openElement, setOpenElement] = useState(null);

  const handleClick = (e, text) => {
    if (!anchorEl) {
      setAnchorEl(e.currentTarget);
    }
    setPopOpen(!popOpen);
    handleElement(text);
    console.log(text);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setPopOpen(!popOpen);
  };

  const handleElement = (t) => {
    setOpenElement(t);
  };

  const renderSwitch = (element) => {
    switch (element) {
      case "About Me":
        return <AboutMe handleClosePopover={handleClose} />;
      case "Projects":
        return <Projects handleClosePopover={handleClose} />;
      case "Resume":
        return <Resume handleClosePopover={handleClose} />;
      default:
        return <Box />;
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
        backgroundPosition: "center",
      }}
    >
      <Header />
      <List>
        {["About Me", "Projects", "Resume"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              onClick={(e) => {
                handleClick(e);
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
      <Box
        sx={{
          // border: "2px solid black",
          marginBottom: "40px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {renderSwitch(openElement)}
      </Box>
    </Container>
  );
}

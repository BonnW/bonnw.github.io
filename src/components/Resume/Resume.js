import React, { useState } from "react";

import { Container, Typography, Box, Button, Fade } from "@mui/material";
import XIcon from "@mui/icons-material/X";

import resumePDF from "../../assets/Bonn_Resume_25MAR.pdf#view=FitH";

export default function Resume({ handleClose }) {
  const [faded, setFaded] = useState(false);

  const triggerFadein = () => {
    console.log(faded);
    console.log("add fade in effect");
    setFaded(true);
  };

  useState(() => {
    setTimeout(triggerFadein, 300);
  }, []);

  // const handleButtonClick = () => {
  //   handleClosePopover();
  // };

  return (
    <Container
      sx={{
        width: `calc(100vw - 260px)`,
        padding: "30px",
        height: "90vh",
        // bgcolor: "#b56147",
      }}
    >
      <Box
        sx={{
          // border: "2px solid black",
          marginBottom: "40px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Fade in={faded}>
          <Typography variant="h4">
            "Sure! Here's a copy of my Resume."
          </Typography>
        </Fade>
        <Button sx={{ color: "#664455" }} onClick={handleClose}>
          <XIcon />
        </Button>
      </Box>

      <iframe
        id="resumePDF"
        title="PDF viewer"
        src={resumePDF}
        style={{
          width: "100%",
          height: "80%",
          border: "none",
        }}
      />
    </Container>
  );
}

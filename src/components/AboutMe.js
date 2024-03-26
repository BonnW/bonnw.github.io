import React, { useState } from "react";
import { Container, Typography, Box, Button, Fade } from "@mui/material";
import XIcon from "@mui/icons-material/X";

export default function AboutMe({ handleClose }) {
  const [faded, setFaded] = useState(false);

  const triggerFadein = () => {
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
        // width: `calc(100vw - 260px)`,
        height: "620px",
        padding: "30px",
        bgcolor: "$b56146",
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
        <Typography variant="h3">About Me?</Typography>
        <Button sx={{ color: "#664455" }} onClick={handleClose}>
          <XIcon />
        </Button>
      </Box>
      <Box
        sx={{
          paddingBottom: "20px",
        }}
      >
        <Fade in={faded}>
          <Typography variant="h4" gutterBottom>
            Experienced IT and Software professional with a versatile skill set
            spanning technical support, project management, and web development.
          </Typography>
        </Fade>
        <Fade in={faded}>
          <Typography variant="h4">
            With a demonstrated history of delivering impactful solutions across
            various industries, I excel in optimizing systems, enhancing user
            experiences, and driving operational efficiency.
          </Typography>
        </Fade>
      </Box>
    </Container>
  );
}

import React, { useState } from "react";
import { Container, Typography, Box, Button, Fade } from "@mui/material";
import XIcon from "@mui/icons-material/X";

export default function AboutMe({ handleClose }) {
  const [faded, setFaded] = useState(false);
  const [fadeLonger, setFadeLonger] = useState(false);
  const [fadeEvenLonger, setFadeEvenLonger] = useState(false);

  const triggerFadein = () => {
    setFaded(true);
  };

  const triggerFadeLonger = () => {
    setFadeLonger(true);
  };

  const triggerFadeEvenLonger = () => {
    setFadeEvenLonger(true);
  };

  useState(() => {
    setTimeout(triggerFadein, 300);
    setTimeout(triggerFadeLonger, 900);
    setTimeout(triggerFadeEvenLonger, 2200);
  }, []);

  return (
    <Container
      sx={{
        padding: "30px",
        bgcolor: "$b56146",
      }}
    >
      <Box
        sx={{
          marginBottom: "40px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Fade in={faded}>
          <Typography variant="h4">About Me?</Typography>
        </Fade>

        <Button sx={{ color: "#664455" }} onClick={handleClose}>
          <XIcon />
        </Button>
      </Box>
      <Box
        sx={{
          paddingBottom: "20px",
        }}
      >
        <Fade in={fadeLonger}>
          <Typography variant="h5" gutterBottom>
            Experienced IT and Software professional with a versatile skill set
            spanning technical support, project management, and web development.
          </Typography>
        </Fade>
        <Fade in={fadeEvenLonger}>
          <Typography variant="h5">
            With a demonstrated history of delivering impactful solutions across
            various industries, I excel in optimizing systems, enhancing user
            experiences, and driving operational efficiency.
          </Typography>
        </Fade>
      </Box>
    </Container>
  );
}

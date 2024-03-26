import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import ProjectCard from "./ProjectCard";
import projectsData from "../../data/projects.json";
import { Typography, Button, Fade } from "@mui/material";
import XIcon from "@mui/icons-material/X";

export default function Projects({ handleClosePopover }) {
  const [loaded, setLoaded] = useState(true);
  const [faded, setFaded] = useState(false);

  const handleButtonClick = () => {
    handleClosePopover();
  };

  const triggerFadein = () => {
    setFaded(true);
  };

  useState(() => {
    setTimeout(triggerFadein, 300);
  }, []);

  return (
    <Box
      sx={{
        border: "2px solid black",
        padding: "30px",
        bgcolor: "#64455",
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
            "Here are a few of the projects I've worked on"
          </Typography>
        </Fade>
        <Button sx={{ color: "#664455" }} onClick={handleButtonClick}>
          <XIcon />
        </Button>
      </Box>
      <Grid
        container
        spacing={6}
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        {loaded && projectsData ? (
          projectsData.map((project) => (
            <Grid item xs={6} sm={2} md={3} key={project._id}>
              <ProjectCard project={project} />
            </Grid>
          ))
        ) : (
          <p>failed to load projects</p>
        )}
      </Grid>
    </Box>
  );
}

import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

import pic from "../../assets/GitHubLogo.png";

export default function ProjectCard(props) {
  let hyperLinkURL = props.project.projectLink;
  return (
    <Card
      key={props._id}
      sx={{
        bgcolor: "#fbf6cb",
      }}
    >
      <CardContent>
        <CardMedia
          component="img"
          height="200"
          image={pic}
          alt="github logo"
          sx={{
            mb: 1.2,
            border: "1px solid black",
            borderRadius: 2,
          }}
        />
        <Typography
          variant="h5"
          sx={{
            my: 1,
          }}
        >
          {props.project.title}
        </Typography>
        <Typography gutterBottom>{props.project.details}</Typography>
        {hyperLinkURL !== "private" ? (
          <Link target="_blank" href={hyperLinkURL}>
            {hyperLinkURL}
          </Link>
        ) : (
          <Typography>Private</Typography>
        )}
      </CardContent>
    </Card>
  );
}

import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

import pic from "../assets/SampleProfilePic.jpg";

export default function Header() {
  return (
    <Box
      sx={{
        paddingTop: 3,
        paddingBottom: 2,
      }}
    >
      <Avatar
        alt="goat"
        src={pic}
        sx={{
          border: "2px solid black",
          width: 180,
          height: 180,
          t: 10,
          m: "auto",
        }}
      />
      <Typography
        variant="h4"
        sx={{
          paddingTop: 1,
          fontWeight: "bold",
          fontSize: 22,
          color: "white",
        }}
      >
        Bonn W.
      </Typography>
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          fontSize: 22,
          color: "white",
          pb: 2,
        }}
      >
        Full-Stack Developer
      </Typography>
      <Box
        sx={{
          mx: 2,
          px: 3,
          pt: 0.6,
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "white",
          border: "2px solid black",
        }}
      >
        <Link color="inherit" target="_blank" href="https://github.com/BonnW">
          <GitHubIcon sx={{ fontSize: 40 }} />
        </Link>
        <Link
          color="inherit"
          target="_blank"
          href="https://www.linkedin.com/in/bonn-wonghansa/"
        >
          <LinkedInIcon sx={{ fontSize: 40 }} />
        </Link>
        <Link
          color="inherit"
          target="_blank"
          href="https://twitter.com/heyitsbonn"
        >
          <TwitterIcon sx={{ fontSize: 40 }} />
        </Link>
      </Box>
    </Box>
  );
}

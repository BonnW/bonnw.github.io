import React, { Component, useEffect } from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";

import lofi from "../assets/lofiWallpaper.jpg";

const sidebarWidth = 260;

const StyledBox = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
  flexGrow: 1,
  display: "none",
  backgroundImage: `url(${lofi})`,
  backgroundColor: "black",
  height: "100vh",
  width: `calc(100vw - ${sidebarWidth}px)`,
  marginLeft: `${sidebarWidth}px`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  // overflowX: "hidden",
  justifyContent: "center",
  alignItems: "center",
  // [theme.breakpoints.down("lg")]: {
  //   backgroundImage: "",
  // },
}));

const YouTubePlayer = ({ videoId }) => {
  let player;

  useEffect(() => {
    // on mount, check to see if the API script is already loaded
    if (!window.YT) {
      // If not, load the script asynchronously
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";

      // onYouTubeIframeAPIReady will load the video after the script is loaded
      window.onYouTubeIframeAPIReady = this.initilizePlayer;
      document.body.appendChild(script);
    } else {
      initilizePlayer();
    }

    // init youtube player when component mounts

    // window.onYouTubeIframeAPIReady = initilizePlayer;

    // Cleanup function to remove the youtube player when component unmounts
    return () => {
      if (player) {
        player.destroy();
      }
    };
  }, []);

  const initilizePlayer = () => {
    window.YT.ready(() => {
      player = new window.YT.Player("youtube-player", {
        height: "390",
        width: "640",
        videoId: videoId,
        playerVars: {
          autoplay: 0,
          controls: 1,
          rel: 0,
        },
        events: {
          // onReady: onPlayerReady,
          // onStateChange: onPlayerStateChange,
        },
      });
    });
  };

  // const onPlayerReady = (event) => {
  //   event.target.playVideo();
  // };

  // const onPlayerStateChange = (event) => {
  //   console.log("player state change event triggered", event.data);
  // };

  return (
    <div
      id="youtube-player"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    ></div>
  );
};

export default function Wallpaper() {
  return (
    <StyledBox>
      <YouTubePlayer videoId="7NOSDKb0HlU" />
    </StyledBox>
  );
}

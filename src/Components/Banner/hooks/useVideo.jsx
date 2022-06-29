import React from "react";
import styles from "./../Banner.module.css";
import YouTube from "react-youtube";

const Video = ({ ids }) => {
  const opts = {
    width: "100%",
    height: "100%",
    playerVars: {
      mute: 1,
      autoplay: 1,
      controls: 0,
      accelerometer: 0,
      autohide: 1,
      wmode: "opaque",
      enablejsapi: 1,
      origin: "http://localhost:3000",
      display: "100%",
      playlist: [ids],
      loop: 1,
    },
  };
  return <YouTube className={styles.background_video} opts={opts} />;
};

export default Video;

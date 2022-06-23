import React from "react";
import styles from "./Banner.module.css";
import YouTube from "react-youtube";

const Banner = () => {
  return (
    <div className={styles.banner_container}>
      <YouTube
        videoId="oImEeiCiYTk"
        className={styles.background_video}
        opts={{
          width: "100%",
          height: "100%",
          playerVars: {
            autoplay: 1,
            controls: 2,
            mute: 1,
            accelerometer: 1,
            autohide: 1,
            wmode: "opaque",
            enablejsapi: 1,
            origin: "http://localhost:3000",
            display: "100%",
          },
        }}
      />
      <div className={styles.banner_gradient}>
      <div>
        <div style={{ height: "350px" }}></div>
      </div>
        <div className={styles.banner_title}>
          <h1>Banner</h1>
        </div>

        <div className={styles.banner_buttons}>
          <button
            className={styles.banner_button}
            onClick={() => {
              console.log("click");
            }}
          >
            Reproducir
          </button>
          <button
            className={styles.banner_button}
            onClick={() => {
              console.log("click");
            }}
          >
            Más información
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

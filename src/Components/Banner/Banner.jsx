import React from "react";
import styles from "./Banner.module.css";
import Video from "./hooks/Video";

const Banner = () => {
        /**
        * TODO: useApi
      */
  return (
    <div className={styles.banner_container}>
      <Video ids={["oImEeiCiYTk", "Rp7YtN_094I"]}/>
      {/* <Video ids={["F4wgN8IMf3Q", "8koye8fa4CA", "Rp7YtN_094I"]}/> */}
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

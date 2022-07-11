import React from "react";
import styles from "./Banner.module.css";
import useBanner from "./hooks/useBanner";
import Video from "./hooks/useVideo";
import Separator from "../Separator/Separator"

const Banner = () => {
  const [bannerVideos, bannerImage, title, description, isLoading] = useBanner();

  return (
    <div
      className={`${styles.banner_container}`}
      style={
        isLoading || bannerVideos.length > 1
          ? { backgroundImage: "none" }
          : {
              backgroundImage: `url(${bannerImage})`,
            }
      }
    >
      {!isLoading && bannerVideos.length > 0 && <Video ids={bannerVideos} />}
      <div className={styles.banner_gradient}>
      <Separator height={"350px"}/>

        <div className={styles.banner_title}>
          <h1>{title}</h1>
        </div>

        <div className={styles.banner_description}>
          <p>{description}</p>
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

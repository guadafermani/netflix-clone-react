import React, { useEffect, useState } from "react";
import { apiBuilder } from "../../apiConfig/apiBuilder";
import { apiQuality } from "../../apiConfig/apiConfig";
import styles from "./Card.module.css";

const Card = (value) => {
  const res = value.movie;
  const title = res.title || res.name;
  const [img, setImg] = useState(null);

  const backgroundImage = async (value) => {
    const res = await apiBuilder.tryGetImage(
      value.backdrop_path,
      apiQuality.posterMedium
    );
    return res;
  };

  const setBackgroundImage = async () => {
    const url = await backgroundImage(res);
    setImg(url);
  };

  useEffect(() => {
    setBackgroundImage();
  }, [value]);

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${img})`,
        }}
        className={styles.card}
      >
        <h1 className={styles.card_title}>{title}</h1>
      </div>
    </div>
  );
};

export default Card;

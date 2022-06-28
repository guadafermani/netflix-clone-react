import React, { useState, useEffect } from "react";
import { apiBuilder } from "../../../apiConfig/apiBuilder";
import {
  apiEntity,
  apiLanguage,
  apiQuality,
} from "../../../apiConfig/apiConfig";
import useApi from "../../../hooks/useApi";
import { randomIndex } from "../../../utils/utils";

const useBanner = () => {
  const [movies, error, isLoading, language] = useApi(apiEntity.popularMovies);
  const [bannerImage, setBannerImage] = useState(null);
  const [bannerVideos, setBannerVideos] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState("");

  const backgroundImage = async (movie) => {
    const res = await apiBuilder.tryGetImage(
      movie.backdrop_path,
      apiQuality.backdropLarge
    );
    return res;
  };

  const movieVideos = async (movie) => {
    const res = await apiBuilder.tryGetVideosById(
      apiEntity.movieById,
      movie.id,
      apiLanguage.language
    );
    return res;
  };

  const getRandomMovie = () => {
    if (!error && movies.length === 0) {
      return;
    } else {
      const randomMovie = movies[randomIndex(0, movies.length - 1)];
      setSelectedMovie(randomMovie);
      setBannerImage(backgroundImage(selectedMovie));
      const selectedMovieVideos = movieVideos(selectedMovie);

      const movieVideosIds = [];
      for (let video of Object.entries(selectedMovieVideos)) {
        if (video.site === "YouTube") {
          movieVideosIds.push(video.key);
        }
      }
      setBannerVideos(movieVideosIds);
    }
  };

  useEffect(() => {
    getRandomMovie();
  }, [movies]);
  return [bannerVideos, bannerImage, isLoading];
};

export default useBanner;

      /*       movieVideos.forEach(video => {
        if (video.site === "YouTube") {
            movieVideosIds.push(video.key);
        }
      }); */
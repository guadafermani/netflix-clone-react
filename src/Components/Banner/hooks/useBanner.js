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
  const [movies, isLoading, error] = useApi(apiEntity.popularMovies);
  const [bannerImage, setBannerImage] = useState(null);
  const [bannerVideos, setBannerVideos] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const backgroundImage = async (movie) => {
    const res = await apiBuilder.tryGetImage(
      movie.backdrop_path,
      apiQuality.backdropLarge
    );
    return res;
  };

  const movieVideos = async (movie) => {
    if (movie) {
      const res = await apiBuilder.tryGetVideosById(
        apiEntity.movieById,
        movie.id,
        apiLanguage.language
      );
      return res;
    }
  };

  const getRandomMovie = async () => {
    if (isLoading && movies.length === 0) {
      return;
    } else {
      const randomMovie = movies[randomIndex(0, movies.length - 1)];

      setSelectedMovie(randomMovie);

      const res = await backgroundImage(randomMovie);

      setBannerImage(res);
    }
  };

  const setVideo = async () => {
    const selectedMovieVideos = await movieVideos(selectedMovie);

    if (selectedMovieVideos.length > 0) {
      const movieVideosIds = selectedMovieVideos.map((video) => {
        if (video.site === "YouTube") {
          return video.key;
        }
      });

      setBannerVideos(movieVideosIds);
    } else {
      setBannerVideos([]);
    }
  };

  useEffect(() => {
    if (!isLoading && movies.length > 0) {
      setVideo();
    }
  }, [selectedMovie]);

  useEffect(() => {
    getRandomMovie();
  }, [movies, isLoading]);

  return [bannerVideos, bannerImage, isLoading];
};

export default useBanner;

/*       movieVideos.forEach(video => {
        if (video.site === "YouTube") {
            movieVideosIds.push(video.key);
        }
      }); */

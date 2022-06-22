import API_KEY from "./apiKey";

const tmdb = {
    urlBase: "https://api.themoviedb.org/3",
    apiKey: `?api_key=${API_KEY}`,
    entity: {
        // Movies
        popularMovies: "/movie/popular",
        topRatedMovies: "/movie/top_rated",
        latestMovies: "/movie/latest",
        movieUpcoming: "/movie/upcoming",
        movieById: "/movie",
        // TV
        popularTv: "/tv/popular",
        topRatedTv: "/tv/top_rated",
        latestTv: "/tv/latest",
        tvById: "/tv",
    },
    video: "/videos",
    language: {
        en: "&language=en-US",
        es: "&language=es-ES",
      },
      pagination: "&page=",
      imageUrl: "https://image.tmdb.org/t/p",
      quality: {
        posterSmall: "/w200",
        posterMedium: "/w300",
        posterLarge: "/w500",
        backdropSmall: "/w300",
        backdropMedium: "/w780",
        backdropLarge: "/w1280",
      },
      /**
        * TODO: add lists to create my list.
      */
}

export default tmdb;
import React, { useEffect, useState } from "react";
import { apiBuilder } from "../apiConfig/apiBuilder";
import { apiLanguage } from "../apiConfig/apiConfig";

const MAX_PAGINATION = 1000;
const MIN_PAGINATION = 1;

const useApi = (entity, lang = apiLanguage.spanish, pagination = MIN_PAGINATION) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(pagination);
  const [language, setLanguage] = useState(lang);

  const getMovies = async () => {
    setIsLoading(true);
    setError(null);

    const res = await apiBuilder.tryGet(entity, lang, page);

    if (res.length === 0) {
      setError("Error al cargar las películas");
    } else {
      setMovies(res);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, [page]);

  const nextPage = () => {
    (page < MAX_PAGINATION) ? setPage(page + 1) : setPage(MIN_PAGINATION);
  }

  const previousPage = () => {
    page > MIN_PAGINATION ? setPage(page - 1) : setPage(MAX_PAGINATION);
  }

  const changeLanguage = (newLanguage) => {
    setLanguage(apiLanguage.newLanguage);
  }

  return [movies, isLoading, error, nextPage, previousPage, language, changeLanguage];
};

export default useApi;

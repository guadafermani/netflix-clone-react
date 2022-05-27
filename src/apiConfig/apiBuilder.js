import axios from "axios";
import tmdb from "./apiConfig";
import API_KEY from "./apiKey";

export const apiBuilder = {
    tryGet: async (entity, lang = 'es', page = 1) => {
        const url = `${tmdb.urlBase}${tmdb.entity[entity]}${API_KEY}${tmdb.languaje[lang]}${tmdb.pagination}${page}`;
        try{
            const res = await axios(url);
            return res.data.results;
        } catch (error) {
            return error.message;
        }
    },
    tryGetById: async (entity, id, lang = 'es', page = 1, video = false) => {
        const getvideo = video ? tmdb.video : "";
        const url = `${tmdb.urlBase}${tmdb.entity[entity]}${id}${getvideo}${API_KEY}${tmdb.languaje[lang]}${tmdb.pagination}${page}`;
        try{
            const res = await axios(url);
            return res.data.results;
        } catch (error) {
            return error.message;
        }
    }
}
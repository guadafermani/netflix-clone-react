import axios from "axios";
import tmdb from "./apiConfig";

export const apiBuilder = {
    tryGet: async (entity, lang = "es", page = 1) => {
        const url = `${tmdb.urlBase}${tmdb.entity[entity]}${tmdb.apiKey}${tmdb.language[lang]}${tmdb.pagination}${page}`;
        try{
            const res = await axios(url);
            return res.data.results;
        } catch (error) {
            return error.message;
        }
    },
    tryGetById: async (entity, id, lang = "es") => {
        const url = `${tmdb.urlBase}${tmdb.entity[entity]}/${id}${tmdb.apiKey}${tmdb.language[lang]}`;
        try{
            const res = await axios(url);
            return res.data;
        } catch (error) {
            return error.message;
        }
    },
    tryGetVideosById: async (entity, id, lang = "es") => {
        const url = `${tmdb.urlBase}${tmdb.entity[entity]}/${id}${tmdb.video}${tmdb.apiKey}${tmdb.language[lang]}`;
        try{
            const res = await axios(url);
            return res.data.results;
        } catch (error) {
            return error.message;
        }
    },
    tryGetImage: async (path, quality) => {
        return `${tmdb.imageUrl}${tmdb.quality[quality]}${path}`;
    }
}
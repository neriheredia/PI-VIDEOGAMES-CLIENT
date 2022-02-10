import axios from 'axios'

export const publicRequest = axios.create({
    baseURL: "https://back-videogames-neri.herokuapp.com/api/"
})
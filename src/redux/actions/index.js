import { publicRequest } from '../../config/rutas/requestMethod'


/* FUNCIONANDO BIEN */
export function getGames() {
    return async function (dispatch) {
        const result = await publicRequest.get('videogames')
        return dispatch({
            type: 'GET_VIDEOGAMES',
            payload: result.data
        })
    }
}

/* FUNCIONANDO BIEN */
export function getByName(name) {
    return async function (dispatch) {
        try {
            const result = await publicRequest.get(`videogames?name=${name}`)
            return dispatch({
                type: 'GET_BY_NAME',
                payload: result.data
            })
        } catch (error) {
            if (error) return alert('Video Juego no existe!')
        }
    }
}

/* FUNCIONANDO BIEN */
export function getGenres() {
    return async function (dispatch) {
        try {
            const allGenres = await publicRequest.get("genres")
            return dispatch({
                type: 'GET_GENRES',
                payload: allGenres.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

/* FUNCIONANDO BIEN */
export function getPlatforms() {
    return async function (dispatch) {
        try {
            const results = await publicRequest.get("platforms")
            return dispatch({
                type: "GET_PLATFORMS",
                payload: results.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

/* FUNCIONANDO BIEN */
export function getFavorite(payload) {
    return { type: 'GET_FAVORITE', payload }
}

/* FUNCIONANDO BIEN */
export function filterGenre(payload) {
    return {
        type: "FILTER_GENRE",
        payload,
    }
}

export function loadingFunctionFalse(payload) {
    return {
        type: 'SET_LOADING_FALSE',
        payload
    }
}
export function loadingFunctionTrue(payload) {
    return {
        type: 'SET_LOADING_TRUE',
        payload
    }
}

/* FUNCIONANDO BIEN */
export function filterCreatedDataBase(payload) {
    return {
        type: "FILTER_DATA_BASE",
        payload
    }
}

/* FUNCIONANDO BIEN */
export function filterRating(payload) {
    return {
        type: 'ORDER_RATING',
        payload
    }
}

/* FUNCIONANDO BIEN */
export function filterAlfabetico(payload) {
    return {
        type: 'ORDER_ALFABETICO',
        payload
    }
}

/* FUNCIONANDO BIEN */
export function filterPlatforms(payload) {
    return {
        type: "FILTER_PLATFORMS",
        payload,
    }
}

/* FUNCIONANDO BIEN */
export function createVideoGame(payload) { //TRAIGO LA INFO NECESARIA PARA EL FORMULARIO DESDE EL POST DEL BACK
    return async function (dispatch) {
        const response = await publicRequest.post("videogame", payload)
        return response;
    }
}

/* FUNCIONANDO BIEN */
export function getDetail(id) {
    return async function (dispatch) {
        try {
            const details = await publicRequest.get("videogame/" + id)
            return dispatch({
                type: "GET_DETAIL",
                payload: details.data
            })
        } catch (error) {
            // if (error) return window.location.replace('/')
            console.log(error);
        }
    }
}

/* FUNCIONANDO BIEN */
export function addFavoriteGame(payload) {
    return { type: 'ADD_GAME_FAVORITE', payload }
}

/* FUNCIONANDO BIEN */
export function removeFavorite(payload) {
    return {
        type: 'REMOVE_FAVORITE',
        payload,
    };
}

/* FUNCIONANDO BIEN */
export function resetAllGames(payload) {
    return {
        type: 'RESET_GAMES',
        payload
    }
}
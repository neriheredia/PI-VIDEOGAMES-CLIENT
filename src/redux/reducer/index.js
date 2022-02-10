const initialState = {
    allGames: [],
    oneGames: [],
    allGenres: [],
    platforms: [],
    favoriteGame: [],
    detail: {},
    loading: true
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LOADING_FALSE':
            return {
                ...state,
                loading: false
            }
        case 'SET_LOADING_TRUE':
            return {
                ...state,
                loading: true
            }
        /* FUNCIONANDO BIEN */
        case 'GET_VIDEOGAMES':
            return {
                ...state,
                allGames: action.payload,
                oneGames: action.payload
            }
        /* FUNCIONANDO BIEN */
        case 'GET_BY_NAME':
            return {
                ...state,
                oneGames: action.payload
            }
        /* FUNCIONANDO BIEN */
        case 'GET_GENRES': {
            return {
                ...state,
                allGenres: action.payload
            }
        }
        /* FUNCIONANDO BIEN */
        case 'GET_PLATFORMS':
            return {
                ...state,
                platforms: action.payload
            }
        /* FUNCIONANDO BIEN */
        case 'GET_FAVORITE':
            return {
                ...state,
                favoriteGame: JSON.parse(localStorage.getItem("gameFavorite"))
            }
        /* FUNCIONANDO BIEN */
        case 'ORDER_ALFABETICO':
            const orderFilter = action.payload === 'asc' ?
                [...state.oneGames].sort((a, b) => a.name > b.name ? 1 : -1)
                :
                [...state.oneGames].sort((a, b) => a.name > b.name ? -1 : 1)
            return {
                ...state,
                oneGames: orderFilter
            }
        /* FUNCIONANDO BIEN */
        case 'ORDER_RATING': {
            const filterRating = action.payload === 'best' ?
                [...state.oneGames].sort((b, a) => a.rating - b.rating) :
                [...state.oneGames].sort((b, a) => b.rating - a.rating)
            return {
                ...state,
                oneGames: filterRating
            }
        }
        /* FUNCIONANDO BIEN */
        case "FILTER_DATA_BASE":
            const createdFilter = action.payload === "true" ? state.allGames.filter(e => e.createdDb) : state.allGames
            return {
                ...state,
                oneGames: createdFilter
            }

        /* FUNCIONANDO BIEN */
        case "FILTER_GENRE":
            const filteGenres = action.payload === "all" ? state.allGames :
                state.allGames.filter(e => {
                    for (let i = 0; i < e.genres.length; i++) {
                        if (e.genres[i].name === action.payload) {
                            return true
                        }
                    }
                    return undefined
                })
            return {
                ...state,
                oneGames: filteGenres
            }
        /* FUNCIONANDO BIEN */
        case "FILTER_PLATFORMS":
            const filterPlatforms = action.payload === "all" ? state.allGames :
                state.allGames.filter(e => {
                    for (let i = 0; i < e.platforms.length; i++) {
                        if (e.platforms[i].name === action.payload) {
                            return true
                        }
                    }
                    return undefined
                })
            return {
                ...state,
                oneGames: filterPlatforms
            }
        /* FUNCIONANDO BIEN */
        case 'CREATE_GAME':
            return {
                ...state
            }
        /* FUNCIONANDO BIEN */
        case "GET_DETAIL":
            return {
                ...state,
                detail: action.payload
            }
        /* FUNCIONANDO BIEN */
        case 'REMOVE_FAVORITE':
            return {
                ...state,
                favoriteGame: state.favoriteGame.filter(
                    (game) => game.id !== action.payload
                ),
            };
        /* FUNCIONANDO BIEN */
        case 'RESET_GAMES':
            return {
                ...state,
                oneGames: [...state.allGames]
            }
        /* FUNCIONANDO BIEN */
        case 'ADD_GAME_FAVORITE':
            const games = state.favoriteGame.find(game => game.id === action.payload.id)
            if (!games) {
                return {
                    ...state,
                    favoriteGame: localStorage.setItem("gameFavorite", JSON.stringify([...state.favoriteGame, action.payload]))
                }
            }
            return {
                ...state,
                favoriteGame: localStorage.setItem("gameFavorite", JSON.stringify([...state.favoriteGame]))
            }
        default:
            return state
    }
}

export default rootReducer;
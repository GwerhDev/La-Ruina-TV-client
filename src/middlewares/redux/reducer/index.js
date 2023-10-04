import { Content } from "../../../interfaces/Content";
import {
    NEXT_VISOR,
    GET_INFO,
    GET_MEDIA,
    RESET_MEDIA,
    RESET_VISOR,
    OPTION,
    RESET_OPTION,
    GET_FAVORITES,
    GET_YT_SUBSCRIBERS,
    CURRENT_USER,
    GET_USER_DATA,
    GET_CATEGORIES,
    GET_GENRES,
    GET_MEDIATYPES,
    GET_SEARCH,
    GET_USERS,
    ERROR,
    GET_FULL_DETAIL,
    GET_PRODUCERS
} from "../../misc";


const initialState = {
    /*----------------Admin----------------*/
    YTSub: false,

    /*----------------Auth----------------*/
    currentUser: null,
    option: '',

    /*----------------Media----------------*/
    dbMediatypes: [],
    dbGenres: [],
    dbCategories: [],
    dbProducers: [],
    favorites: [],
    userList: [],
    mediaByCategory: [],
    mediaList: [new Content()],
    visorList: [new Content()],
    infoDetailViewer: new Content(),
    fullDetail: {},
    error: "",
    nextVisor: false,


    /*------------Filter&Search------------*/
    searchedMedia: [],
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ERROR: 
            return {
                ...state,
                error: action.payload
            }
        case GET_FULL_DETAIL: 
            return {
                ...state,
                fullDetail: action.payload
            }
        case GET_USERS:
            return {
                ...state,
                userList: action.payload
            }
        case GET_PRODUCERS:
            return {
                ...state,
                dbProducers: action.payload
            }
        case GET_SEARCH:
            return {
                ...state,
                searchedMedia: action.payload
            };

        case GET_CATEGORIES:
            return {
                ...state,
                dbCategories: action.payload.categories,
                mediaByCategory: action.payload.mediaByCategory
            };

        case GET_GENRES:
            return {
                ...state,
                dbGenres: action.payload
            }
        case GET_MEDIATYPES:
            return {
                ...state,
                dbMediatypes: action.payload
            };

        /*----------------YT----------------*/
        case GET_YT_SUBSCRIBERS:
            return {
                ...state,
                YTSub: action.payload
            };

        /*----------------Auth----------------*/
        case CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            };

        case GET_USER_DATA:
            return {
                ...state,
                currentUser: action.payload
            };

        case OPTION:
            return {
                ...state,
                option: action.payload
            };

        case RESET_OPTION:
            return {
                ...state,
                option: ''
            };

        /*----------------Media----------------*/
        case GET_FAVORITES:
            return {
                ...state,
                favorites: action.payload
            };

        case GET_MEDIA:
            return {
                ...state,
                mediaList: action.payload,
                visorList: action.payload,
            };

        case GET_INFO:
            return {
                ...state,
                infoDetailViewer: action.payload
            };

        case RESET_MEDIA:
            return {
                ...state,
                infoDetailViewer: {
                    linkimg: "",
                    idLinkSPOTY: "",
                    idLinkDRIVE: "",
                    urlLinkWEB: "",
                    urlLinkDOWNLOAD: "",
                    info: "",
                    title: "",
                    artist: "",
                    idLinkYT: "",
                    genre: [],
                    category: [],
                    mediatype: [],
                },
            };

        case NEXT_VISOR:
            return {
                ...state,
                nextVisor: state.visorList.length > 1 ? [state.visorList[action.payload]] : false
            };
            
        case RESET_VISOR:
            return {
                ...state,
                nextVisor: false
            };

        default:
            return { ...state };
    }
}
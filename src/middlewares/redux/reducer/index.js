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
    GET_SEARCH
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
    mediaByCategory: [],
    favorites: [],
    mediaList: [{
        id: '',
        idMedia: [''],
        mediaType: [''],
        title: [''],
        artist: [''],
        tag: [''],
        visorImage: [''],
        sliderImage: [''],
        icon: [''],
        categories: [''],
        actionButton: [''],
        info: [''],
        genre: ['']
    }],

    visorList: [{
        id: '',
        idMedia: [''],
        mediaType: [''],
        title: [''],
        artist: [''],
        tag: [''],
        visorImage: [''],
        sliderImage: [''],
        icon: [''],
        categories: [''],
        actionButton: [''],
        info: [''],
        genre: ['']
    }],

    nextVisor: false,

    infoDetailViewer: [{
        linkimg: "",
        idLinkSPOTY: "",
        idLinkDRIVE: "",
        urlLinkWEB: "",
        urlLinkDOWNLOAD: "",
        categories: "",
        info: "",
        connectionId: "",
        title: "",
        genre: "",
        artist: "",
        idLinkYT: "",
        mediaType: ""
    }],

    /*------------Filter&Search------------*/
    searchedMedia: [],
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
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
                infoDetailViewer: [{
                    linkimg: "",
                    idLinkSPOTY: "",
                    idLinkDRIVE: "",
                    urlLinkWEB: "",
                    urlLinkDOWNLOAD: "",
                    categories: "",
                    info: "",
                    connectionId: "",
                    title: "",
                    genre: "",
                    artist: "",
                    idLinkYT: "",
                    mediaType: ""
                }],
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
import {
    NEXT_VISOR,
    GET_INFO,
    GET_MEDIA,
    RESET_MEDIA,
    RESET_VISOR,
    OPTION,
    RESET_OPTION,
    GET_IDYT,
    __GOD_MODE__,
    RESET_IDYT,
    GET_ALL_LIKES,
    GET_YT_SUBSCRIBERS,
    CURRENT_USER,
    GET_USER_DATA,
    GET_CATEGORIES,
    GET_GENRES,
    GET_MEDIATYPES
} from "../../misc";

import iconYT from '../../../assets/images/yt-icon.png'
import iconSpty from '../../../assets/images/spty-icon.png'
import iconDrive from '../../../assets/images/drive-icon.png'
import iconWeb from '../../../assets/images/web-icon.png'
import iconDescarga from '../../../assets/images/descarga-icon.png'

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
    allUserLikes: [],
    ytPlayerState: '',
    typeMediaList:
    {
        musica:
        {
            idYT: { url: '', img: iconYT },
            idSpoty: { url: '', img: iconSpty },
            idDrive: { url: '', img: iconDrive }
        },
        serie:
        {
            idYT: { url: '', img: iconYT },
            idSpoty: { url: '', img: iconSpty },
            idDrive: { url: '', img: iconDrive },
        },
        app:
        {
            urlWeb: { url: '', img: iconWeb },
            idDrive: { url: '', img: iconDrive },
            urlDownload: { url: '', img: iconDescarga },
        },
        libro:
        {
            urlWeb: { url: '', img: iconWeb },
            idDrive: { url: '', img: iconDrive },
            urlDownload: { url: '', img: iconDescarga },
        }
    },
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
/*     categoryList: ["Sello Arruinados", 'Música', 'Estudio "La Ruina Records"', "En vivo", "App y descargables", "Literatura", "Series"],
 */
    /*------------Filter&Search------------*/
    filteredMedia: [],
    searchedMedia: [],
    mediaFound: {},
    mediaWithConnectionId: [],
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                dbCategories: action.payload
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
        /*----------------Admin----------------*/
        case __GOD_MODE__:
            window.location.reload()
            return {
                ...state,
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
        case GET_ALL_LIKES:
            return {
                ...state,
                allUserLikes: action.payload
            };
        case GET_IDYT:
            return {
                ...state,
                ytPlayerState: action.payload
            };
        case RESET_IDYT:
            return {
                ...state,
                ytPlayerState: ''
            };

        case GET_MEDIA:
            return {
                ...state,
                mediaList: action.payload,
                visorList: action.payload,
                searchedMedia: action.payload
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
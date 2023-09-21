import axios from 'axios'
import { URL_API } from '../../config'
import {
    NEXT_VISOR,
    RESET_VISOR,
    OPTION,
    RESET_OPTION,
    GET_IDYT,
    RESET_IDYT,
    GET_FAVORITES,
} from '../../misc'

/*-----------------Auth----------------*/
export function getOption(e) {
    return ({
        type: OPTION,
        payload: e
    })
}
export function resetOption() {
    return ({
        type: RESET_OPTION
    })
}

/*----------------Media----------------*/
export function getIdYT(idYT) {
    return {
        type: GET_IDYT,
        payload: idYT
    }
}

export function resetIdYT() {
    return {
        type: RESET_IDYT
    }
}

export function getNextVisor(index) {
    return {
        type: NEXT_VISOR,
        payload: index
    }
}
export function getResetVisor() {
    return {
        type: RESET_VISOR
    }
}

/*------------Filter&Search------------*/
export function loadingSearchSet() {

}

export function searchStateChange() {

}

export function totalMedia() {

}

export function getFavorites(userId) {
    return async function (dispatch) {
        await axios.post(`${URL_API}/favorites/`, { userId })
            .then(res => {
                dispatch({
                    type: GET_FAVORITES,
                    payload: res.data
                })
            })
            .catch(e => console.error(e))
    }
}


export function addLike() {
    return;
}
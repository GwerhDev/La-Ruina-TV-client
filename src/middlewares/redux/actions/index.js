import {
    NEXT_VISOR,
    RESET_VISOR,
    OPTION,
    RESET_OPTION,
    GET_IDYT,
    RESET_IDYT,
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

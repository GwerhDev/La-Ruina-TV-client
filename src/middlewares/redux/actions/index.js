import axios from 'axios'
import { URL_API } from '../../misc/config'
import { 
    GET_POSTS, 
    GET_INFO, 
    GET_CATEGORIAS, 
    GET_MEDIATYPE, 
    GET_MEDIAURL, 
    RESET_MEDIA, 
    NEXT_VISOR, 
    RESET_VISOR,
    OPTION,
    RESET_OPTION,
    LOGIN,
    SIGNUP,
    GET_PRODUCTS,
    GET_PRODUCT_DETAILS,
    POST_PRODUCT,   
    POST_POST,
    RESET_PRODUCT_DETAILS
    } from '../../misc'

/*-----------------Admin----------------*/
    export const postProduct = (post) => {
        return async function (dispatch) {
            let json = await axios.post(`http://localhost:8080/post/product`, post);
            return dispatch ({
                type: POST_PRODUCT,
                payload: json.data
            })
        }
    };
    export const postPost = (formData) => {
        return async function (dispatch) {


            const response = await axios.post(
                `http://localhost:8080/media/upload`,
                formData,
                {headers: {'Content-Type': 'multipart/form-data'}}
              );

            
            return dispatch ({
                type: POST_POST,
                payload: response.data
            })
        }
    };

    export const postPostContinue = (formData) => {
        return async function (dispatch) {
            const response = await axios.post(
                `http://localhost:8080/media/upload/continue`,
                formData,
                {headers: {'Content-Type': 'multipart/form-data'}}
              );
            return dispatch ({
                type: POST_POST,
                payload: response.data
            })
        }
    };

/*-----------------Auth----------------*/
export function getOption(e) {
    return({
        type: OPTION,
        payload: e
    })
}

export function resetOption() {
    return({
        type: RESET_OPTION
    })
}
export function login(email, password){
    return async function (dispatch){ 
        await axios.post(`${URL_API}/users/login`, {email, password})
        .then(res => {
            dispatch({
                type: LOGIN,
                payload: res.data
            })
        })
        .catch((e) => {
            console.log(e);
        })
    }
}

export const signup =
  (alias, email, password) => async (dispatch) => {
    try {
        const response = await axios.post(`${URL_API}/users/signup`, {
      alias,
      email,
      password
    });
    const data = await response.data;
    return dispatch({
      type: SIGNUP,
      payload: data,
    });
    } catch (error) {
        console.log(error)
    }

};

/*----------------Posts----------------*/
export function getPosts() {
    return async function(dispatch) {
        await axios.get(`${URL_API}/posts/getall`)
        .then(res =>{
            console.log('el res del front',res)
            dispatch({
                type: GET_POSTS,
                payload: res.data
            })
        })
        .catch(e => console.log(e))
    }
}

export function getInfo(id) {
    return async function(dispatch) {
        await axios.get(`${URL_API}/posts/${id}`)
        .then(res =>{
            dispatch({
                type: GET_INFO,
                payload: res.data
            })
        })
        .catch(e => console.log(e))
    }
}

export function getCategorias(lista) {
    const listCat = []
    lista.map((e)=>{return e.categoria.map(el=>{return listCat.push(el)})})
    return {
        type: GET_CATEGORIAS,
        payload: new Set(listCat)
    }
}

export function getMediaType(mediainfo) {
    return {
        type: GET_MEDIATYPE,
        payload: mediainfo
    }
}

export function getMediaUrl(mediainfo) {
    return {
        type: GET_MEDIAURL,
        payload: mediainfo
    }
}

export function resetMedia() {
    return {
        type: RESET_MEDIA
    }
}

export function getNextVisor(index){
    return {
        type: NEXT_VISOR,
        payload: index
    }
}

export function getResetVisor(){
    return {
        type: RESET_VISOR
    }
}

/*---------------Tienda---------------*/
export function getProducts(){
    return async function (dispatch){
        await axios.get(`${URL_API}/product/all`)
        .then(res =>{
            dispatch({
                type: GET_PRODUCTS,
                payload: res.data
            })
        })
        .catch(e => console.log(e))
    }
}

export function getProductDetails(id) {
    return async function(dispatch) {
        await axios.get(`${URL_API}/product/${id}`)
        .then(res =>{
            dispatch({
                type: GET_PRODUCT_DETAILS,
                payload: res.data
            })
        })
        .catch(e => console.log(e))
    }
}

export function resetProductDetails() {
    return {
        type: RESET_PRODUCT_DETAILS
    }
}

/*------------Filter&Search------------*/
export function loadingSearchSet(){

}

export function searchMedia(){

}

export function searchStateChange(){

}

export function totalMedia(){
    
}

/*--------------Pagination-------------*/

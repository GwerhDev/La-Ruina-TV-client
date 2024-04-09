import axios from "axios";
import { URL_API } from "../../config";
import { options } from "../../helpers";
import { getCategories, getGenres, getMedia, getMediatypes, getProducers } from "./content";
import { GET_INFO, GET_USERS, SET_CONTENT_CATEGORIES, SET_CONTENT_GENRES, SET_CONTENT_MEDIATYPES, SET_EDITION } from "../../misc";

export const setEdition = (boolean) => {
  return {
    type: SET_EDITION,
    payload: boolean
  }
};

export const createMedia = (formData) => {
  return async function (dispatch) {
    const response = await axios.post(`${URL_API}/admin/content/create`, formData, options());
    dispatch(getMedia());
    return response.data;
  }
};

export const updateMedia = (id, formData) => {
  return async function (dispatch) {
    const response = await axios.patch(`${URL_API}/admin/content/update/${id}`, formData, options());
    dispatch(getMedia());
    return response.data;
  }
};

export const deleteMedia = (id) => {
  return async function (dispatch) {
    const response = await axios.delete(`${URL_API}/admin/content/delete/${id}`, options());
    dispatch(getMedia());
    return response;
  }
};

export function createMediatype(name) {
  return async function (dispatch) {
    const mediatype = { name }
    try {
      const response = await axios.post(`${URL_API}/admin/mediatype/create`, mediatype, options());
      dispatch(getMediatypes());
      return response;
    } catch (error) {
      console.error(error);
    }
  }
};

export function deleteMediatype(id) {
  return async function (dispatch) {
    try {
      const response = await axios.delete(`${URL_API}/admin/mediatype/delete/${id}`, options());
      dispatch(getMediatypes());
      return response;
    } catch (error) {
      console.error(error);
    }
  }
};

export function createGenre(name) {
  return async function (dispatch) {
    const genre = { name }
    try {
      const response = await axios.post(`${URL_API}/admin/genre/create`, genre, options());
      dispatch(getGenres());
      return response;
    } catch (error) {
      console.error(error);
    }
  }
};

export function deleteGenre(id) {
  return async function (dispatch) {
    try {
      const response = await axios.delete(`${URL_API}/admin/genre/delete/${id}`, options());
      dispatch(getCategories());
      return response;
    } catch (error) {
      console.error(error);
    }
  }
};

export function createCategory(name) {
  return async function (dispatch) {
    const category = { name }
    try {
      const response = await axios.post(`${URL_API}/admin/category/create`, category, options());
      dispatch(getCategories());
      return response;
    } catch (error) {
      console.error(error);
    }
  }
};

export function deleteCategory(id) {
  return async function (dispatch) {
    try {
      const response = await axios.delete(`${URL_API}/admin/category/delete/${id}`, options());
      dispatch(getCategories());
      return response;
    } catch (error) {
      console.error(error);
    }
  }
};

export function createProducer(name) {
  return async function (dispatch) {
    const producer = { name }
    try {
      const response = await axios.post(`${URL_API}/admin/producer/create`, producer, options());
      dispatch(getProducers());
      return response;
    } catch (error) {
      console.error(error);
    }
  }
};

export function deleteProducer(id) {
  return async function (dispatch) {
    try {
      const response = await axios.delete(`${URL_API}/admin/producer/delete/${id}`, options());
      dispatch(getProducers());
      return response;
    } catch (error) {
      console.error(error);
    }
  }
};

export function getUsers() {
  return async function (dispatch) {
    try {
      await axios.get(`${URL_API}/user/`, options())
        .then(res => {
          dispatch({
            type: GET_USERS,
            payload: res.data
          })
        })
    } catch (e) {
      console.error(e);
    }
  }
};

export function createUser(formData) {
  return async function (dispatch) {
    try {
      await axios.post(`${URL_API}/admin/user/create/`, formData, options())
        .then(res => {
          dispatch(getUsers())
          return res.data;
        })
    } catch (e) {
      console.error(e);
    }
  }
};

export function updateUser(id) {
  return async function (dispatch) {
    try {
      await axios.patch(`${URL_API}/admin/user/update/${id}`, options())
        .then(res => {
          dispatch(getUsers())
          return res.data;
        })
    } catch (e) {
      console.error(e);
    }
  }
};

export function deleteUser(id) {
  return async function (dispatch) {
    try {
      await axios.delete(`${URL_API}/admin/user/delete/${id}`, options())
        .then(res => {
          dispatch(getUsers())
          return res.data;
        })
    } catch (e) {
      console.error(e);
    }
  }
};

export function setInfoDetailViewer(formData) {
  return {
    type: GET_INFO,
    payload: formData
  }
};

export function setContentCategories(object) {
  return {
    type: SET_CONTENT_CATEGORIES,
    payload: object
  }
};

export function setContentGenres(object) {
  return {
    type: SET_CONTENT_GENRES,
    payload: object
  }
};

export function setContentMediatypes(object) {
  return {
    type: SET_CONTENT_MEDIATYPES,
    payload: object
  }
};
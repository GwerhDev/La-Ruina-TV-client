import axios from "axios";
import { URL_API } from "../../config";
import { UPDATE_MEDIA } from "../../misc";
import { options } from "../../helpers";
import { getCategories, getGenres, getMedia, getMediatypes } from "./media";

export const createMedia = (formData) => {
  return async function (dispatch) {
    const response = await axios.post(`${URL_API}/admin/media/create`, formData, options());
    dispatch(getMedia());
    return response.data;
  }
};

export const updateMedia = (id) => {
  return async function (dispatch) {
    const response = await axios.patch(`${URL_API}/admin/media/update/${id}`, options());
    return dispatch({
      type: UPDATE_MEDIA,
      payload: response.data
    }, getMedia()
    )
  }
};

export const deleteMedia = (id) => {
  return async function (dispatch) {
    const response = await axios.delete(`${URL_API}/admin/media/delete/${id}`, options());
    dispatch(getMedia());
    return response;
  }
};

export function createMediatype(name) {
  return  async function (dispatch) {
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
  return  async function (dispatch) {
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
  return  async function (dispatch) {
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
  return  async function (dispatch) {
    try {
      const response = await axios.delete(`${URL_API}/admin/genre/delete/${id}`, options());
      dispatch(getGenres());
      return response;
    } catch (error) {
      console.error(error);
    }
  }
};

export function createCategory(name) {
  return  async function (dispatch) {
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
  return  async function (dispatch) {
    try {
      const response = await axios.delete(`${URL_API}/admin/category/delete/${id}`, options());
      dispatch(getCategories());
      return response;
    } catch (error) {
      console.error(error);
    }
  }
};
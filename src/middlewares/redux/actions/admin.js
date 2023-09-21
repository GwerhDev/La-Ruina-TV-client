import axios from "axios";
import { URL_API } from "../../config";
import { options } from "../../helpers";
import { getCategories, getGenres, getMedia, getMediatypes } from "./media";
import { GET_USERS } from "../../misc";

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
    dispatch(getMedia());
    return response.data;
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
      dispatch(getGenres());
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
}

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
}

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
}

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
}
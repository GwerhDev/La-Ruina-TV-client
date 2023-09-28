import axios from "axios";
import { URL_API } from "../../config";
import { GET_FAVORITES, GET_USER_DATA } from "../../misc";
import { options } from "../../helpers";

export function getUserData() {
  return async function (dispatch) {
    try {
      const response = !options()?? await axios.get(`${URL_API}/account/my-data`, options());
      dispatch({
        type: GET_USER_DATA,
        payload: response.data?.userData
      })
    } catch (e) {
      console.error(e);
      localStorage.removeItem('userToken');
    }
  }
};

export function getFavorites() {
  return async function (dispatch) {
    !options()?? await axios.get(`${URL_API}/account/my-favorites/`, options())
      .then(res => {
        dispatch({
          type: GET_FAVORITES,
          payload: res.data
        })
      })
      .catch(e => console.error(e));
  }
};

export function addFavorites(userId, mediaId) {
  const formData = { userId, mediaId };
  return async function (dispatch) {
    await axios.post(`${URL_API}/account/add-favorite`, formData, options())
      .then(res => {
        dispatch({
          type: GET_FAVORITES,
          payload: res.data.favorites
        })
      })
      .catch(e => console.error(e));
  }
};

export function deleteFavorites(userId) {
  return async function (dispatch) {
    await axios.delete(`${URL_API}/account/delete-favorite/${userId}`, options())
      .then(res => {
        dispatch({
          type: GET_FAVORITES,
          payload: res.data.favorites
        })
      })
      .catch(e => console.error(e));
  }
};
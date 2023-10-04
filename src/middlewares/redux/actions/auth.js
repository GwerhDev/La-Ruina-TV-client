import axios from "axios";
import { URL_API } from "../../config";
import { CURRENT_USER, ERROR } from "../../misc";
import { options } from "../../helpers";
import { reset } from "../../../functions/Reset";

export function auth(history) {
  return async function (dispatch) {
    await axios.get(`${URL_API}/auth`, options())
      .then(res => {
        dispatch({
          type: CURRENT_USER,
          payload: res.data.userData
        })
        return res.data.logged && history.push(`/browser`);
      })
      .catch((e) => {
        console.error(e);
        return;
      }
    )
  }
};

export function loginInner(email, password, history) {
  return async function (dispatch) {
    await axios.post(`${URL_API}/login-inner`, { email, password })
      .then(res => {
        localStorage.setItem('userToken', res.data.token);
        res.data.logged && history.push(`/auth?token=${res.data.token}`);
        reset();
      })
      .catch((e) => {
        dispatch({ 
          type: ERROR, 
          payload: e.response.data.message 
        });
        console.error(e.code);
        return;
      }
    )
  }
};

export function loginGoogle() {
  return async function () {
    await axios.get(`${URL_API}/login-google`)
      .catch((e) => { console.error(e) });
  }
};

export function signupInner(email, password, history) {
  return async function () {
    await axios.post(`${URL_API}/signup-inner`, { email, password })
      .then(res => {
        return res.data.logged && history.push(`/auth?token=${res.data.token}`);
      })
      .catch((e) => {
        console.error(e);
        return;
      }
    )
  }
};

export function signupGoogle(history) {
  return async function () {
    await axios.get(`${URL_API}/signup-google`)
      .then(res => {
        return res.data.logged && history.push(`/auth?token=${res.data.token}`);
      })
      .catch((e) => {
        console.error(e);
        return;
      }
    )
  }
};


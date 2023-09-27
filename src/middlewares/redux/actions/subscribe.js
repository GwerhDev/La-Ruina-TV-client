import axios from "axios";
import { URL_API } from "../../config";

export const subscribePlanMercadopago = (formData) => {
  return async function (dispatch) {
    await axios.post(`${URL_API}/subscribe/mercadopago`, formData);
    return;
  }
};

export const subscribePlanFlow = (formData) => {
  return async function (dispatch) {
    await axios.post(`${URL_API}/subscribe/flow`, formData);
    return;
  }
};

export const subscribePlanPaypal = (formData) => {
  return async function (dispatch) {
    await axios.post(`${URL_API}/subscribe/paypal`, formData);
    return;
  }
};
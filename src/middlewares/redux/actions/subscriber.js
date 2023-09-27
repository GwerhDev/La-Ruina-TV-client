import axios from "axios"
import { URL_API } from "../../config"
import { GET_YT_SUBSCRIBERS } from "../../misc"

export const subscriberYoutubeVerification = (email) => {
  return async function (dispatch) {
    await axios.post(`${URL_API}/subscribers/youtube`, email)
      .then(res => {
        dispatch({
          type: GET_YT_SUBSCRIBERS,
          payload: res.data
        })
      })
  }
};

export const subscriberPlanVerification = (email) => {
  return async function (dispatch) {
    await axios.post(`${URL_API}/subscribers/plan`, email)
      .then(res => {
        dispatch({
          type: GET_YT_SUBSCRIBERS,
          payload: res.data
        })
      })
  }
};

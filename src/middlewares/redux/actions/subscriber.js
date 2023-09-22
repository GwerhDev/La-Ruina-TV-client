import axios from "axios"
import { URL_API } from "../../config"
import { GET_YT_SUBSCRIBERS } from "../../misc"

export const subscriberVerification = (email) => {
  return async function (dispatch) {
    await axios.post(`${URL_API}/subscribers`, email)
      .then(res => {
        dispatch({
          type: GET_YT_SUBSCRIBERS,
          payload: res.data
        })
      })
  }
};
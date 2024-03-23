import { SET_BACK_ROUTE } from "../../misc";

export function setBackRoute(route) {
  return {
    type: SET_BACK_ROUTE,
    payload: route
  }
};

export function resetBackRoute() {
  return {
    type: SET_BACK_ROUTE,
    payload: null
  }
};
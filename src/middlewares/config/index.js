import { environment } from "../../environment";
import { DEVELOPMENT } from "../misc";

export const URL_API = environment === DEVELOPMENT ? "http://localhost:8080":"https://laruinatv-api.fly.dev";
export const URL_STREAMBY = environment === DEVELOPMENT ? "http://localhost:1312":"https://streamby-api.vercel.app";

export const URL_LARUINAHUB_REGISTER = "https://hub.laruina.cl/#/register";
export const URL_LARUINAHUB_LOGIN = "https://hub.laruina.cl/#/oauth/chooseaccount/tv.laruina.cl";
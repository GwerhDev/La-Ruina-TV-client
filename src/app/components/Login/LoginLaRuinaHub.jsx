import React from "react";
import s from "./LoginLaRuinaHub.module.css";
import laruinahubIcon from "../../../assets/images/ruina-records-icon.png";
import { URL_LARUINAHUB_LOGIN } from "../../../middlewares/config";

export default function LoginLaRuinaHub() {
  return (
    <div className={s.container}>
      <a className={s.button} href={URL_LARUINAHUB_LOGIN}>
        <span className={s.spanIcon}>
          <img
            src={laruinahubIcon}
            height="20px"
            className={s.img}
            alt=""
          />
        </span>
        <span className={s.spanText}>
          La Ruina Hub
        </span>
      </a>
    </div>
  );
}

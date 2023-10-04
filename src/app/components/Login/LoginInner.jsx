import s from "./LoginInner.module.css";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { loginInner } from "../../../middlewares/redux/actions/auth";
import { resetError } from "../../../middlewares/redux/actions/error";

const LoginInner = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const error = useSelector((state) => state.error);

  function handleEmail(e) {
    setEmail(e.target.value);
    setErrorMessage("");
    dispatch(resetError());
    return;
  };

  function handlePassword(e) {
    setPassword(e.target.value);
    setErrorMessage("");
    dispatch(resetError());
    return;
  };

  function handleSubmit(e) {
    e.preventDefault();

    if(!email.includes("@")) {
      return setErrorMessage("Email inválido. Por favor, intente nuevamente");
    }

    return (
      dispatch(loginInner(email, password, history))
    )
  }

  useEffect(() => {
    if (email && password) setDisabled(false);
    else setDisabled(true);
  }, [email, password]);

  useEffect(() => {
    setErrorMessage(error);
  }, [error]);

  return (
    <div className={s.formCont}>
      <ul className={s.form_ul}>
        <form className={s.form}>
          <li className={s.form_li}>
            Correo electrónico
            <input
              type="text"
              name="email"
              required
              onInput={handleEmail}
              placeholder="email"
            />
          </li>
          <li className={s.form_li}>
            Contraseña
            <input
              type="password"
              name="password"
              required
              onInput={handlePassword}
              placeholder="contraseña"
            />
          </li>
          <li className={s.form_li}>
            <p>{errorMessage}</p>
            <button disabled={disabled} className={`${s.innerLoginButton} button1`} onClick={handleSubmit}>
              Entrar
            </button>
          </li>
        </form>
      </ul>
    </div>
  );
};

export default LoginInner;

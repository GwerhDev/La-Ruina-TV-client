import s from './Checkout.module.css';
import React from 'react';
import { BodyCss } from '../../../functions';
import { handleCheckout } from '../../../handlers/checkout';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { PAYMENT_FLOW, PAYMENT_MERCADOPAGO } from '../../../handlers/consts';

const Checkout = () => {
  const dispatch = useDispatch();
  const { type } = useParams();
  const typeCheck = type === "donation" ? "donate" : "browser";
  const currentUser = useSelector(state => state.currentUser);

  BodyCss();
  return (
    <div className={s.donateCont}>
      <div className='nav-fixed' ></div>
      <div className={s.donateFormat} >
        Plataforma de pago
        <ul className={s.ulContBtn}>
          <li className={s.donateBtn}>
            <button className={s.btnSubmit} onClick={() => handleCheckout(PAYMENT_FLOW, dispatch, type, currentUser)}>
              Flow.cl
            </button>
          </li>
          <li className={s.donateBtn}>
            <button className={s.btnSubmit} onClick={() => handleCheckout(PAYMENT_MERCADOPAGO, dispatch, type, currentUser)}>
              MercadoPago
            </button>
          </li>
        </ul>
        <li className={s.salirBtn}>
          <Link to={`/${typeCheck}`}>
            <button className={s.salirSubmit}>
              Volver
            </button>
          </Link>
        </li>
      </div>
    </div>
  )
}

export default Checkout;
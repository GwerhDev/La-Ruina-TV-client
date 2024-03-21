import s from './MySubscription.module.css';
import { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { RequestProfile } from '../RequestProfile/RequestProfile';
import { reset } from '../../../functions/Reset';
import { resetOption, setOption } from '../../../middlewares/redux/actions';
import checkedIcon from '../../../assets/images/checked-icon.png';
import { subscriberPlanVerification } from '../../../middlewares/redux/actions/subscriber';

export const MySubscription = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { id } = useSelector(state => state.currentUser);
  const activePlan = useSelector(state => state.activePlan);

  function handleClick() {
    return (
      dispatch(resetOption()),
      history.push('/checkout/subscription'),
      reset()
    )
  };

  useEffect(() => {
    dispatch(subscriberPlanVerification(id));
    dispatch(setOption('subscription'));
  }, [dispatch, id]);

  return (
    <main className='main-container'>
      <div className='nav-fixed' />
      <div className='section-container'>
        <div className='header-container'>
          <h1>Suscripción</h1>
          <h3>Elegí tu plan</h3>
        </div>
        <ul className={s.ulCheck}>
          <li className={s.liCheck}>
            <div className={s.divCheckCont}>
              <h2>Plan Freemium</h2>
              <div className={s.divPrice}>
                Gratuito
              </div>
              <div className={s.divDescription}>
                <ul>
                  <h5>
                    <li>
                      <img src={checkedIcon} width="12px" alt="check" /> Acceso a todo nuestro contenido mediante plataformas comerciales
                    </li>
                    <li>
                      <img src={checkedIcon} width="12px" alt="check" /> Debes suscribirte a nuestro canal de Youtube
                    </li>
                  </h5>
                </ul>
              </div>
              <div className={s.btnSubmitFree}>Activo</div>
            </div>
          </li>
          <li className={s.liCheck}>
            <div className={s.divCheckCont}>
              <h2>Plan Suscriptor</h2>
              <div className={s.divPrice}>
                $1.000 CLP mensual
              </div>
              <div className={s.divDescription}>
                <ul>
                  <h5>
                    <li>
                      <img src={checkedIcon} width="12px" alt="check" /> Acceso a todo nuestro contenido sin anuncios
                    </li>
                    <li>
                      <img src={checkedIcon} width="12px" alt="check" /> Reproduce tus canciones en cualquier lugar, incluso sin conexión
                    </li>
                    <li>
                      <img src={checkedIcon} width="12px" alt="check" /> Adquiere nuestro reproductor integrado para desplazarte por cualquier lugar sin dejar de escuchar tu música favorita
                    </li>
                  </h5>
                </ul>
              </div>
              <button className={!activePlan ? s.btnSubmitEnabled : s.btnSubmitDisabled} disabled={activePlan} onClick={handleClick}>
                {!activePlan ? 'Comenzar' : 'Activo'}
              </button>
            </div>
          </li>
        </ul>
      </div>
      <RequestProfile />
    </main>
  )
}

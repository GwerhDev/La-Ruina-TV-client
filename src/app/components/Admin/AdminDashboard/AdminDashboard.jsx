import s from './AdminDashboard.module.css';
import { Requests } from '../Requests/Requests';
import { RequestProfile } from '../../RequestProfile/RequestProfile';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setOption } from '../../../../middlewares/redux/actions';

export const AdminDashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setOption('dashboard'))
  }, [dispatch]);

  return (
    <div className={s.bodyContainer}>
      <div className='navFixed'/>
      <div className={s.container}>
        <div className={s.dashControlCont}>
          <div className="header-container">
            <h1>Bienvenido a tu dashboard</h1>
            <h3>¿Qué quieres hacer?</h3>
          </div>
          <ul>
            <li>
              <Requests/>
            </li>
          </ul>
        </div>
        <RequestProfile/>
      </div>
    </div>
  )
}
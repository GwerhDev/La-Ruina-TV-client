import s from './AdminDashboard.module.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Requests } from '../Requests/Requests';
import { setOption } from '../../../../middlewares/redux/actions';
import { RequestProfile } from '../../RequestProfile/RequestProfile';

export const AdminDashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setOption('dashboard'))
  }, [dispatch]);

  return (
    <div className={s.container}>
      <div className='nav-fixed' />
      <div className='head-container'>
        <div className={s.divHeader}>
          <div className={s.headerInner}>
            <div className='header-container'>
              <h1>Bienvenido a tu dashboard</h1>
              <h3>¿Qué quieres hacer?</h3>
            </div>
          </div>
          <Requests />
        </div>
      </div>
      <RequestProfile />
    </div>
  )
}
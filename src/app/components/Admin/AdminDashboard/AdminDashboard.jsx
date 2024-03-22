import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Requests } from '../Requests/Requests';
import { setOption } from '../../../../middlewares/redux/actions';
import { RequestProfile } from '../../RequestProfile/RequestProfile';
import { OptionSelector } from '../../../utils/OptionSelector';

export const AdminDashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setOption('dashboard'))
  }, [dispatch]);

  return (
    <main className='main-container'>
      <div className='nav-fixed' />
      <div className='section-container'>
        <div className='header-container'>
          <span className='section-description-container'>
            <h1>Bienvenido a tu dashboard</h1>
            <h3>¿Qué quieres hacer?</h3>
          </span>
          <OptionSelector content users settings />
        </div>
        <Requests />
      </div>
      <RequestProfile />
    </main>
  )
}
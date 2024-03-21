import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RequestProfile } from '../RequestProfile/RequestProfile';
import { setOption } from '../../../middlewares/redux/actions';

export const MyConfigurations = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setOption('configuration'))
  }, [dispatch]);

  return (
    <main className='main-container'>
      <div className='nav-fixed' />
      <div className='section-container'>
        <div className='header-container'>
          <span className='section-description-container'>
            <h1>Configuraciones</h1>
            <h3>Edita las preferencias de tu aplicación</h3>
          </span>
        </div>
      </div>
      <RequestProfile />
    </main>
  )
}

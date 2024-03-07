import s from './MyConfigurations.module.css';
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
    <div className={s.configContainer}>
      <div className='divProfile'>
        <div className='navFixed' />
        <div className={s.divHeader}>
          <div className={s.headerInner}>
            <div className="header-container">
              <h1>Configuraciones</h1>
              <h3>Edita las preferencias de tu aplicación</h3>
            </div>
          </div>
        </div>
      </div>
      <RequestProfile />
    </div>
  )
}

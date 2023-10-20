import s from './Auth.module.css';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { auth } from '../../../middlewares/redux/actions/auth';
import { setUserToken } from '../../../middlewares/helpers';

const Auth = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const userToken = params.get('token');
  
  useEffect(() => {
    if (userToken) {
      setUserToken(userToken);
      dispatch(auth(history));
    }
  }, [dispatch, userToken, history]);

  return (
    <div className={s.loaderContainer}>
      <div className='loader'></div>
    </div>
  )
}

export default Auth;
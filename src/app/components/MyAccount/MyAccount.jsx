import s from './MyAccount.module.css';
import userIcon from '../../../assets/images/user-icon.png';
import { RequestProfile } from '../RequestProfile/RequestProfile';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setOption } from '../../../middlewares/redux/actions';
import { OptionSelector } from '../../utils/OptionSelector';

export const MyAccount = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.currentUser);
  const { username, profilePic, role } = currentUser || null;

  useEffect(() => {
    dispatch(setOption('profile'))
  }, [dispatch]);

  return (
    <main className='main-container'>
      <div className='nav-fixed' />
      <div className='section-container'>
        <div className='header-container'>
          <span className='section-description-container'>
            <p>Perfil de</p>

            <h1>{username ? username : "Usuario"}</h1>

            <li>
              <img
                className={s.userIcon}
                referrerPolicy="no-referrer"
                src={profilePic ? profilePic : userIcon}
                height='100px'
                alt="foto de perfil"
              />
            </li>
            <li>{role}</li>
          </span>
          <OptionSelector security settings support />
        </div>
      </div>
      <RequestProfile />
    </main>
  )
}
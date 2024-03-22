import s from './MyAccount.module.css';
import userIcon from '../../../assets/images/user-icon.png';
import { RequestProfile } from '../RequestProfile/RequestProfile';
import { DeleteAccount } from '../DeleteAccount/DeleteAccount';
import { useDispatch, useSelector } from 'react-redux';
import { $d } from '../../../functions';
import { getUserToken } from '../../../middlewares/helpers';
import { useEffect } from 'react';
import { setOption } from '../../../middlewares/redux/actions';

export const MyAccount = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.currentUser);
  const { username, profilePic, role } = currentUser || null;
  const urlHub = currentUser ? 'https://hub.laruina.cl/#/account/settings/' + getUserToken() : 'https://hub.laruina.cl/';

  function handleClick() {
    return $d('#deleteAccount').style.display = 'flex';
  };

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
        </div>
        <div className={s.buttons}>
          <a href={urlHub}><button className='button-primary'>Editar cuenta</button></a>
          <button className='button-secondary' onClick={handleClick}>Eliminar cuenta</button>
        </div>
        <div className={s.deleteAccount} id={'deleteAccount'}>
          <DeleteAccount />
        </div>
      </div>
      <RequestProfile />
    </main>
  )
}
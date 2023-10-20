import s from './Profile.module.css';
import userIcon from '../../../assets/images/user-icon.png';
import { RequestProfile } from '../../components/RequestProfile/RequestProfile';
import { DeleteAccount } from '../DeleteAccount/DeleteAccount';
import { useSelector } from 'react-redux';
import { $d } from '../../../functions';
import { getUserToken } from '../../../middlewares/helpers';

export const Profile = () => {
  const currentUser = useSelector(state => state.currentUser);
  const { username, profilePic, role } = currentUser;
  const urlHub = currentUser? 'https://hub.laruinarecords.cl/#/account/settings/' + getUserToken() : 'https://hub.laruinarecords.cl/';

  function handleClick() {
    return $d('#deleteAccount').style.display = 'flex';
  };

  return (
    <div>
      <div className={s.dashControlCont}>
        <div className='divProfile'>
          <div className='navFixed' />
          <div className={s.profileFather}>
            <div className={s.profileCont}>
              <ul className={s.ulListProfile}>
                <li className={s.liProfile1}>
                  Perfil de
                </li>
                <li className={s.liProfile2}>
                  <h1>{username ? username : "Usuario"}</h1>
                </li>
                <li>
                  <img
                    className={s.userIcon}
                    referrerPolicy="no-referrer"
                    src={profilePic ? profilePic : userIcon}
                    height='100px'
                    alt="foto de perfil"
                  />
                </li>
                <li className={s.liProfile3}>{role}</li>
              </ul>
            </div>
            <div className={s.buttons}>
              <a href={urlHub}><button className='button1'>Editar cuenta</button></a>
              <button className='button2' onClick={handleClick}>Eliminar cuenta</button>
            </div>
            <RequestProfile />
            <div className={s.deleteAccount} id={'deleteAccount'}>
              <DeleteAccount />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
import s from './ProfileMenu.module.css';
import profileMenuCss from '../../../functions/ProfileMenu';
import { setOption } from '../../../middlewares/redux/actions';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import btnMenuTv from '../../../assets/images/ruinatv-icon-play-b.png';
import likeIcon from '../../../assets/images/svg/like-icon.svg';
import userIcon from '../../../assets/images/svg/profile-icon.svg';
import configIcon from '../../../assets/images/svg/settings-icon.svg';
import adminIcon from '../../../assets/images/svg/admin-icon.svg';
import logoutIcon from '../../../assets/images/svg/logout-icon.svg';
import subscriptionIcon from '../../../assets/images/svg/billing-icon.svg';
import { logout } from '../../../functions/Logout';
import { toTop } from '../../../functions/toTop';

export const ProfileMenu = () => {
  const currentUser = useSelector(state => state.currentUser);
  const dispatch = useDispatch();
  const history = useHistory();
  const { profilePic, username, role } = currentUser;

  function onClickValue(e) {
    toTop();
    dispatch(setOption(e.target.value || e));
    history.push("/" + e.target.value || e);
  };

  return (
    <div className={s.profileCont}>
      <div className={s.profileBtnCont}>
        <div className={s.profileBtnMenu} id='profile-button' onClick={() => profileMenuCss('enter')} onMouseLeave={() => profileMenuCss('leave')}>
          <img className={s.userIcon} referrerPolicy="no-referrer" src={profilePic ? profilePic : userIcon} alt='userIcon' width='25px' />
          <p>Hola, <span>{username ? username.substring(0, 5) + "..." : "Usuario"}</span></p>
          <img className={s.btnMenuTv} src={btnMenuTv} alt='menú' width='8px' />
        </div>
        <ul className={s.ulProfileOptions} id='ul-options-profile-menu'>
          <li className={s.liProfileMenuDisplay}>
            <button
              id='optionProfileBtn0'
              className={s.optionProfileBtn}
              value='profile'
              onClick={(e) => onClickValue(e)}
              onMouseEnter={() => profileMenuCss('enter')}>
              <img
                className={s.imgIconProf}
                referrerPolicy="no-referrer"
                src={profilePic ? profilePic : userIcon}
                onClick={(e) => e.target.value = 'profile'}
                alt=""
              />
              PERFIL
            </button>
          </li>
          <li className={s.liProfileMenuDisplay}>
            <button
              id='optionProfileBtn2'
              className={s.optionProfileBtn}
              value='favorites'
              onClick={(e) => onClickValue(e)}
              onMouseEnter={() => profileMenuCss('enter')}>
              <img
                className={s.imgIcon}
                onClick={(e) => e.target.value = 'favorites'}
                src={likeIcon}
                alt="" />
              MIS FAVORITOS
            </button>
          </li>
          <li className={s.liProfileMenuDisplay}>
            <button
              id='optionProfileBtn3'
              className={s.optionProfileBtn}
              value='configuration'
              onClick={(e) => onClickValue(e)}
              onMouseEnter={() => profileMenuCss('enter')}>
              <img
                className={s.imgIcon}
                onClick={(e) => e.target.value = 'configuration'}
                src={configIcon}
                alt="" />
              CONFIGURACIÓN
            </button>
          </li>
          <li className={s.liProfileMenuDisplay}>
            <button
              id='optionProfileBtn4'
              className={s.optionProfileBtn}
              value='subscription'
              onClick={(e) => onClickValue(e)}
              onMouseEnter={() => profileMenuCss('enter')}>
              <img
                className={s.imgIcon}
                onClick={(e) => e.target.value = 'subscription'}
                src={subscriptionIcon}
                alt="" />
              SUSCRIPCIÓN
            </button>
          </li>
          {
            role === 'admin'
              ?
              <li className={s.liProfileMenuDisplay}>
                <button
                  id='optionProfileBtn5'
                  className={s.optionProfileBtn}
                  value={role === 'admin' ? 'dashboard' : 'subscription'}
                  onClick={(e) => onClickValue(e)}
                  onMouseEnter={() => profileMenuCss('enter')}>
                  <img
                    className={s.imgIcon}
                    onClick={(e) => e.target.value = 'dashboard'}
                    src={adminIcon}
                    alt="" />
                  DASHBOARD
                </button>
              </li>
              : null
          }
          <li className={s.liProfileMenuDisplay}>
            <button
              id='optionProfileBtn6'
              className={s.optionProfileBtn}
              onClick={() => logout(history)}
              onMouseEnter={() => profileMenuCss('enter')}>
              <img
                className={s.imgIcon}
                src={logoutIcon}
                alt="" />
              SALIR
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

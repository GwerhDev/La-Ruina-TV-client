import s from './UserButton.module.css';
import profileButtonFunctions from '../../../functions/ProfileButton';
import btnMenuTv from '../../../assets/images/ruinatv-icon-play-b.png';
import userIcon from '../../../assets/images/svg/profile-icon.svg';
import { useSelector } from 'react-redux';

export const UserButton = () => {
  const currentUser = useSelector(state => state.currentUser);
  const { profilePic, username } = currentUser;

  return (
    <div className={s.container}>
      <div className={s.profileBtnCont}>
        <div className={s.profileBtnMenu} id='profile-button'>
          <div className={s.usernameContainer}>
            {
              profilePic
              ?
              <img className={s.profilePic} referrerPolicy="no-referrer" src={profilePic} alt='userIcon' width='25px' />
              :
              <img className={s.userIcon} referrerPolicy="no-referrer" src={userIcon} alt='userIcon' width='25px' />
            }
            <p id='username' className={s.username}>Hola, <span>{username ? username.substring(0, 5) + "..." : "Usuario"}</span></p>
          </div>
          <div className={s.openMenuButton} onClick={() => profileButtonFunctions('enter')} onMouseLeave={() => profileButtonFunctions('leave')}>
            <img className={s.btnMenuTv} src={btnMenuTv} alt='menú' width='8px' />
          </div>
        </div>
      </div>
    </div>
  )
}

import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import s from './UserButton.module.css';
import btnMenuTv from '../../../assets/images/ruinatv-icon-play-b.png';
import userIcon from '../../../assets/images/svg/profile-icon.svg';
import { useSelector } from 'react-redux';
import { userButtonClick, userButtonEnter, userButtonLeave } from '../../../functions/UserButton';
import { setBackRoute } from '../../../middlewares/redux/actions/navigation';

export const UserButton = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const currentUser = useSelector(state => state.currentUser);
  const { profilePic, username } = currentUser;

  function handleClick() {
    dispatch(setBackRoute(location.pathname));
    userButtonLeave();
    history.push("/u/profile");
  }

  return (
    <div className={s.container}>
      <div className={s.profileBtnCont}>
          <div className={s.profileBtnMenu} id='profile-button' onMouseEnter={userButtonEnter}>
            <div className={s.usernameContainer}>
              {
                profilePic
                  ?
                  <img className={s.profilePic} referrerPolicy="no-referrer" src={profilePic} alt='userIcon' width='25px' />
                  :
                  <img className={s.userIcon} referrerPolicy="no-referrer" src={userIcon} alt='userIcon' width='25px' />
              }
              <p onClick={handleClick} id='username' className={s.username}>Hola, <span>{username ? username.substring(0, 5) + "..." : "Usuario"}</span></p>
            </div>
            <div className={s.openMenuButton} onClick={userButtonClick} onMouseLeave={() => userButtonLeave}>
              <img className={s.btnMenuTv} src={btnMenuTv} alt='menú' width='8px' />
            </div>
          </div>
      </div>
    </div>
  )
}

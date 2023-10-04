import s from './RequestProfile.module.css';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOption } from '../../../middlewares/redux/actions';
import userIcon from '../../../assets/images/user-icon.png';
import likeIcon from '../../../assets/images/like-icon.png';
import configIcon from '../../../assets/images/config-icon.png';
import adminIcon from '../../../assets/images/admin-icon.png';
import logoutIcon from '../../../assets/images/logout-icon.png';
import subscriptionIcon from '../../../assets/images/subscription-icon.png';
import { OptionProfile } from '../../../functions';

export const RequestProfile = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const option = useSelector(state => state.option);
    const { profilePic, role } = useSelector(state => state.currentUser);

    useEffect(() => {
        OptionProfile(option)
    }, [option]);

    return (
        <div className={s.divProfileMenu}>
            <ul className={s.ulProfileMenu}>
                <ul className={s.ulRequestProfile}>
                    <div className={s.userRequestsContainer}>
                        <li>
                            <img 
                                referrerPolicy="no-referrer" 
                                src={profilePic ?? userIcon} 
                                className={s.userIcon} 
                                id='profileIcon' 
                                alt="perfil" 
                                onClick={() => dispatch(getOption('profile'))} 
                            />
                            <span id='spanProfile' className={s.spanProfile}>Perfil</span>
                        </li>
                        <li>
                            <img src={likeIcon} className={s.likeIcon} id='favoritesIcon' alt="favoritos" onClick={() => { return dispatch(getOption('favorites')) }} />
                            <span id='spanFavs' className={s.spanFavs}>Favs</span>
                        </li>
                        <li>
                            <img src={configIcon} className={s.configIcon} id='configIcon' alt="configuration" onClick={() => { return dispatch(getOption('configuration')) }} />
                            <span id='spanList' className={s.spanLists}>Config</span>
                        </li>
                        {
                            role === 'admin' ?
                                <li>
                                    <img src={adminIcon} className={s.adminIcon} id='dashboardIcon' onClick={() => { return dispatch(getOption('dashboard')) }} alt="lista" />
                                    <span id='spanAdmin' className={s.spanOpt}>Dash</span>

                                </li>
                                :
                                <li>
                                    <img src={subscriptionIcon} className={s.subscriptionIcon} id='subscriptionIcon' onClick={() => { return dispatch(getOption('subscription')) }} alt="lista" />
                                    <span id='spaSubs' className={s.spanOpt}>Subs</span>
                                </li>
                        }
                    </div>
                    <div className={s.exitContainer}>
                        <li>
                            <img
                                src={logoutIcon}
                                className={s.logoutIcon}
                                alt="salir"
                                onClick={() => {
                                    return (
                                        localStorage.removeItem('userToken'),
                                        history.push('/browser'),
                                        window.location.reload()
                                    )
                                }} />
                        </li>
                    </div>
                </ul>
            </ul>
        </div>
    )
}

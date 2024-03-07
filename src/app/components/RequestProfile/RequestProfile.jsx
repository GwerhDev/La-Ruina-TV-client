import s from './RequestProfile.module.css';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import userIcon from '../../../assets/images/user-icon.png';
import likeIcon from '../../../assets/images/like-icon.png';
import configIcon from '../../../assets/images/config-icon.png';
import adminIcon from '../../../assets/images/admin-icon.png';
import logoutIcon from '../../../assets/images/logout-icon.png';
import subscriptionIcon from '../../../assets/images/subscription-icon.png';
import { OptionProfile } from '../../../functions';
import { logout } from '../../../functions/Logout';
import { resetOption } from '../../../middlewares/redux/actions';

export const RequestProfile = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const option = useSelector(state => state.option);
    const { profilePic, role } = useSelector(state => state.currentUser);

    useEffect(() => {
        OptionProfile(option)
    }, [option]);

    function handleOption(e) {
        history.push(e);
        dispatch(resetOption())
    };

    return (
        <div className={s.divProfileMenu}>
            <ul className={s.ulProfileMenu}>
                <ul className={s.ulRequestProfile}>
                    <div className={s.userRequestsContainer}>
                        <li>
                            <img 
                                src={profilePic ?? userIcon} 
                                className={s.userIcon} id='profileIcon' alt="perfil" 
                                onClick={() => handleOption('/profile')} 
                            />
                            <span id='spanProfile' className={s.spanProfile}>Perfil</span>
                        </li>
                        <li>
                            <img 
                                src={likeIcon} 
                                className={s.likeIcon} 
                                id='favoritesIcon' alt="favoritos" 
                                onClick={() => handleOption('/favorites')}
                            />
                            <span id='spanFavs' className={s.spanFavs}>Favs</span>
                        </li>
                        <li>
                            <img 
                                src={configIcon} 
                                className={s.configurationIcon} id='configurationIcon' alt="configuration" 
                                onClick={() => handleOption('/configuration')} 
                            />
                            <span id='spanList' className={s.spanLists}>Config</span>
                        </li>
                        <li>
                            <img 
                                src={subscriptionIcon} 
                                className={s.subscriptionIcon} id='subscriptionIcon' alt="lista"
                                onClick={() => handleOption('/subscription')} 
                            />
                            <span id='spaSubs' className={s.spanOpt}>Subs</span>
                        </li>
                        {
                            role === 'admin' 
                            ?   <li>
                                    <img 
                                        src={adminIcon} 
                                        className={s.adminIcon} id='dashboardIcon' alt="lista" 
                                        onClick={() => handleOption('/dashboard')} 
                                    />
                                    <span id='spanAdmin' className={s.spanOpt}>Dash</span>
                                </li>
                            :   null
                        }
                    </div>
                    <div className={s.exitContainer}>
                        <li>
                            <img
                                src={logoutIcon}
                                className={s.logoutIcon}
                                alt="salir"
                                onClick={() => logout(history)}/>
                        </li>
                    </div>
                </ul>
            </ul>
        </div>
    )
}

import s from './LogoButton.module.css'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import navBack from '../../../functions/Navigator';
import ruinaLogo from '../../../assets/images/ruina-logo.png';
import { toTop } from '../../../functions/toTop';
import { resetPlayer } from '../../../middlewares/redux/actions/player';
import { useDispatch } from 'react-redux';
import { resetOption } from '../../../middlewares/redux/actions';

export const LogoButton = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [posNav, setPosNav] = useState();
  window.onscroll = function () { navBack(setPosNav, posNav) };

  const handleLogoClick = () => {
    toTop();
    dispatch(resetPlayer());
    dispatch(resetOption());
    history.push('/');
  };

  return (
    <div className={s.container}>
      <div className={s.logoContainer}>
        <div className={s.logoButton}>
          <div className={s.containerLogo}>
            <img className={s.ruinaLogo} src={ruinaLogo} alt="La Ruina TV" onClick={handleLogoClick} />
          </div>
        </div>
      </div>
    </div>
  )
};

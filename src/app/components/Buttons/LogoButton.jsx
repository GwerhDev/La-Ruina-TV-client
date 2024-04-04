import s from './LogoButton.module.css'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import navBack from '../../../functions/Navigator';
import ruinaLogo from '../../../assets/images/ruina-logo.png';
import { $d, $gId } from '../../../functions';
import btnMenuTv from '../../../assets/images/ruinatv-icon-play-b.png';
import { toTop } from '../../../functions/toTop';
import { resetPlayer } from '../../../middlewares/redux/actions/player';
import { useDispatch } from 'react-redux';

export const LogoButton = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [posNav, setPosNav] = useState();
  window.onscroll = function () { navBack(setPosNav, posNav) };

  document.addEventListener('mouseup', function (e) {
    var effectLogo = $gId('effect-logo');
    var container1 = $gId('app-option-1');
    var container2 = $gId('app-option-2');
    var container3 = $gId('app-option-3');
    if (!$d("#logo-button").contains(e.target) && !$d("#apps-container").contains(e.target)) {
      $d("#logo-button").style.backgroundColor = "transparent";
      $d("#apps-container").style.display = "none";
      effectLogo.style.width = '100px';
      container1.style.transform = 'translateX(-210px)';
      container2.style.transform = 'translateX(-210px)';
      container3.style.transform = 'translateX(-210px)';
      container1.style.scale = '0';
      container2.style.scale = '0';
      container3.style.scale = '0';
    }
    return;
  });

  const handleLogoClick = () => {
    toTop();
    dispatch(resetPlayer())
    history.push('/');
  };

  const handleAppsMenu = () => {
    var effectLogo = $gId('effect-logo');
    var container1 = $gId('app-option-1');
    var container2 = $gId('app-option-2');
    var container3 = $gId('app-option-3');
    $d("#logo-button").style.backgroundColor = "#171717";
    $d("#apps-container").style.display = "flex";
    effectLogo.style.width = '100%';
    container1.style.transform = 'translateX(0)'
    container2.style.transform = 'translateX(0)'
    container3.style.transform = 'translateX(0)'
    container1.style.scale = '1'
    container2.style.scale = '1'
    container3.style.scale = '1'
  }

  return (
    <div className={s.container}>
      <div className={s.logoContainer}>
        <div className={s.logoButton} id='logo-button'>
          <div className={s.containerLogo}>
            <span className={s.openMenuButton} onClick={handleAppsMenu}>
              <img className={s.btnMenuTv} src={btnMenuTv} alt='menú' width='8px' />
            </span>
            <div className={s.logoInnerContainer} id='effect-logo'>
              <img className={s.ruinaLogo} src={ruinaLogo} alt="La Ruina TV" onClick={handleLogoClick} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

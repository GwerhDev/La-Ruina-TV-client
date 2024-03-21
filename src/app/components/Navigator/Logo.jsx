import { useHistory } from 'react-router-dom';
import s from './Logo.module.css'
import { useState } from 'react';
import navBack from '../../../functions/Navigator';
import ruinaLogo from '../../../assets/images/ruina-logo.png';
import { $d, $gId } from '../../../functions';
import { getUserToken } from '../../../middlewares/helpers';
import { useSelector } from 'react-redux';
import btnMenuTv from '../../../assets/images/ruinatv-icon-play-b.png';
import { toTop } from '../../../functions/toTop';

export const Logo = () => {
    const history = useHistory();
    const currentUser = useSelector((state) => state.currentUser);
    const urlMerch = 'https://merch.laruina.cl/';
    const urlPlay = currentUser? 'https://play.laruina.cl/#/auth?token=' + getUserToken() : 'https://play.laruina.cl/';
    const urlHub = currentUser? 'https://hub.laruina.cl/#/auth/' + getUserToken() : 'https://hub.laruina.cl/';
    const [posNav, setPosNav] = useState();
    window.onscroll = function () { navBack(setPosNav, posNav) };

    document.addEventListener('mouseup', function(e) {
        var container1 = $gId('app-option-1');
        var container2 = $gId('app-option-2');
        var container3 = $gId('app-option-3');
        if (!$d("#logo-button").contains(e.target) && !$d("#apps-container").contains(e.target)) {
            $d("#logo-button").style.backgroundColor="transparent";
            $d("#apps-container").style.display="none";
            container1.style.transform='translateX(-210px)'
            container2.style.transform='translateX(-210px)'
            container3.style.transform='translateX(-210px)'
            container1.style.scale='0'
            container2.style.scale='0'
            container3.style.scale='0'
        } 
        return; 
    });

    const handleLogoClick = () => {
        toTop();
        history.push('/');
    };

    const handleAppsMenu = () => {
        var container1 = $gId('app-option-1');
        var container2 = $gId('app-option-2');
        var container3 = $gId('app-option-3');
        $d("#logo-button").style.backgroundColor="#171717";
        $d("#apps-container").style.display="flex";
        container1.style.transform='translateX(0)'
        container2.style.transform='translateX(0)'
        container3.style.transform='translateX(0)'
        container1.style.scale='1'
        container2.style.scale='1'
        container3.style.scale='1'
    }

    return (
        <div className={s.logo}>
            <div className={s.logoButton} id='logo-button'>
                <span onClick={handleAppsMenu}><img className={s.btnMenuTv} src={btnMenuTv} alt='menú' width='10px' /></span>
                <img className={s.ruinaLogo} src={ruinaLogo} alt="La Ruina TV" onClick={handleLogoClick} />
            </div>
            <ul className={s.appsContainer} id='apps-container'>
                <a href={urlHub}><li id='app-option-1'>Hub</li></a>
                <a href={urlPlay}><li id='app-option-2'>Play</li></a>
                <a href={urlMerch}><li id='app-option-3'>Merch</li></a>
            </ul>
        </div>
    )
};

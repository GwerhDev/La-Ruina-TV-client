import s from './Logo.module.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { resetOption } from '../../../middlewares/redux/actions';
import { reset } from '../../../functions/Reset';
import navBack from '../../../functions/Navigator';
import ruinaLogo from '../../../assets/images/ruina-logo.png';
import { $d, $gId } from '../../../functions';
import { getUserToken } from '../../../middlewares/helpers';
import { useSelector } from 'react-redux';

export const Logo = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.currentUser);
    const [posNav, setPosNav] = useState();
    window.onscroll = function () { navBack(setPosNav, posNav) };
    const urlMerch = 'https://merch.laruina.cl/';
    const urlPlay = currentUser? 'https://play.laruina.cl/#/auth?token=' + getUserToken() : 'https://play.laruina.cl/';
    const urlHub = currentUser? 'https://hub.laruina.cl/#/auth/' + getUserToken() : 'https://hub.laruina.cl/';


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

        return (
            dispatch(resetOption()),
            reset()
        )
    };

    return (
        <div className={s.logo}>
            <div className={s.logoButton} id='logo-button'>
                <img className={s.ruinaLogo} src={ruinaLogo} alt="La Ruina TV" onClick={handleLogoClick}/>
            </div>
            <ul className={s.appsContainer} id='apps-container'>
                <a href={urlHub}><li id='app-option-1'>Hub</li></a>
                <a href={urlPlay}><li id='app-option-2'>Play</li></a>
                <a href={urlMerch}><li id='app-option-3'>Merch</li></a>
            </ul>
        </div>
    )
};

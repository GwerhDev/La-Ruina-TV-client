import s from './CanvasMenu.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resetOption } from '../../../middlewares/redux/actions';
import { reset } from '../../../functions/Reset';
import { CanvasMenuFunction } from '../../../functions/CanvasMenuFunction';
import navBack from '../../../functions/Navigator';
import { getUserToken } from '../../../middlewares/helpers';

export const CanvasMenu = () => {
    const dispatch = useDispatch();
    const [posNav, setPosNav] = useState();
    const currentUser = useSelector((state) => state.currentUser);
    const urlMerch = 'https://merch.laruinarecords.cl/';
    const urlPlay = currentUser? 'https://play.laruinarecords.cl/#/auth?token=' + getUserToken() : 'https://play.laruinarecords.cl/';
    const urlHub = currentUser? 'https://hub.laruinarecords.cl/#/account/settings/' + getUserToken() : 'https://hub.laruinarecords.cl/';


    function handleClick() {
        window.scrollTo(0, 0)
        return (
            dispatch(resetOption()),
            reset()
        )
    };

    window.onscroll = function () { navBack(setPosNav, posNav) };
    CanvasMenuFunction();
    return (
        <div className="contCanvasMenu">
            <div className={s.contMenu}>
                <ul className={s.navBurgerMenu}>
                    <li onClick={handleClick}>
                        <Link to='/browser'>Inicio</Link>
                    </li>
                    <li onClick={handleClick}>
                        <Link to='/releases'>Novedades</Link>
                    </li>
                    <li onClick={handleClick}>
                        <Link to='/donate'>Colaborar</Link>
                    </li>
                    <li onClick={handleClick}>
                        <a href={urlPlay}> Play </a>
                    </li>
                    <li onClick={handleClick}>
                        <a href={urlMerch}> Merch </a>
                    </li>
                    <li onClick={handleClick}>
                        <a href={urlHub}> Hub </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
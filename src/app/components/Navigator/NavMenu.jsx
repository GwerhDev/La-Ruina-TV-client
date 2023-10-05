import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { resetOption } from '../../../middlewares/redux/actions';
import { getUserToken } from '../../../middlewares/helpers';
import { reset } from '../../../functions/Reset';
import navBack from '../../../functions/Navigator';

export const NavMenu = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.currentUser);
    const [posNav, setPosNav] = useState();
    const urlMerch = 'https://merch.laruinarecords.cl/';
    const urlPlay = currentUser? 'https://play.laruinarecords.cl/#/auth?token=' + getUserToken() : 'https://play.laruinarecords.cl/';
    const urlHub = currentUser? 'https://hub.laruinarecords.cl/#/account/settings/' + getUserToken() : 'https://hub.laruinarecords.cl/';
    
    window.onscroll = function() {navBack(setPosNav, posNav)};

    function handleClick() {
        window.scrollTo(0, 0)
        return (
            dispatch(resetOption()),
            reset()
        )
    };

    return (
        <ul className='navMenu'>
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
    )
}

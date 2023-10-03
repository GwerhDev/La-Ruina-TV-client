import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import navBack from './js/Navigator';
import { resetOption } from '../../../middlewares/redux/actions';
import { getUserToken } from '../../../middlewares/helpers';
import { reset } from './js/Reset';

export const NavMenu = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.currentUser);
    const [posNav, setPosNav] = useState();
    const urlMerch = 'https://merch.laruinarecords.cl/';
    const urlPlay = 'https://play.laruinarecords.cl/';
    const urlHub = currentUser? 'https://hub.laruinarecords.cl/#/account/settings/' + getUserToken() : 'https://hub.laruinarecords.cl/';
    window.onscroll = function() {navBack(setPosNav, posNav)};

    return (
        <ul className='navMenu'>
            <li
                onClick={()=>{
                    window.scrollTo(0, 0)
                    return(
                    dispatch(resetOption()),
                    reset()
                    )}}>
                <Link to='/browser'>Inicio</Link></li>
            <li
                onClick={()=>{
                    window.scrollTo(0, 0)
                    return(
                    dispatch(resetOption()),
                    reset()
                    )}}>
                <Link to='/releases'>Novedades</Link>
            </li>
            <li
                onClick={()=>{
                    window.scrollTo(0, 0)
                    return(
                    dispatch(resetOption()),
                    reset()
                    )}}>
                <Link to='/donate'>Colaborar</Link>
            </li>
            <li>
                <a href={urlPlay}> Play </a>
            </li>
            <li>
                <a href={urlMerch}> Merch </a>
            </li>
            <li>
                <a href={urlHub}> Hub </a>
            </li>
        </ul>
    )
}

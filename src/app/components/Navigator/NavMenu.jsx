import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import navBack from './js/Navigator';
import { $d } from '../../../functions';
import { resetOption } from '../../../middlewares/redux/actions';
import { getUserToken } from '../../../middlewares/helpers';

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
                    $d(`.bodyApp`).style.transform='translateX(0)',
                    $d(`.navCont`).style.transitionDuration='.2s',
                    $d(`.bodyApp`).style.transitionDuration='2s',
                    $d(`.navCont`).style.width='100%',
                    $d(`.browserBody`).style.height='auto',
                    $d(`.browserBody`).style.overflowY='scroll',
                    $d(`.visor`).style.transform='translateX(0)',
                    $d('#slideCanvasCont').style.overflowY="scroll"
                    )}}>
                <Link to='/browser'>Inicio</Link></li>
            <li
                onClick={()=>{
                    window.scrollTo(0, 0)
                    return(
                    dispatch(resetOption()),
                    $d(`.bodyApp`).style.transform='translateX(0)',
                    $d(`.navCont`).style.transitionDuration='.2s',
                    $d(`.bodyApp`).style.transitionDuration='2s',
                    $d(`.navCont`).style.width='100%',
                    $d(`.browserBody`).style.height='auto',
                    $d(`.browserBody`).style.overflowY='scroll',
                    $d(`.visor`).style.transform='translateX(0)',
                    $d('#slideCanvasCont').style.overflowY="scroll"
                    )}}>
                <Link to='/releases'>Novedades</Link>
            </li>
            <li
                onClick={()=>{
                    window.scrollTo(0, 0)
                    return(
                    dispatch(resetOption()),
                    $d(`.bodyApp`).style.transform='translateX(0)',
                    $d(`.navCont`).style.transitionDuration='.2s',
                    $d(`.bodyApp`).style.transitionDuration='2s',
                    $d(`.navCont`).style.width='100%',
                    $d(`.browserBody`).style.height='auto',
                    $d(`.browserBody`).style.overflowY='scroll',
                    $d(`.visor`).style.transform='translateX(0)',
                    $d('#slideCanvasCont').style.overflowY="scroll"
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

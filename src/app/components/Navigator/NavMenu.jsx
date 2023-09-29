import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import navBack from './js/Navigator';
import { resetOption } from '../../../middlewares/redux/actions';
import { $d } from '../../../functions';

const NavMenu = () => {
    const dispatch = useDispatch()
    const [posNav, setPosNav] = useState()
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
                    $d(`.navCont`).style.width='100vw',
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
                    $d(`.navCont`).style.width='100vw',
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
                    $d(`.navCont`).style.width='100vw',
                    $d(`.browserBody`).style.height='auto',
                    $d(`.browserBody`).style.overflowY='scroll',
                    $d(`.visor`).style.transform='translateX(0)',
                    $d('#slideCanvasCont').style.overflowY="scroll"
                    )}}>
                <Link to='/donate'>Colaborar</Link>
            </li>
            <li>
                <a href='https://play.laruinarecords.cl/'> Play </a>
            </li>
            <li>
                <a href='https://merch.laruinarecords.cl'> Merch </a>
            </li>
            <li>
                <a href='https://hub.laruinarecords.cl/'> Hub </a>
            </li>
        </ul>
    )
}

export default NavMenu
import s from './CanvasMenu.module.css';
import { useState } from 'react';
import navBack from './js/Navigator';
import { $d } from '../../../functions';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetOption } from '../../../middlewares/redux/actions';
import CanvasMenuFunction from './js/CanvasMenuFunction';

export const CanvasMenu = () => {
    const dispatch = useDispatch();
    const [posNav, setPosNav] = useState();
    window.onscroll = function() {navBack(setPosNav, posNav)};
    CanvasMenuFunction();
    return(
        <div className="contCanvasMenu">
            <div className={s.contMenu}>
            <ul className={s.navBurgerMenu}>
            <li
                onClick={()=>{
                    $d('.contCanvasMenu').style.display='none'
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
                    $d('.contCanvasMenu').style.display='none',
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
                    $d('.contCanvasMenu').style.display='none',
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
                    $d('.contCanvasMenu').style.display='none',
                    $d('#slideCanvasCont').style.overflowY="scroll"
                    )}}>
                    <Link to='/donate'>Colaborar</Link></li>
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
                            $d('.contCanvasMenu').style.display='none',
                            $d('#slideCanvasCont').style.overflowY="scroll")}}>
                        <a href='https://merch.laruinarecords.cl' target=' _blank' > Merch </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
import s from './CanvasMenu.module.css';
import { useState } from 'react';
import navBack from '../../../functions/Navigator';
import { $d } from '../../../functions';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetOption } from '../../../middlewares/redux/actions';
import { reset } from '../../../functions/Reset';
import CanvasMenuFunction from '../../../functions';

export const CanvasMenu = () => {
    const dispatch = useDispatch();
    const [posNav, setPosNav] = useState();
    window.onscroll = function () { navBack(setPosNav, posNav) };
    CanvasMenuFunction();
    return (
        <div className="contCanvasMenu">
            <div className={s.contMenu}>
                <ul className={s.navBurgerMenu}>
                    <li
                        onClick={() => {
                            $d('.contCanvasMenu').style.display = 'none'
                            window.scrollTo(0, 0)
                            return (
                                dispatch(resetOption()),
                                reset()
                            )
                        }}>
                        <Link to='/browser'>Inicio</Link></li>
                    <li
                        onClick={() => {
                            window.scrollTo(0, 0)
                            return (
                                dispatch(resetOption()),
                                reset()
                            )
                        }}>
                        <Link to='/releases'>Novedades</Link>
                    </li>
                    <li
                        onClick={() => {
                            window.scrollTo(0, 0)
                            return (
                                dispatch(resetOption()),
                                reset()
                            )
                        }}>
                        <Link to='/donate'>Colaborar</Link></li>
                    <li
                        onClick={() => {
                            window.scrollTo(0, 0)
                            return (
                                dispatch(resetOption()),
                                reset()
                            )
                        }}
                    >
                        <a href='https://merch.laruinarecords.cl' target=' _blank' > Merch </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
import s from './CanvasMenu.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetOption } from '../../../middlewares/redux/actions';
import { reset } from '../../../functions/Reset';
import { CanvasMenuFunction } from '../../../functions/CanvasMenuFunction';
import navBack from '../../../functions/Navigator';

export const CanvasMenu = () => {
    const dispatch = useDispatch();
    const [posNav, setPosNav] = useState();

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
                </ul>
            </div>
        </div>
    )
}
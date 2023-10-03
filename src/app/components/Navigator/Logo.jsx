import s from './Logo.module.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetOption } from '../../../middlewares/redux/actions';
import { reset } from '../../../functions/Reset';
import navBack from '../../../functions/Navigator';
import ruinaLogo from '../../../assets/images/ruina-logo.png';

export const Logo = () => {
    const dispatch = useDispatch();
    const [posNav, setPosNav] = useState();
    window.onscroll = function () { navBack(setPosNav, posNav) };

    const handleLogoClick = () => {
        window.scrollTo(0, 0)
        return (
            dispatch(resetOption()),
            reset()
        )
    };

    return (
        <div className={s.logo}>
            <Link to='/browser'>
                <img className={s.ruinaLogo} src={ruinaLogo} alt="La Ruina TV" onClick={handleLogoClick}/>
            </Link>
        </div>
    )
};

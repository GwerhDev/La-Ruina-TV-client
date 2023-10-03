import s from './Navigator.module.css';
import { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { NavMenu } from './NavMenu';
import { useDispatch } from 'react-redux';
import { NavSearchBar } from './NavSearchBar';
import { NavProfileMenu } from './NavProfileMenu';
import { NavBurgerMenuTablet } from './NavBurgerMenuTablet';
import { getUserData } from '../../../middlewares/redux/actions/account';
import navBack from '../../../functions/Navigator';

export const Navigator = () => {
    const dispatch = useDispatch();
    const [posNav, setPosNav] = useState();

    useEffect(() => {
        dispatch(getUserData());
    }, [dispatch]);
    
    window.onscroll = function () { navBack(setPosNav, posNav) };

    return (
        <div className='navCont'>
            <section className={s.leftSection}>
                <Logo/>
            </section>
            <section className={s.middleSection}>
                <NavMenu/>
                <NavBurgerMenuTablet/>
            </section>
            <section className={s.rightSection}>
                <NavSearchBar/>
                <NavProfileMenu/>
            </section>
        </div>
    )
}

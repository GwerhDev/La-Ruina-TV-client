import s from './Navigator.module.css';
import { useState, useEffect } from 'react';
import { NavMenu } from './NavMenu';
import { useDispatch } from 'react-redux';
import { NavSearchBar } from './NavSearchBar';
import { NavProfileMenu } from '../UserMenu/UserMenu';
import { LogoButton } from '../Buttons/LogoButton';
import { BurgerButton } from '../Buttons/BurgerButton';
import { getUserData } from '../../../middlewares/redux/actions/account';
import navBack from '../../../functions/Navigator';
import { ConnectedApps } from '../ConnectedApps/ConnectedApps';
import { UserOptions } from '../UserOptions/UserOptions';

export const Navigator = () => {
    const dispatch = useDispatch();
    const [posNav, setPosNav] = useState();

    useEffect(() => {
        dispatch(getUserData());
    }, [dispatch]);

    window.onscroll = function () { navBack(setPosNav, posNav) };

    return (
        <div className='nav-container'>
            <div className={s.innerNavContainer}>
                <section className={s.leftSection}>
                    <LogoButton />
                    <ConnectedApps />
                </section>
                <section className={s.middleSection}>
                    <NavMenu />
                    <BurgerButton />
                </section>
                <NavSearchBar />
                <section className={s.rightSection}>
                    <NavProfileMenu />
                    <UserOptions />
                </section>
            </div>
        </div>
    )
}

import s from './Navigator.module.css';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavSearchBar } from '../SearchBar/NavSearchBar';
import { NavMenu } from './NavMenu';
import { UserMenu } from '../UserMenu/UserMenu';
import { LogoButton } from '../Buttons/LogoButton';
import { BurgerButton } from '../Buttons/BurgerButton';
import { UserOptions } from '../UserOptions/UserOptions';
import { ConnectedApps } from '../ConnectedApps/ConnectedApps';
import { getUserData } from '../../../middlewares/redux/actions/account';
import navBack from '../../../functions/Navigator';

export const Navigator = () => {
  const dispatch = useDispatch();
  const [posNav, setPosNav] = useState();
  window.onscroll = function () { navBack(setPosNav, posNav) };

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

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
          <UserMenu />
          <UserOptions />
        </section>
      </div>
    </div>
  )
}

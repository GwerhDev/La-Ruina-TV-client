import React, { useState } from 'react';
import navBack from './js/Navigator';
import NavMenu from './NavMenu';
import Logo from './Logo';
import NavSearchBar from './NavSearchBar';
import { NavBurgerMenuTablet } from './NavBurgerMenuTablet';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUserData } from '../../../middlewares/redux/actions/account';


export const Navigator = () => {
    const location = useLocation()
    const currentPath = location.pathname;

    const [posNav, setPosNav] = useState()
    window.onscroll = function() {navBack(setPosNav, posNav)};

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserData())
    }, [dispatch]);

    return (
        <div className='navCont'>
            <Logo/>
            {
                !(currentPath === '/admin')
                ?<>
                    <NavMenu/>
                    <NavBurgerMenuTablet/>
                    <NavSearchBar/>
                </>
                : null
            }
        </div>
    )
}

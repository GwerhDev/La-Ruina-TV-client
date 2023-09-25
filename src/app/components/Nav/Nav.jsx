import React, { useState } from 'react';
import navBack from './js/Nav';
import NavMenu from './NavMenu'
import Logo from './Logo';
import NavSearchBar from './NavSearchBar';
import { NavBurgerMenuTablet } from './NavBurgerMenuTablet';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUserData } from '../../../middlewares/redux/actions/account';


const Nav = () => {
    const location = useLocation()
    const currentPath = location.pathname;
    const userToken = localStorage.getItem('userToken')

    const [posNav, setPosNav] = useState()
    window.onscroll = function() {navBack(setPosNav, posNav)};

    const dispatch = useDispatch();

    useEffect(() => {
        !userToken?? dispatch(getUserData())
    }, [dispatch, userToken]);

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

export default Nav
import s from './NavProfileMenu.module.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ProfileMenu } from './ProfileMenu';
import { BackButton } from './BackButton';
import { EnterBtn } from './EnterButton';
import navBack from '../../../functions/Navigator';


export const NavProfileMenu = () => {
    const [posNav, setPosNav] = useState()
    const option = useSelector(state=>state.option)
    const currentUser = useSelector(state=>state.currentUser)
    window.onscroll = function() {navBack(setPosNav, posNav)};

    return (
        <ul className={s.profileMenuBtn}>
            {
                !currentUser
                ? option==='login'? <li><BackButton /></li> : <li><EnterBtn /></li>
                : option === '' || option==='login'? <li><ProfileMenu/></li> : <li><BackButton /></li> 
            }
        </ul>
    )
}